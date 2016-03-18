---
title: "Project based learning: A case study with Ionic and Sails.js"
description: The idea of spaced repetition has interested me for a little while. It's basically the technique of using "increasing intervals of time between subsequent review of previously learned material." This concept is particularly interesting because I've been teaching a JavaScript course over the past three months, and I think it could be a useful tool in my classroom.
date: 2014-12-10
layout: post.html
collection: teaching
---

## Background

Two years ago my sister Abby and I attended Build Madison, one of my [favorite tech events](http://www.capitalentrepreneurs.com/build-madison-recap-3/) of all time. Neither of us were new to hackathons, but we decided to approach this particular event differently. Abby is a really [talented designer](http://abbylarner.com/), but she's always wanted to be able to take an entire project from initial idea to completed product on her own. Up until recently, lack of experience with a back end programming language was preventing her from doing that.

At Build Madison in 2012 we decided a good project would be just what Abby needed to get some exposure to a back end language. Over the course of this event we built Scrooge Buster, a shared holiday wish list for friends and family. We were able to create the entire web app over the course of 24 hours, but unfortunately due to the limited timeframe, Abby ended up only working on things she already knew, design and front-end coding, while I tackled the back-end.

Over the next two years Abby and I tried a number of different techniques to get her up to speed on a back-end language. We tried starting with the basics of PHP. We tried teaching more abstract application architecture. She tried Codecademy. Ultimately, all of these attempts failed for a few reasons I'll discuss below.

## A Breakthrough

Not until a few months ago do I feel like Abby really got a solid understanding of back-end coding, and it all came full circle with Scrooge Buster. Our family had been using Scrooge Buster ever since we built it in 2012, but it was due for an upgrade. The original version was built with an old version of a custom PHP framework I had developed and an outdated version of bootstrap on the front-end. It had bugs and was breaking at the seams, but our family asked for us to set it up every time the holidays rolled around. We didn't want to let it die.

Abby and I spent three weeks together this past November. We decided this was the perfect opportunity to kill two birds with one stone - give Scrooge Buster a facelift and give one more shot at teaching Abby back end development. We chose to use node for our back end language with Sails.js and Ionic for the front-end. Ionic is an awesome framework for building mobile apps on top of Cordova. This time we set a couple ground rules.

> 1. Abby would be the only one touching the keyboard.
> 1. We would do a little bit of work every day, even if for only 15 minutes.
> 1. No working on visual design until the development was complete.
> 1. Every day we would spend time on both core Javascript concepts, like variable types, objects, callback functions, etc. and more practical stuff like building out the API.
> 1. After about seven evenings of work, the back-end was done. Abby had written every single line of code, and had solidified her understanding of Javascript syntax. She was at the point where she could construct new API endpoints without my help.

## Takeaways

Why was this approach so much more effective than everything else we had tried in the past? I have a few ideas. First, the goal from the beginning was to teach, so it was slow moving at first, but that's okay. I wasn't worried about getting the project done in any certain amount of time, so it didn't matter if it took an entire evening to get one endpoint done. It was critical that Abby was the one who was doing all the typing. I think it helped with her memory and understanding of some of the basic concepts because she was going through the same motions over and over again. The repitition was key.

Second, we were consistent. Every day we would build on top of what we worked on the day before. If she forgot something, we went over it again, which reinforced the concept. Every day she was writing code, so there wasn't enough time for her to forget things.

Third, I think focusing on both core concepts, which are critically important, but less gratifying, with real project work was essential. We were finally able to strike the right balance between the fun stuff and the necessary stuff. If we had spent the first three days on just Javascript concepts, I don't know that the motivation to carry through on the project would have persisted.

Fourth, Ionic and Sails are awesome for teaching. They both do a good job of abstracting away a lot of the pain and complexity associated with mobile and API development, while allowing the us to focus on what was important.

Finally, the "immersive" way which we went through creating the API was new and worked really well. It was painful at the beginning because I was basically dictating every keystroke, but as time went on, I would just describe blocks of code to write, then high level concepts, and finally she was able to direct herself. It's amazing how quickly this progression happened.

Scrooge Buster is now up on [Google Play](https://play.google.com/store/apps/details?id=com.scroogebuster.app&hl=en) and should be on the App Store soon.

If you have experiences to share on how you've effectively taught or learned programming I'd love to hear them. Let me know in the comments!