---
title: Why my Node journey lead me to Perk
description: Four years ago I started my journey to learn Node. I started where most Node developers start, with Express, the most popular and oldest Node framework. Back in 2012 Express was still young, and from my perspective frustratingly immature. It lacked a lot of the features that I had come to expect from frameworks in other web development languages.
date: 2016-07-22
layout: post.html
collection: webDevelopment
---

Four years ago I started my journey to learn Node. I started where most Node developers start, with Express, the most popular and oldest Node framework. Back in 2012 Express was still young, and from my perspective frustratingly immature. It lacked a lot of the features that I had come to expect from frameworks in other web development languages like Ruby, Python and yes, even PHP.

After my initial frustrations with Express I decided to try the opposite end of the spectrum. I spent a year building Node apps with more full fledged frameworks like Sails.js. I built toy apps and I built one production app for a start-up that got real traffic and made real money. The problem was that anytime I wanted to do something non-trivial, something other than CRUD, it became excruciatingly difficult. I felt like I was hacking core infrastructure just to get back to the simplicity I had scorned a year earlier when using Express. These bigger frameworks forced me to use outdated build tools or had an incomplete ORMs or were very difficult to deploy or took seemingly forever to restart after any code change. If I wanted to swap out any of these pieces for a better one that would solve my problem it was like pulling teeth. Worst of all the documentation was poor, outdated, or absent.

And so I ran back to Express. This time I was more appreciative of its simplicity. The flexibility of middleware allowed me to use whichever tools I deemed appropriate. For another year I worked on a number of Node projects. Express was still missing some parts that I considered essential to a web development framework like a good configuration system, user authentication and error handling. And call me old fashioned but I couldn't get on the Mongo band wagon. So piece by piece I found good libraries to fill in those gaps, or built them myself. For each new library that I added to my Express projects I made damn sure that it could be swapped out easily if necessary.

Today I'm open sourcing Perk, a Node framework built on top of Express. I want to share my Node journey with new Node developers without forcing them to re-live my frustrations and failures. Perk sits balanced in-between bare bones Express itself, and bigger, less flexible frameworks. I tried to solve each problem that I encountered throughout my time using Node and am now at a place where I’m happy to say that I have a framework that is fun to use. It gives me ultimate control and at the same time is a good starting point, allowing me to avoid rebuilding yet another authentication system, configuration system, etc. Best of all it's got really good documentation (if I do say so myself) including standard API docs, guides and video tutorials. If this sounds like something you're interested in check it out, and think about throwing me a star on GitHub :)

http://perkframework.com

https://github.com/alarner/perk