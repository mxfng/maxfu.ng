---
title: "File Naming Conventions in React Codebases"
description: "On kebab-case and why it's the only sane choice."
date: "2026-03-10T12:00:00-08:00"
---

JavaScript has no file naming conventions, and that's not particularly surprising if you know anything about the [history of the language](https://www.youtube.com/watch?v=Sh6lK57Cuk4). Well-designed languages bake these in, and most serious ones settle on snake_case and move on. JavaScript, being the wild and wacky cousin of the language family, never did.

To a developer like me, who's spent a good portion of his career frolicking in green fields, this has presented an unsettling dilemma. To be one of the privileged set of hands to scaffold a new [React](https://react.dev) codebase is to face a decision: which naming convention do I choose when there's no grey beard language designer making that decision for me? It's a dilemma that I'm just about fed up with revisiting each time I start fresh.

Early JS development followed HTML/CSS conventions, leaning toward kebab-case. Then the [Airbnb style guide](https://github.com/airbnb/javascript/tree/master/react) and later Create React App — the now-defunct scaffolding standard for new React codebases — shifted the paradigm toward PascalCase for component files and camelCase for everything else. I curse the day CRA was popularized, only to be [deprecated before our very eyes](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). We will eventually become dust, and all code is eventually tech debt.

More recently, Vercel popularized [Next.js](https://nextjs.org), which was part of a broader shift back toward kebab-case. Along the way, the ecosystem picked up a wonderful kebab-cased component library by a generous developer named [shadcn](https://ui.shadcn.com). Does anyone know his government name? Unlike Vercel's leadership, I'm not someone who'd proudly [pose for a photo with a war criminal](https://www.middleeasteye.net/trending/developers-drop-vercel-call-boycott-after-ceo-posts-selfie-netanyahu), but I am a supporter of good old-fashioned, pragmatic conventions, and the React ecosystem is desperately in need of an authority to define them.

## Why kebab-case

- **PascalCase** — while it matches React's component naming conventions, it requires the shift key. Despite my frontend aptitude, I am a terminal programmer who lives in the command line. For personal and aesthetic reasons, I avoid the shift key like the plague. I also use a split columnar [ergonomic keyboard](https://kinesis-ergo.com/keyboards/advantage360/) with blank keycaps and can [sustain 100+ words per minute over two minutes](https://monkeytype.com/profile/fungkadelic), but who's counting anyway? What was I talking about again?
- **camelCase** — same problem, with the added insult of looking like an uglier PascalCase.
- **kebab-case** — one key, no modifiers. Consistent with URLs, CSS classes, npm package names, git branches, docker images, and every other sane corner of the development ecosystem that quietly agreed on this years ago.

There is also the practical matter of [case-sensitive filesystems](https://en.wikipedia.org/wiki/Case_sensitivity). `UserCard.tsx` and `userCard.tsx` can coexist on macOS and [silently detonate your Linux CI](https://github.com/airbnb/javascript/issues/501). kebab-case files do not pull this kind of stunt, as they are boring and reliable. They are lowercase and they know it. It is also, frankly, a very funny name for a naming convention.

I acknowledge that the technical differences between each option are marginal. The core argument is sociological: JavaScript has no authority, so conventions emerge from whoever has the most influence at a given moment.

There are no rules in JavaScript, so make your own. This is a good rule, because I won't have to think about it ever again.
