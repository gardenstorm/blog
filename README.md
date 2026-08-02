### ⚠️ Work in progress! ⚠️

# 🍵 My Tech Blog  

A blog made with [Fuwari](https://github.com/saicaca/fuwari) and Astro.

Live link coming after I write my first post!

## 🚀 Prerequisites
- ![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) Node.js >= 20
- ![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) pnpm >= 9

## 🛠️ Local Dev and Commands

### ⚡ Commands
All commands are run from the root of the project, from a terminal:

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Installs dependencies                               |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`         |
| `pnpm build`               | Build your production site to `./dist/`             |
| `pnpm preview`             | Preview your build locally, before deploying        |
| `pnpm check`               | Run checks for errors in your code                  |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create a new post                                   |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |
| `pnpm astro --help`        | Get help using the Astro CLI                        |

### 📃 Key Files
- `src/config.ts`: To customize site title, avatar, bio blurb, and social links.
- `astro.config.mjs`: To configure deployment URL, integrations, and base site settings.

## 📝 Writing Posts

Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.

### 📔 Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`
---
```

### 🧩 Markdown Extended Syntax

In addition to Astro's default support for [GitHub Flavored Markdown](https://github.github.com/gfm/), several extra Markdown features are included:

- Admonitions ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#admonitions)): Callout boxes for notes, tips, warnings, and cautions.
- GitHub repository cards ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#github-repository-cards)): Embedded preview of GitHub repositories.
- Enhanced code blocks with Expressive Code ([Preview](https://fuwari.vercel.app/posts/expressive-code/) / [Docs](https://expressive-code.com/)): Enhanced code blocks, line highlights, and frame titles.

## 📄 License

- This theme is forked from [saicaca's Fuwari template](https://github.com/saicaca/fuwari).
- This project is licensed under the MIT License.
