# A&H Techworld Ltd — Organized Portfolio Workspace (`AHportfolio`)

A clean, high-performance web application and portfolio suite for **A&H Techworld Ltd** featuring both a multi-page HTML5/CSS/JS site and a standalone React (TSX) portfolio component.

---

## 📁 Directory Structure

```
AHportfolio/
├── index.html                      # Main Home Landing Page
├── work.html                       # Portfolio & Case Studies Overview
├── capabilities.html               # Technical Capabilities & Services
├── why-us.html                     # 8 Core Principles & Differentiators
├── contact.html                    # Contact Form & Inquiries
├── cases/                          # Individual Case Study Pages
│   ├── automateonline.html         # AutomateOnline Platform Case Study
│   ├── kibride.html                # KibRide Ride-Hailing Platform Case Study
│   ├── mituteed.html               # Mituteed Web Platform Case Study
│   └── saastupark.html             # Säästupark Platform Case Study
├── css/
│   └── style.css                   # Custom CSS tokens, grid layouts, typography & transitions
├── js/
│   └── app.js                      # Multi-page active routing, reveal animations & form handling
├── assets/
│   └── fonts/                      # Barlow & Barlow Condensed WOFF2 web font assets
├── react/
│   └── AHTechworldPortfolio.tsx    # Standalone single-file React component with Tailwind & dark mode
├── run_server.sh                   # Automated 1-click local server + public tunnel launcher
├── cloudflared                     # Cloudflare tunnel executable binary
└── README.md                       # Workspace documentation & running instructions
```

---

## 🚀 How to Run

### Method 1: The 1-Click Launcher (Easiest)

Run the script to launch the local HTTP server and generate a public HTTPS link:

```bash
cd ~/Desktop/AHportfolio
./run_server.sh
```

### Method 2: Manual Terminal Commands

1. **Start Local HTTP Server**:
   ```bash
   cd ~/Desktop/AHportfolio
   python3 -m http.server 8765
   ```
2. **Open in Browser**: Navigate to `http://localhost:8765`
3. **Public Tunnel**:
   ```bash
   ./cloudflared tunnel --url http://localhost:8765
   ```

---

## ⚛️ React Component Usage

The standalone React component is located at `react/AHTechworldPortfolio.tsx`. You can drop it into any Next.js (App Router), Vite, or Remix application.

```tsx
import AHTechworldPortfolio from "./react/AHTechworldPortfolio";

export default function Page() {
  return <AHTechworldPortfolio />;
}
```
