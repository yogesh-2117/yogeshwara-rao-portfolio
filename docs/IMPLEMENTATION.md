# Portfolio Implementation Guide

## 1. Project Overview

This workspace contains a responsive, resume-based portfolio for **Yogeshwara Rao Burada**, a Software Engineer specializing in Siebel CRM, Open UI, EAI, and telecom systems.

The portfolio is a lightweight static website built with:

- HTML for structure and content
- CSS for layout, visual design, responsiveness, and image cropping
- JavaScript for the footer year and smooth internal navigation
- A local PDF resume for downloading
- A local profile image for the hero section
- Remote Unsplash images for experience and project visuals

No frontend framework or build step is required.

## 2. File Structure

```text
CLaudeTest/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── documents/
│   │   └── Yogesh_SiebelResume.pdf
│   └── images/
│       └── profile.png
└── docs/
  └── IMPLEMENTATION.md
```

### `index.html`

The main page markup and portfolio content.

### `css/styles.css`

All visual styling, layout rules, responsive breakpoints, colors, cards, buttons, typography, and image behavior.

### `js/script.js`

Small browser-side enhancements:

- Inserts the current year into the footer.
- Adds animated scrolling for internal links such as `#about`, `#projects`, and `#contact`.
- Updates the browser URL after smooth navigation.

### `assets/documents/Yogesh_SiebelResume.pdf`

The original resume used as the source for the portfolio content. It is linked from the **Download Resume** button.

### `assets/images/profile.png`

The profile photo displayed in the hero profile card. The filename is kept as provided in the workspace.

## 3. Page Sections

### Header

The sticky header contains:

- `YRB` brand link
- Navigation links to About, Skills, Experience, Projects, and Contact
- Hire Me button linked to the contact section

The header uses a translucent background and backdrop blur.

### Hero

The hero is the first visible section and includes:

- Software Engineer label
- Professional introduction
- View Work link
- Let's Talk link
- Download Resume link
- Career statistics: 3+ years, 450+ defects resolved, and 2 major telecom clients
- Profile card with availability badge, responsive portrait, and current focus

### About

Summarizes experience with Siebel CRM, Open UI, EAI, telecom workflows, defect stabilization, integrations, and enterprise collaboration.

### Skills

Four skill cards cover:

1. Siebel CRM
2. Open UI
3. EAI and APIs
4. Problem Solving

### Experience

Two experience cards describe:

- Infosys: Associate Consultant JL4, Proximus telecom work, defect stabilization, and Siebel 25 Open UI
- TCS: Software Developer, Openreach telecom systems, service requests, business logic, and EAI integrations

Each card includes a remote image from Unsplash.

### Projects

Three project cards describe:

- Banking Web App
- Service Request Management
- Customized eSales Experience

The project cards use real image elements only. The earlier decorative illustrated CSS shapes and pseudo-element overlays have been removed.

### Education

Displays the B.Tech in Information Technology qualification from Anil Neerukonda Institute of Technology & Sciences, along with the CGPA and graduation date.

### Contact Footer

The footer includes:

- Contact heading
- Email link
- LinkedIn link
- GitHub link
- Phone link
- Automatically generated copyright year

The LinkedIn and GitHub links currently point to their general homepages and can be replaced with personal profile URLs.

## 4. Responsive Profile Image

The profile image uses the following approach:

```css
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  transform: scale(1.12);
}
```

The portrait container uses responsive dimensions:

- Desktop: up to 420px wide and 420px tall
- Tablet: up to 360px wide with a fluid height
- Mobile: up to 290px wide with a smaller fluid height

At mobile widths, the crop position and scale are adjusted so the face remains visible without overflowing the card.

## 5. Responsive Layout

The stylesheet uses two main breakpoints:

### At 900px and below

- Hero changes from two columns to one column
- About changes to one column
- Skills become two columns
- Project and experience cards become one column
- Portrait size is reduced

### At 640px and below

- Main navigation is hidden to reduce crowding
- Header Hire Me button is hidden
- Skills become one column
- Portrait spacing and crop are optimized for phones
- Footer content stacks vertically

The global `img` rule prevents images from exceeding their containers:

```css
img {
  max-width: 100%;
  display: block;
}
```

## 6. Smooth Scrolling

The page has native smooth scrolling enabled in CSS:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}
```

The JavaScript also handles internal anchor clicks with `scrollIntoView({ behavior: "smooth" })`. This accounts for navigation links, buttons, the brand link, and section jumps while keeping the sticky header from covering the destination heading.

Normal wheel and touch scrolling is left unrestricted so the page does not feel stiff or constrained.

## 7. Visual Design

The design uses:

- Dark navy background
- Light blue primary accent
- Mint green secondary accent
- Translucent panels
- Rounded cards
- Subtle borders and shadows
- Inter font loaded from Google Fonts
- Responsive CSS `clamp()` sizing for headings and portrait dimensions

Project image areas retain their image sizing and crop behavior but no longer include illustrated geometric overlays.

## 8. Run the Portfolio Locally

From the project folder, start a Python static server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

The current local preview uses port `8000`.

To stop the server, focus the terminal running it and press `Ctrl+C`.

## 9. Common Customizations

### Change personal text

Edit the relevant text directly in `index.html`.

### Replace the resume

Replace `assets/documents/Yogesh_SiebelResume.pdf` with the new PDF while keeping the same filename, or update the `href` on the Download Resume link.

### Replace the profile photo

Replace `assets/images/profile.png` with another image while keeping the same filename, or update the `src` value on the profile image element.

### Adjust the portrait crop

Change these properties in `.profile-image`:

```css
object-position: center 38%;
transform: scale(1.12);
```

The mobile override is inside the `@media (max-width: 640px)` block.

### Replace project images

Update the `src` values inside `.project-visual img` elements in `index.html`. The image must be publicly accessible if it is hosted remotely.

### Add a real LinkedIn or GitHub profile

Replace the current general URLs in the footer with the actual profile URLs.

## 10. Current Validation

The local preview has been checked at:

```text
http://localhost:8000/
```

The server responded successfully with HTTP status `200` after the latest changes.

The only known editor diagnostic is a Safari compatibility warning for `backdrop-filter`. It does not prevent the portfolio from running in browsers that support the property.
