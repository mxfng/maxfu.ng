---
title: "A Drum Machine for the Browser"
description: "Building a browser-native drum machine with Tone.js and the Web Audio API."
date: "2025-03-20T08:00:00-07:00"
---

I've been producing music for most of my life and writing software professionally for a handful of years, and the two had never once intersected. None of my day jobs touched audio, and none of my music involved code. Drumhaus was an attempt to change that — to re-imagine the classic hardware drum machine through the lens of modern web technologies.

I started building it in 2023, between jobs, with time to burn and a lot to prove to myself. The drum machine felt like an approachable platform. Define your voices, build a sequencer, and you're working within reasonable constraints. The scope was narrow enough to ship, but deep enough to learn something real.

## Finding the reference point

Early on, I discovered [io-808](https://io808.com/), a fully recreated TR-808 built with web audio by Vincent Riemer, an engineer at Meta. I watched his talks at audio tech conferences and was blown away by the depth of the implementation. It became the foundational inspiration for Drumhaus. I wasn't going to match that level of DSP work — I knew that going in — but I could build my own take on the concept.

## Design first

I tend to get more motivated by the user experience side of a product than the technical. Really good design inspiration is what gets me coding. So I started with the look and feel: the layout, the branding, the vibe.

I had a Bauhaus poster in my room, orange with repeating geometric patterns. I swapped the _Bau_ for _Drum_, and Drumhaus had its name. I'd always been drawn to bespoke European craftsmanship — Reason Studios and their instruments, Malström, Thor, that whole aesthetic. Drumhaus fit right into that lineage. It felt vaguely tongue-in-cheek — a little pretentious, but not trying too hard. Vaguely international, even if it was just an American making beats in his apartment. A strong gut feeling I never questioned afterward. I spent time studying the design of physical hardware I admired, and the Bauhaus school more broadly — functional, future-forward design, products reduced to their essential form. The interface draws playful inspiration from the classic Roland TR-909 and the skeuomorphic aesthetics of VST instruments.

![Drumhaus interface](../../assets/writing/a-drum-machine-for-the-browser/drumhaus-interface.webp)

## Scope and surrender

Going in, I'd barely touched any DSP. Tone.js and the Web Audio API were brand new to me. I'd been coasting in my first big role, and outside of Native Android, Python, and Rails, modern frontend was foreign territory. I'd just wired up my first React-based website before starting this project.

My first real mistake was trying to build the audio engine from scratch, the way Vincent had. I attempted my own sequencer with the raw Web Audio API, and it proved too difficult. Pivoting to [Tone.js](https://tonejs.github.io/) saved the project. It handled the foundational scheduling out of the box, which meant I could focus on integrating the pieces through abstraction rather than fighting a solved problem.

## The knobs

One thing I did build from scratch was the knobs. Nothing I found online felt right. I wanted knobs that felt like the ones in Logic Pro's native VSTs, and I was unwilling to settle.

I used Framer Motion to transform cursor position into rotational values on screen, then mapped those rotations to audio parameters. Some knobs needed logarithmic responses for frequency ranges dealing in Hz. Others used split inputs, where one half of the rotational range maps to a different output than the other. I worked each problem out one by one until I had a knob I was satisfied with. They feel good on desktop. There's some jank when twisting them aggressively during playback on heavier beats — something I'll come back to.

## Learning by misuse

I picked Next.js because it was popular, not because I understood what I was choosing. Same with Chakra UI — I didn't know what component libraries were for. I'd borrowed the pattern from an open-source project I'd been studying while trying to learn frontend development.

I misused the hell out of Chakra, custom-styling everything with Emotion until the components were unrecognizable. A headless library or custom components would've been the right call for most of the UI that shipped. But every bad decision taught me something I now use daily. The whole project is full of questionable dependencies and janky code choices that I wouldn't trade for a cleaner architecture, because those mistakes are where the real education happened.

## Giving it a voice

I wanted each voice to have a corresponding waveform so users could see that each cell in the grid is its own unique sound. I wrote a Python script with librosa to generate waveforms for each sample, adding visual context to the interface. There's a pixel, LED-like aesthetic running through the UI — shared between the waveforms and the frequency analyzer — that ties the whole thing together.

![Channel detail](../../assets/writing/a-drum-machine-for-the-browser/channel-detail.webp)

## Eight weeks

All in all, I worked furiously for about eight weeks and cobbled together a working product. The instrument had eight voices, A and B sequences, 10 kits with 10 presets, and plenty of sound-shaping parameters. I pulled samples from my production library, from producer friends, and from Splice. It wasn't exactly what I'd originally envisioned — there were features I'd hoped to build but didn't have the skill for — but it worked, and it was fun.

A Postgres backend stored shared presets anonymously, so users could save their work and share it as a generated link. Sharing mattered to me. I wanted a social dimension — the idea of making something quick, sending it to a friend, and letting them discover the product organically. With the database, I could browse shared presets and hear what people were making.

![Sequencer in action](../../assets/writing/a-drum-machine-for-the-browser/sequencer-in-action.webp)

## Finding an audience

I shared it on Reddit, and it took off. Over a hundred shared beats appeared from that first post alone. The project got picked up organically — it ended up on awesome lists and search indexes, and thousands of people made beats with it. Some of those shared URLs are still being indexed by Google today. Then life pulled me away for a while, but Drumhaus kept quietly finding new users on its own.

I don't think I expected that. What started as a scrappy eight-week experiment by someone who barely knew React became something with real users and a life of its own. Drumhaus was built because I wanted it to exist, and it turns out other people did too.

[See it live at drumha.us](https://drumha.us/)
