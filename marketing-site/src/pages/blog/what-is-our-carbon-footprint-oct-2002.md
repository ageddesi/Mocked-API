---
layout: ../../layouts/BlogPost.astro
title: "What is our carbon footprint?"
pubDate: "07th October 2022"
heroImage: "/blog-images/beacon-header.png"
category: "news"
summary: "Recently we wanted to see what impace our site has on the environment"
author: "Aaron Rackley"
---

# Why?

Recently I was listening to a podcast when the conversation moved onto talk about what impact does one website have on the world.

We all know that websites run on servers and those servers need to be running, but we forget that also their is the power consumption of the user downloading the site from your server. The cost of them running js code that runs the site on their machine etc. 

So the question is what does our site use?

# Thats where Beacon comes in.

[Beacon]('https://digitalbeacon.co/') is a website that helps you calculate the environmental impact of a web page, see a breakdown and learn what measures a website can take to improve it. 

# What did our report show?

Firstly I would like to state that the check we have done so far has only been on this static website, not the API iteself. I will be looking more into that and hopefully have another blog post about that in the future. 

However in regards to this static site. Luckily for you, you can see the report that was run by heading over to [this link]('https://digitalbeacon.co/report/mocked-api-dev').

As you can see from the results we have been given a 4/5 (good) rating because our co2 is currently at 0.267g. Which considering to get a 5 rating you need 0.25 or less I would say is pretty awesome. 

<div style="text-align: center" class="mt-8 mb-8">
    <img alt="Our Carbon Report" src="/blog-images/beacon-large.png" class="m-auto" />
</div>

# How can we be better

The report is not only good for explaining how much your site is using in co2 but also ways on which to make your site better to bring that as low as you can.

For example here is a list of the **opportunities** that the site recommends

- Avoid enormous network payloads
- Time to interactive
- Speed Index
- Properly Size Images
- Use efficient Cache policy on static assets
- First Contentful paint
- Avoid an excessive DOM size
- Serves images in next-gen formats
- Initial Server response time was short
- Minimizes main-thread work
- Javascript Execution Time.
- Switch to green hosting.

As you can see there is a lot of small tweaks we can make on the site to help further to reducing the footprint and we have added all these to our ticket backlog to be looked at over the next few months.

# Lets plant some trees.

We will always do our best to keep the carbon footprint of the site down. Not only by taking steps above to help reduce our impact in the first place but also to offset the future. For that we have taken the feedback that we would need to plant 1 tree a year currently to offset our footprint from the report and paid to plant 5 trees.

We will then review this every quater to make sure our usage is still in those bounds and continue to plants trees with a minimum of 5 each time.

<div style="text-align: center" class="mt-8 mb-8">
    <img src="/blog-images/jot-logo-line-colour.png" class="m-auto" />
</div>

We have chosen to do this through the site [Just On Tree]('https://www.justonetree.life/our-impact.html') so please head over to see the work they do and donate towards planting trees as well. Every tree can go a long way. Below is the confirmation from our order.

<div style="text-align: center" class="mt-8 mb-8">
    <img src="/blog-images/donation-tree.png" class="m-auto" />
</div>


If you have any more ideas, tips or tricks to help reduce your sites carbon footprint and as a result ours, please do reach out via our discord channel [here]('https://discord.gg/6UaxgtsM')