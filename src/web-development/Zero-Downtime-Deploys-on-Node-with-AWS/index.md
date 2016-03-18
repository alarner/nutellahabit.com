---
title: Zero Downtime Deploys on Node with AWS
description: A year ago I decided to switch my main back-end language from PHP to Node and so far I've been mostly happy with that decision. There are a ton of advantages of using Node over PHP, but in this post I'm going to talk about one of the really annoying disadvantages.
date: 2014-09-21
layout: post.html
collection: webDevelopment
---

A year ago I decided to switch my main back-end language from PHP to Node and so far I've been mostly happy with that decision. There are a ton of advantages of using Node over PHP, but in this post I'm going to talk about one of the really annoying disadvantages. Since node runs as a single process web server, every time you make an update you have to completely restart the server. This means that your website is down for however long it takes for that server to restart. This is the case even if you are using nginx as a proxy to sit in front of your node application. Below I've outlined the solution that I use. If you have a better fix please share it in the comments.

This technique is based on running two AWS EC2 instances, both using an Elastic IP. Let's call the server that is currently active production, and the inactive server staging. When new code needs to be deployed, I... 

> 1. Deploy the code to the staging server.
> 1. Restart the staging server.
> 1. Point the Elastic IP for production to the staging box.
> 1. Point the Elastic IP for staging to the (former) production box.

Essentially I use Amazon's Elastic IPs to swap the staging and production boxes. 

## Why this technique is solid

Swapping Elastic IPs is pretty robust. What I've noticed is that requests that are made while the switch is happening will take longer than normal (5-10 seconds) but will eventually get routed to the right place. You will not hit any nasty errors during the transition. Even better, the AWS API allows you to automate this process. Below is a little snippet that I use in a Grunt file to automate the deployment:

```js
var deploy = function() {
	var serverName = grunt.option('serverName');
	if(!serverName) {
		console.log('--serverName=[bittybot|webby] required');
		return;
	}
	var done = this.async();
	var AWS = require('aws-sdk');
	var async = require('async');
	// Map your server names to an AWS Instance ID.
	// I use names other than prod and stage because at any given
	// time bittybot might be prod or stage. The same goes for tao.
	var servers = {
		'bittybot': 'i-AAAAAAAA',
		'tao': 'i-BBBBBBB'
	};
	var elasticIps = {
		'prod': {
			// The Elastic IP you assign to production
			'ip': 'XXX.XXX.XXX.XXX'
		},
		'stage': {
			// The Elastic IP you assign to staging
			'ip': 'YYY.YYY.YYY.YYY'
		}
	}
	var ec2 = new AWS.EC2({
		// Your AWS access key
		accessKeyId: config.aws.accessKeyId,
		// Your AWS secret key
		secretAccessKey: config.aws.secretAccessKey,
		// Your AWS region
		region: 'us-west-2'
	});
	async.series([
		function(cb) {
			console.log('Describing addresses...');
			ec2.describeAddresses(
				{PublicIps: [elasticIps.stage.ip, elasticIps.prod.ip]},
				function(err, data) {
					if(err) return cb(err);
					data.Addresses.forEach(function(address) {
						switch(address.PublicIp) {
							case elasticIps.stage.ip:
								elasticIps.stage.associationId =
									address.AssociationId;
							break;
							case elasticIps.prod.ip:
								elasticIps.prod.associationId =
									address.AssociationId;
							break;
						}
					});
					cb();
				}
			);
		},
		function(cb) {
			console.log('Disassociating stage...');
			if(elasticIps.stage.associationId) {
				ec2.disassociateAddress(
					{AssociationId: elasticIps.stage.associationId},
					function(err, data) {
						if(err) return cb(err);
						cb();
					}
				);
			}
			else {
				cb();
			}
		},
		function(cb) {
			console.log('Re-associating prod...');
			var params = {
				AllowReassociation: true,
				InstanceId: servers[serverName.toLowerCase()],
				PublicIp: elasticIps.prod.ip
			};
			ec2.associateAddress(params, cb);
		},
		function(cb) {
			console.log('Associating stage...');
			var instanceName = serverName.toLowerCase();
			if(instanceName == 'bittybot') {
				instanceName = 'tao';
			}
			else {
				instanceName = 'bittybot';
			}
			var params = {
				AllowReassociation: false,
				InstanceId: servers[instanceName],
				PublicIp: elasticIps.stage.ip
			};
			ec2.associateAddress(params, cb);
		}
	], function(err, results) {
		done();
		if(err) {
			console.trace(err);
		}
		else {
			console.log('Done!');
		}
	});
}
// Register the deploy function with Grunt
grunt.registerTask(
	'deploy',
	'Point the elastic IP to a new server.',
	deploy
);
```

## One gotcha

There is one extra thing you should keep in mind if you choose to use this dual-server setup. You will want to run your database and session store on one or more separate servers. If you're running your database locally on the web servers (production and staging), then you will have two out of sync databases which would be a total disaster. I run one RDS server to host our database and another ElastiCache server to run my redis instance that handles user sessions in addition to our staging and production EC2 instances. This way when I push new code and do our server switch, users don't lose data or get logged out of their session.

With my start-up, 900dpi, we host nearly 2,000 websites, so even if our server is down for 15 seconds that adds up to over eight hours of combined downtime for the websites that we host. As our platform grows that number will get even worse, so I struggled to come up with a solution that didn't bring our server down, even for a fraction of a second. This technique has been working fairly well for us for several months. It would be nice if requests that were made during the transition didn't hang for 10-15 seconds, but it sure beats showing a server error.

Do you have a better method for accomplishing no downtime deploys with node? Please share!