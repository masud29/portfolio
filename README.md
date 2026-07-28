# Masud Rana - Full Stack Developer Portfolio (TypeScript + React)

A modern, high-performance developer portfolio built with **TypeScript**, **React**, **Vite**, and **Tailwind/Custom Design Tokens**. Engineered specifically for rapid deployment to **Vercel's Free Hobby Tier**.

---

## 🚀 Quick Start (Local Development)

To run the application locally on your machine:

```bash
# 1. Navigate to the portfolio folder inside htdocs
cd c:\xampp\htdocs\portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser at `http://localhost:3000` to view the live site locally.

---

## 📦 Deploying to Vercel (100% Free)

Follow these step-by-step instructions to get your portfolio live with automated CI/CD & free SSL certificate:

### Step 1: Initialize Git and Push to GitHub
1. Open PowerShell or Terminal inside `c:\xampp\htdocs\portfolio`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of professional TypeScript portfolio"
   ```
2. Go to [GitHub.com](https://github.com/new) and create a new public repository named `portfolio` under your account `masud29`.
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/masud29/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign Up** or **Log In** using your **GitHub account** (`masud29`).
2. Click **"Add New..."** -> **"Project"**.
3. Select your `portfolio` repository from the GitHub list and click **Import**.
4. Vercel will automatically detect **Vite** and **TypeScript**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Within 30 seconds, your portfolio will be live at `https://masudrana-portfolio.vercel.app` (or similar custom name), complete with automated SSL and global CDN deployment!

---

## 🛠 Features & Architecture Highlights

- **TypeScript Architecture**: Strictly typed data interfaces (`Project`, `Skill`, `Experience`, `Education`) for zero runtime bugs.
- **Dynamic Hero Section**: Real-time ticker cycling through your core skills and role highlights.
- **Production Projects Case Studies**: Highlighting GAConnect (`gaconnt.com`), IUS (`ius.edu.bd`), BinduVision (`binduvision.com`), and COS Technologies (`costechnologies.com`).
- **Interactive Project Specs Modal**: Deep dive into architecture notes, RBAC implementation, and database caching strategies.
- **Interactive Tech Stack**: Filterable skill grid with category tabs (Backend, Frontend, Database, AI Tools, DevOps).
- **Direct Contact Channel**: Integrated contact form, WhatsApp direct trigger, and phone/email quick clickables.
- **Vercel Single-Page Routing**: Configured with `vercel.json` rewrites for routing support.
