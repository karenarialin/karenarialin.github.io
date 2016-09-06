---
layout: default
title: README
---


#Welcome to the portfolio website of Karen Lin! 

##What a journey it was to build it. 

You can find it [here](http://karenarialin.me). 

Tools used: Brackets + Google Fonts + Github Pages + Jekyll + CloudFlare + Namecheap + Google Analytics

###Phase 1:

DESIGN: finalized personal logo, drew wireframes on pen and paper

Debated between multi-page and single-scroll layout. Decided on multi-page. 

PROBLEMS: At first, I struggled along with pure HTML/CSS/Javascript and Github Pages. But I was using repetitive code in the headers and footers. The images were loading slowly. The design was lackluster and the colors clashed.

I was getting bad scores from Google PageSpeed Insights. The error messages were "leverage browser caching," and "eliminate render-blocking JavaScript and CSS." 

###Phase 2: 

REDESIGN: I searched for ways to speed up the loading time and leverage caching. That's when I discovered Jekyll, the static site generator that played nicely with Github Pages. I also found CloudFlare, a Content Delivery Network that promised speed and security. 

I did more research and got feedback from friends before coming up with my current design. The old design is still in my backup branch because I can't bear to kill old versions.

When I deployed the redesign, it felt like my site was reborn. 

###Phase 3:

FINISHING TOUCHES: The site still loaded my footer background picture slowly, so it was time to fix mobile responsiveness, add analytics, and leverage browser caching.

MOBILE RESPONSIVE REDESIGN: Got rid of left and right padding, used 75%-80% width for the div containers. The site still looks unattractive, but at least it works. Finished without making too many media queries. Unfortunately, things would have been much easier if I had started with a mobile-first approach. At least I know how to start the next website project. 

PAGESPEED INSIGHTS: Optimizing images was easy, just saved pictures as gif files through Adobe Illustrator. Next...

Deferring JS loading was easy for script.js, complicated for JQuery. But then I searched up other websites, and many of them don't have 100% on PageSpeed Insights. Even google.com doesn't have 100%. 

So I moved on to Cloudflare. Hopefully that would solve my cache leveraging and security problems. But it turns out I need a custom domain. 

CUSTOM DOMAIN: I thought karenarialin.me had a nice ring to it, so I bought it on Namecheap. Followed instructions [here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to redirect karenarialin.github.io to karenarialin.me. 

Now I could add the website to my Cloudflare plan. As I waited for it to take effect, I redesigned my blog to flow better with the website. 

ANALYTICS: Last step! I signed up for Google Analytics and got it working. 

Time to deploy and share with the world!

##To-do enhancements:

1. Restructure Work page so that it uses separate html pages for each section, instead of divs. 

2. Change landing page design. Kind of egoistic.

3. Clean up CSS. It's a mess. Will use Sass.

4. Make more mobile responsive. 

5. Fix README. As you can see, it's not rendering so well. 

