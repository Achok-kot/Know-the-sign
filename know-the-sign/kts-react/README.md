# Know the Sign 🩸

A multilingual offline-first Progressive Web App (PWA) that helps adolescent girls in South Sudan identify menstrual danger signs and find the nearest health facility.

**Live app:** [https://Achok-kot.github.io/Know-the-sign/](https://Achok-kot.github.io/Know-the-sign/)

---

## The Problem

Adolescent girls in South Sudan often cannot tell the difference between a normal period and a dangerous one. Limited access to health workers, no internet in rural areas, and language barriers mean danger signs go unrecognised until it is too late.

## The Solution

A simple checklist app that:
- Works **fully offline** (no internet needed after first load)
- Supports **English, Arabic, and Juba Arabic**
- Uses a **traffic-light triage system** (green / yellow / red) to tell the girl what to do
- Shows the **nearest health facility** and a one-tap call button
- Requires **no login** for girls — private and anonymous
- Has a **Health Worker (CHW) dashboard** (requires login) to view community data

---

## Pages / Screens

| Route | Description |
|---|---|
| `/` | Language selection |
| `/tutorial` | Quick how-to guide |
| `/home` | Main menu |
| `/checklist` | 7-question danger-sign checklist |
| `/result` | Triage result (green / yellow / red) + facilities |
| `/history` | Past check results stored locally |
| `/info` | Normal vs danger signs reference |
| `/privacy` | Privacy policy |
| `/more` | More options |
| `/login` | Health worker login (CHW) |
| `/chw` | CHW dashboard (protected) |

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **React Router 7**
- **AWS Amplify 6** + **Amazon Cognito** (CHW auth — optional)
- **Font Awesome 6** (free CDN)
- **localStorage** for offline history

---

## Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

Check your versions:
```bash
node -v
npm -v
```

---

## Local Setup (Run on your computer)

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/know-the-sign.git
cd know-the-sign/kts-react
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Start the development server

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

---

## Build for Production

```bash
npm run build
```

This creates a `dist/` folder with the production-ready app.

To preview the production build locally:
```bash
npm run preview
```

---

## Deploy to GitHub Pages

1. Build and deploy:
```bash
npm run build
npm run deploy
```
2. Go to your repo on GitHub → **Settings → Pages**
3. Set branch to **gh-pages** and folder to **/ (root)**
4. Click **Save** — live in 1-2 minutes at `https://Achok-kot.github.io/Know-the-sign/`

---

## Project Structure

```
kts-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx       # Bottom navigation bar
│   │   └── PageHeader.jsx      # Page header with back button
│   ├── context/
│   │   └── AppContext.jsx      # Global state (language, answers, result)
│   ├── pages/
│   │   ├── LangPage.jsx        # Language selection
│   │   ├── TutorialPage.jsx    # Tutorial
│   │   ├── HomePage.jsx        # Home menu
│   │   ├── ChecklistPage.jsx   # Danger-sign checklist
│   │   ├── ResultPage.jsx      # Triage result
│   │   ├── HistoryPage.jsx     # Past checks
│   │   ├── InfoPage.jsx        # Info / education
│   │   ├── PrivacyPage.jsx     # Privacy policy
│   │   ├── MorePage.jsx        # More options
│   │   ├── LoginPage.jsx       # CHW login
│   │   └── CHWPage.jsx         # CHW dashboard
│   ├── amplifyconfiguration.js # AWS Amplify config (replace after amplify push)
│   ├── App.jsx                 # Routes
│   ├── data.js                 # Questions, triage logic, translations, facilities
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml                # Netlify SPA redirect rules
```

---

## Notes

- **No login required** for girls using the checklist — fully anonymous
- **CHW login** requires AWS Cognito to be configured. Replace placeholder values in `src/amplifyconfiguration.js` after running `amplify push`
- All answers are stored in **localStorage only** — nothing is sent to a server unless the CHW is logged in
- The app works **offline** after the first load (PWA-ready)
