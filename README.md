# Rajesh K — Portfolio

A responsive personal portfolio website for Rajesh K, built with plain HTML, CSS, and JavaScript. It presents an introduction, skills, selected work, and contact information in a lightweight single-page design.

## Features

- Responsive layout with a mobile navigation menu
- Custom visual styling and animated hover states
- Smooth in-page navigation
- Live public-project cards loaded from GitHub
- Current year inserted automatically in the footer
- Contact and social links for email, LinkedIn, and GitHub

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Manrope and DM Mono
- GitHub REST API

## Project structure

```text
.
├── index.html   # Page structure and content
├── styles.css   # Layout, responsive styles, and visual design
├── script.js    # Menu, footer year, and GitHub project cards
├── README.md
└── .gitignore
```

## GitHub project cards

The Work section requests public repositories from:

`https://api.github.com/users/Rajesh2k26/repos`

The cards are created in the browser, so the section reflects the public repositories available for that GitHub account. If GitHub is temporarily unavailable or rate-limits a request, the cards may not load until a later refresh.

## Contact and social links

- Email: [rajeshk077143@gmail.com](mailto:rajeshk077143@gmail.com)
- LinkedIn: [linkedin.com/in/rajeshk77](https://www.linkedin.com/in/rajeshk77)
- GitHub: [github.com/Rajesh2k26](https://github.com/Rajesh2k26)

## Run locally

No installation or build step is required.

1. Download or clone the project.
2. Keep `index.html`, `styles.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern browser.

For the most reliable local development experience, serve the folder with any simple static-file server, then open the local address it provides.

