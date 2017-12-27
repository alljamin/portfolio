---
layout: page
title: Personal website revamp
description: A fresh look on my online presence
date: 2017/11/17
image: "/assets/img/portfolio/background.jpg"
---

So the day finally came and the new version of my portfolio is up and running! Yay!

My previous portfolio was missing the dynamic generation of HTML, so that all the pages and links had to be created every time by hand. That is not the most efficient way of doing things.

This time I decided to give a closer look on my technology stack and came up with the following:

- [Homebrew](https://brew.sh): separate local version of Ruby, eliminate dangerous `sudo` commands
- [NPM](https://npmjs.com) packages: gulp, vendor autoprefix, proper SASS compilation, CSS minification, file rename, browser live reload, image minification
- [Jekyll](https://jekyllrb.com) (Liquid, Front Matter): static HTML generation, relative urls
- [GIT](https://git-scm.com/): version control
- [Github Pages](https://pages.github.com): hosting
- [Namecheap](https://namecheap.com): domain registar, Whois Guard
- [Cloudflare](https://cloudflare.com): SSL, DNSSEC, CDN, HTTP/2, Automatic HTTP to HTTPS rewrites

Combining everything together, and spending as little as AUD12, I have a fully functional web resource, what presents my online presence in a modern and optimised way.

You can find the detailed instructions on you can build something for yourself with my project as a starting point on my [Github repository](https://github.com/alljamin/portfolio).