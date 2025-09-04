# Logisity Website

## Description
Logisity is a peer-to-peer doorstep-to-doorstep logistics platform designed to simplify sending and receiving packages between individuals, whether for short or long distances. The website serves as a showcase for two mobile applications: the **Logisity App**, which enables users to book and track deliveries effortlessly, and the **Logisity Partner App**, which allows individuals to join the network and provide logistics services. Built with **React**, **TypeScript**, and **Vite**, the Logisity website offers a modern, responsive, and multilingual user experience, supporting English, French, and Arabic (with RTL support). Hosted on **GitHub Pages**, it provides an intuitive interface to explore the platform’s features and learn how it works.

## Features
The Logisity website includes the following features, implemented to ensure a seamless and engaging user experience:

- **Explore Platform Section**:
  - **Layout**: A vibrant section with a `#FFCF00` (yellow) background, featuring a two-column layout on desktop: app cards on the left and a "How It Works" guide on the right. On mobile, the layout stacks vertically for optimal usability.
  - **App Cards**:
    - Two cards for the **Logisity App** and **Logisity Partner App**, each with sharp corners and a black border (`2px solid #000000`).
    - Each card includes:
      - A logo (`logisty_app.png` or `partner_app.png`) with a white background and black border, sized at 150x150px.
      - A bold, black title (e.g., "Logisity App") displayed between the logo and description.
      - A concise description (e.g., "Book and track deliveries with ease") in 0.9rem font.
      - A download badge with a black background, grey border (`#808080`), and a 40x40px Android logo (`android.png`). The badge text reads "Download it on" (white, 0.9rem, thin) and "Android" (`#39DD85`, 1.4rem, bold).
  - **How It Works Card**:
    - A white card with sharp corners and a black border, positioned on the right (desktop) or below app cards (mobile).
    - Features a 24x24px info icon (`info_icon.png`) above the title.
    - Includes a three-step ordered list (e.g., "Download the APK", "Click on the app", "Install...") for using the platform.
- **Multilingual Support**:
  - Supports **English**, **French**, and **Arabic** via translation files (`us.json`, `fr.json`, `tn.json`).
  - Implements **RTL (Right-to-Left)** support for Arabic, ensuring proper text alignment, badge logo positioning, and layout (e.g., app cards on the right, How It Works on the left).
  - Translation keys include app titles, descriptions, and step-by-step instructions.
- **Responsive Design**:
  - Optimized for desktop and mobile devices using CSS media queries (`@media (max-width: 768px)`).
  - Desktop: Two-column layout with app cards and How It Works side by side.
  - Mobile: Stacks app cards above the How It Works card for better usability.
  - Uses `clamp` for scalable font sizes and flexible layouts.
- **Modern Development Stack**:
  - Built with **React** for dynamic UI, **TypeScript** for type safety, and **Vite** for fast development and optimized builds.
  - Includes **Hot Module Replacement (HMR)** for efficient development.
  - Configured with **ESLint** for code quality, using `typescript-eslint` for type-aware linting, `eslint-plugin-react-x`, and `eslint-plugin-react-dom` for React-specific rules.
- **GitHub Pages Deployment**:
  - Hosted on GitHub Pages with automated deployment via **GitHub Actions** (workflow in `.github/workflows/deploy.yml`).
  - Builds the project (`npm run build`) and deploys the `dist` folder to GitHub Pages on every push to the `main` branch.
  - Configured `vite.config.ts` with a `base` path (e.g., `/<repo-name>/`) for correct asset resolution.
- **Visual Animations**:
  - Implements a `fadeInSlideUp` animation for the section title, app cards, and How It Works card, enhancing user engagement.
- **Assets and Aliases**:
  - Assets (`logisty_app.png`, `partner_app.png`, `info_icon.png`, `android.png`) are stored in `src/assets/` and referenced via the `@assets` alias in `vite.config.ts`.
  - Custom hooks (e.g., `useTranslations`) are aliased under `@hooks`.

## Getting Started
To run the Logisity website locally or deploy it:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<yourusername>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/<repo-name>` (or `http://localhost:5173` for a user site) in your browser.

4. **Lint Code**:
   ```bash
   npm run lint
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```
   The output is in the `dist` folder.

6. **Deploy to GitHub Pages**:
   - Ensure `vite.config.ts` has the correct `base` (e.g., `/<repo-name>/` or `/`).
   - Push changes to the `main` branch:
     ```bash
     git add .
     git commit -m "Update website"
     git push origin main
     ```
   - The GitHub Actions workflow (`deploy.yml`) will build and deploy to `https://<yourusername>.github.io/<repo-name>/`.

## Requirements
- **Node.js**: Version 20 or higher.
- **Dependencies**: Listed in `package.json` (React, TypeScript, Vite, ESLint plugins).
- **Assets**: Ensure `src/assets/` contains `logisty_app.png`, `partner_app.png`, `info_icon.png`, and `android.png`.

## Notes
- **RTL Support**: Test Arabic (`tn.json`) to ensure proper text alignment and layout reversal.
- **Images**: Verify asset paths in `src/assets/` and the `@assets` alias in `vite.config.ts`.
- **ESLint**: Run `npm run lint` to catch issues before deployment.
- **GitHub Pages**: If the site doesn’t appear after deployment, check the **Actions** tab for errors and ensure the `dist` folder contains `index.html`.