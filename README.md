# 🚀 DevOps Internship - Task 6: Host a Static Website with GitHub Pages

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-brightgreen?logo=github&style=flat-square)](https://saikripakks.github.io/html-static/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Markup-E34F26?logo=html5&logoColor=white&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Responsive-1572B6?logo=css3&logoColor=white&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E?logo=javascript&logoColor=black&style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 📌 Deliverables

- 🌐 **Live Website Link:** [https://saikripakks.github.io/html-static/](https://saikripakks.github.io/html-static/)
- 📁 **GitHub Repository:** [https://github.com/saikripakks/html-static](https://github.com/saikripakks/html-static)

---

## 🎯 Task Objective

The goal of this task is to deploy a responsive static website using **GitHub Pages**, demonstrating core DevOps concepts:
- Version-controlled web asset deployment via Git.
- Free, serverless static web hosting over GitHub's global CDN (Fastly edge network).
- Zero-maintenance HTTPS / SSL certification.
- Continuous deployment workflow triggered by Git pushes.

---

## ✨ Website Features

1. **Modern Responsive Design:** Mobile-first, fully responsive layout built with CSS3 flexbox/grid, glassmorphism, and smooth transitions.
2. **Dark / Light Mode Toggle:** Supports dynamic theme switching with preference persistence in `localStorage`.
3. **Interactive Deployment Walkthrough:** Visual cards demonstrating the step-by-step CI/CD publishing workflow.
4. **Live GitHub Pages URL Generator:** Interactive tool to calculate and copy any repository's GitHub Pages live URL.
5. **Interview Q&A Accordion:** Interactive knowledge base covering all required DevOps interview questions.
6. **Custom 404 Error Page (`404.html`):** Configured fallback page served automatically by GitHub Pages for invalid paths.

---

## 📂 Project Structure

```text
html-static/
├── .gitignore         # Ignored files and local temporary files
├── 404.html           # Custom fallback page served for 404 errors
├── index.html         # Main entry point for GitHub Pages
├── LICENSE            # MIT open source license
├── README.md          # Comprehensive documentation and interview Q&A
├── css/
│   └── style.css      # Custom styling, dark/light themes, typography
└── js/
    └── script.js      # Interactivity: theme toggle, URL calculator, accordion
```

---

## 🛠️ Step-by-Step Deployment Guide

### Step 1: Clone or Create the Repository Locally
```bash
# Initialize git repository
git init
git branch -m main
```

### Step 2: Add Files and Commit
```bash
# Stage all files
git add .

# Create initial commit
git commit -m "feat: initial static website for GitHub Pages deployment"
```

### Step 3: Link to Remote GitHub Repository & Push
```bash
# Add your remote repository origin
git remote add origin https://github.com/saikripakks/html-static.git

# Push main branch to GitHub
git push -u origin main
```

### Step 4: Configure GitHub Pages in Settings
1. Go to your repository on GitHub: `https://github.com/saikripakks/html-static`.
2. Click on the **Settings** tab (gear icon at the top).
3. In the left navigation sidebar under the **Code and automation** section, click **Pages**.
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and set the folder to `/ (root)`.
5. Click **Save**.

### Step 5: Access the Live Deployment
- GitHub automatically triggers a GitHub Actions deployment workflow (`pages-build-deployment`).
- Refresh the **Settings → Pages** screen after 1–2 minutes.
- Your site is live at: `https://<username>.github.io/<repository-name>/`.

---

## 💡 Interview Questions & In-Depth Answers

### 1. What is GitHub Pages?
**Answer:**  
GitHub Pages is a static site hosting service provided directly by GitHub. It hosts static web content (HTML, CSS, JavaScript, media files) stored in a GitHub repository. When configured, GitHub uses a background deployment pipeline (powered by Jekyll or custom GitHub Actions) to serve the site through GitHub's global Content Delivery Network (Fastly CDN) with automated SSL/TLS certificate provisioning at zero cost.

---

### 2. Can you host dynamic apps here?
**Answer:**  
**No, you cannot execute server-side code or run backend databases directly on GitHub Pages.**  
- **Unsupported:** Technologies requiring a server runtime such as Node.js/Express, Python/Django/Flask, PHP, Ruby on Rails, or direct MySQL/PostgreSQL databases cannot run on GitHub Pages.
- **Supported:** Single-Page Applications (SPAs) built with React, Vue, or Angular, as well as static site generators (Next.js static export, Astro, Hugo, Gatsby), can be hosted because they compile to client-side static HTML/CSS/JS. Dynamic functionality can be achieved by calling external REST or GraphQL APIs (e.g., Supabase, Firebase, AWS Lambda, or third-party webhooks) from client-side JavaScript.

---

### 3. What are the limits of GitHub Pages?
**Answer:**  
GitHub Pages enforces standard usage limits:
- **Repository Size Limit:** Recommended to be under 1 GB.
- **Published Site Size:** Must not exceed 1 GB.
- **Bandwidth Limit:** Soft limit of 100 GB of outbound bandwidth per month.
- **Build Rate Limit:** Up to 10 site builds per hour.
- **Service Usage Terms:** Sites cannot be used for commercial transactions, crypto mining, or bandwidth-heavy bulk file distribution.

---

### 4. How do you update the website?
**Answer:**  
Website updates follow standard Git version control:
1. Edit the relevant source files locally (e.g., `index.html`, `css/style.css`, `js/script.js`).
2. Commit the changes:
   ```bash
   git add .
   git commit -m "style: update layout and typography"
   ```
3. Push changes to the publishing branch on GitHub:
   ```bash
   git push origin main
   ```
GitHub automatically triggers an automated redeployment workflow, updating the live website globally within 1 to 2 minutes.

---

### 5. What happens when you delete the repo?
**Answer:**  
When the GitHub repository hosting the website is deleted:
- The GitHub Pages site is immediately deactivated and removed from GitHub's servers.
- Any visitor requesting the URL receives an **HTTP 404 Not Found** status code.
- Associated custom domains, DNS bindings, and automated SSL certificates mapped to that repository are released.

---

### 6. What is the default file that loads?
**Answer:**  
The default file that loads when accessing the root URL (`/`) is **`index.html`** (or `index.md` if using Jekyll markdown processing).  
If a user requests a path or asset that does not exist, GitHub Pages automatically falls back to serving **`404.html`** if one is present in the root of the publishing branch.

---

### 7. Can you use a custom domain?
**Answer:**  
**Yes, GitHub Pages fully supports custom domains** (both apex domains like `example.com` and subdomains like `devops.example.com`).

**Configuration steps:**
1. **GitHub Pages Settings:** Enter your custom domain under **Repository Settings → Pages → Custom domain** (or add a file named `CNAME` in the repository root containing your domain).
2. **DNS Setup with Domain Registrar:**
   - **Apex Domain (`example.com`):** Add `A` records pointing to GitHub's Anycast IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Subdomain (`www.example.com`):** Add a `CNAME` record pointing to `<username>.github.io`.
3. **SSL/TLS Security:** Enable **"Enforce HTTPS"** in GitHub Pages settings to automatically provision and renew a free Let's Encrypt SSL/TLS certificate.

---

## 🧪 Local Testing

You can test this website locally using any lightweight HTTP server:

```bash
# Using Python 3 built-in HTTP server:
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

