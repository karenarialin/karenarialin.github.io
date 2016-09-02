---
layout: default
title: README
---


#Welcome to the portfolio website of Karen Lin! 
##What a journey it was to build it. 

You can find it [here](http://karenarialin.github.io). 

Structure & tools: Jekyll + Github Pages + CloudFlare

###Phase 1:

Design process: did wireframes with pen and paper, designed logo

Debated between multi-page and single-scroll layout. Decided on multi-page. 

At first, I struggled along with pure HTML/CSS/Javascript and Github Pages. But I felt like I was writing repetitive code in the headers and footers. The images were loading slowly. The design was lackluster and the colors clashed.

I was also getting some bad scores from Google Page Speed. Error messages: leverage caching, blocking script.

This old design is still in my backup branch because I can't bear to kill old iterations. 

###Phase 2: 

I did more research and got feedback from friends before coming up with my current design. 

I searched for ways to speed up the loading time and "leverage caching," as Google told me to do. That's when I discovered Jekyll, the static site generator that went along so nicely with Github Pages. After more research, I found CloudFlare, a Content Delivery Network that promised speed and security for free. Wow! 

It felt like my site was reborn.

Deployed!

###Phase 3:

The site still loaded my footer background picture slowly, so it was time to talk about mobile responsiveness, analytics, and browser caching. Fun stuff! Things people can't see but are just important.

Mobile responsiveness: got rid of padding on left and right, used wrapper 75%-80%. Still looks unattractive, but at least it works. Finished without making too many media queries. 

Optimizing images was easy, just saving the picture as a gif through Adobe Illustrator. Next...

Deferring JS loading until all the HTML is loaded. Easy to do for script.js, another thing to defer JQuery. 

But then I looked up other websites, and many of them didn't get 100% on PageSpeed Insights. Even google.com doesn't have 100%. I was just being a short-sighted perfectionist!

So I moved on to Cloudflare. Hopefully that would solve my cache leveraging problems. 

Turns out I needed a custom domain. Oh well, I would have to spend money eventually. asdfasdf


##To-do enhancements:
1. Restructure Work page so that it uses separate html pages for each section, instead of divs.  
2. Change landing page design. Kind of egoistic.
3. Find a custom domain
4. Clean up CSS. It's a mess. Will use Sass.
5. Make more mobile responsive. 

