# Yogeshwara Rao Burada - Portfolio

A responsive, resume-based portfolio for a Software Engineer specializing in Siebel CRM, Open UI, EAI, and telecom systems.

## Features

- Responsive single-page layout
- Resume download button
- Local profile image
- About, skills, experience, projects, education, and contact sections
- Smooth section navigation with sticky-header offset
- Mobile, tablet, and desktop layouts
- Remote project images from Unsplash

## Project Structure

```text
├── index.html
├── css/styles.css
├── js/script.js
├── assets/
│   ├── documents/Yogesh_SiebelResume.pdf
│   └── images/profile.png
└── README.md
```

## Run Locally

From the project directory:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Customize

- Edit portfolio text and links in `index.html`.
- Replace the resume at `assets/documents/Yogesh_SiebelResume.pdf`.
- Replace the profile photo at `assets/images/profile.png`.
- Update colors, layout, responsive rules, and image cropping in `css/styles.css`.
- Update smooth navigation behavior in `js/script.js`.

No framework or build step is required.
