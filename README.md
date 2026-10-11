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

## Customization checklist

- [ ] Change the name, biography, availability text, and skill list in `index.html`.
- [ ] Replace the email address and social URLs in the contact section.
- [ ] Update the GitHub username in `script.js` and the GitHub profile link in `index.html` if needed.
- [ ] Edit the color variables and typography in `styles.css` to match your brand.
- [ ] Add a project image or adjust the project-card content and layout.
- [ ] Review the page title and meta description for your own name and portfolio focus.

## Deployment options

Because this is a static site, it can be deployed without a server.

- **GitHub Pages:** push the files to a GitHub repository and enable Pages from the repository settings.
- **Netlify:** drag the project folder into Netlify Drop or connect the repository.
- **Vercel:** import the repository and deploy it as a static site.
- **Cloudflare Pages:** connect the repository and deploy with no build command.

For these services, use the repository root as the publish directory and leave the build command empty unless you later add a build tool.

## License

Add a license that fits how you want others to use this portfolio, such as MIT for broad reuse.
