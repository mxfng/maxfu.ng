---
title: "A Drum Machine for the Browser"
description: "Building a browser-native drum machine with Tone.js and the Web Audio API."
date: "2025-03-20T08:00:00-07:00"
---

I started Drumhaus back in 2023 between jobs. I'd been working as a software engineer and producing music for most of my life, and I always wanted to dabble in DSP (digital signal processing) and product design for instruments. My goal was to re-imagine the classic hardware sequencer through the lens of modern web technologies. The drum machine platform felt approachable enough — pick a number of voices and a sequencer and you're building within reasonable constraints.

I did some research and discovered [io-808](https://io808.com/), a fully recreated TR-808 built with web audio by Vincent Riemer, an engineer at Meta. This stuff was hardcore. I saw some of his speaking engagements at audio tech conferences. His work served as the foundational inspiration for my project, and I was set on building my own with a twist.

I often get more motivated to build a product from the user experience side instead of the technical. I envisioned what Drumhaus would look and feel like, what the layout would be. I imagined the branding. Branding always gets me more excited. I had a Bauhaus poster in my room. It was orange and had repeating geometric patterns on it that I liked. So I swapped the _Bau_ for _Drum_, and Drumhaus was born. Bauhaus inspiration runs deeper in the product vision here, and I spent a lot of time studying the design of physical hardware I admired, as well as general Bauhaus philosophy. Functional, future-forward design. Reducing products to their most essential form and essence. The user interface takes playful inspiration from the classic Roland TR-909 and the skeuomorphic designs of VST instruments.

On the first pass, I'd barely touched any React code or DSP. I had no idea how to handle state management. Tone.js and the Web Audio API were brand new to me. But the idea of making beats in the browser seemed really fun.

I first made the mistake of trying to do it from "scratch" like Vincent did. He was a very experienced engineer. I was out of my depth. I attempted to build my own audio clock in JavaScript to manage scheduling, and that proved to be too difficult a task. That was when I pivoted to [Tone.js](https://tonejs.github.io/), where these foundational elements were handled out of the box. This was a great pivot that saved the project for me. I could worry less about the deeper aspects of DSP, a new subject to me, and instead focus more on the integration of various elements through abstraction.

![Drumhaus interface](../../assets/writing/a-drum-machine-for-the-browser/drumhaus-interface.webp)

I worked furiously for a few weeks and cobbled together a nice little working product. It had eight voices, A and B sequences, 10 kits with 10 presets, and lots of sound shaping parameters the user could edit. It also allowed users to save, load, and share their work as a link. It wasn't exactly as perfect as I originally envisioned, but it worked and was a lot of fun to play with.

![Sequencer in action](../../assets/writing/a-drum-machine-for-the-browser/sequencer-in-action.webp)

![Channel detail](../../assets/writing/a-drum-machine-for-the-browser/channel-detail.webp)

This was a personal attempt to fuse code and creativity, and to build something I wish had existed when I first started making music.

[See it live](https://drumhaus.maxfu.ng/)
