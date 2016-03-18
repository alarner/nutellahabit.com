---
title: Documentation-First Design
description: Great frameworks are not defined by fancy algorithms, optimal performance, big communities, or even good test coverage *gasp!*
date: 2015-03-11
layout: post.html
collection: webDevelopment
---

Great frameworks are not defined by fancy algorithms, optimal performance, big communities, or even good test coverage *gasp!*

A great framework can answer one simple question: does it help me do do what I want to do faster than the alternatives.

I'm a huge node fanboy and have been using it as my back-end language of choice for web application development for almost two years now. I've built production apps with it and I've [taught others](/web-development/Project-based-learning-A-case-study-with-Ionic-and-Sails-js) how to use it. Yet every time I start a new project I'm frustrated with the poor choices out there for structuring my code. There is not a single node web development framework that doesn't frustrate me. I've become a less picky and more practical developer over time, but PHP has far better options for web development frameworks.

The problem with evaluating frameworks is that there is no shortcut for determining if it's going to save you time doing what you want to do. During my full-stack JavaScript journey I used some reasonable proxies for making decisions about what tools to use. I started with Express because... fuck... who didn't? Express was (still is?) the most popular node framework out there, but it almost turned me off from node development entirely. With Express I felt like I was re-inventing the wheel each time I started a new project. The concept of middleware is elegant and simple, but at the end of the day, all Express gave me was a router. No user authentication, no controllers, no models. None of the things that made my life easier as a developer.

After initially fumbling around with Express in 2013 I dismissed Node entirely for about a year. Then in 2014 I was introduced to [Sails](http://sailsjs.org/). It checked off all of the important boxes: big community, smart team behind it, also very popular. It was still early-ish in development when I started using it, but it was way better than Express. It had some opinions about how I should structure my code. It gave me easy ways to read and write to the database. To-date I think Sails is still the best tool out there (for me). But doing development with Sails is still really frustrating. While Waterline (Sails' ORM) is really elegant, it's still missing some critical features like transactions and stable migrations. I could probably get over this, but a few other missing pieces push me over the edge. My sails dev environment involves running forever to restart the sails server each time I make a change to a back-end file. It can take several seconds each time for the server to reboot. This along with poor / incomplete documentation has turned out to be a dealbreaker.

A few months ago I started working on my own flavor of a node web development framework that borrowed heavily from Sails, but aimed to fix some of the issues with server reloading using node clustering and used the more mature and complete Sequelize ORM. I have a block of free time this April and I've been considering spending some time cleaning things up and getting it to a usable state, but the more I think about it, the more I question if it will actually save developers time over the alternatives: and [there are a ton](http://nodeframework.com/). Let's assume I was able to fix all of my qualms with Sails. Without good documentation nobody will ever know about those solutions. Hell, Sails might have already solved these issues but I just don't know about it because it's missing from their docs.

With all that in mind I've decided to spend my time not writing code, but instead writing the documentation for the framework that I want. A node framework that will silently behave in a predictable way. A node framework will not try to do anything magical in an effort to save me time. It will be the most un-magical framework ever.

Instead it will be predictable, reliable, and peaceful. It will be called Willow. I don't know if it will ever actually get built. But if it does it will be built from some awesome docs that will be written before I touch a line of actual code.
