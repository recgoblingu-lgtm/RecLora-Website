# RecLora Website (`RecLora-Website`)

An exact, comprehensively rebranded copy and expansion of the **recroom.network** community website for **RecLora**, styled in a regal **Purple & Gold** design system and featuring the official RecLora brand crest.

---

## 🌟 Key Highlights & Changes

### 1. Rebranding & Visual Identity
- **Name:** Rebranded from *Rec Room / recroom.network* to **RecLora / reclora.network** across all UI elements, headings, navigation bars, footers, meta tags, and documentation.
- **Brand Logo:** Integrated the official user-provided RecLora crest (`IMG_7056.PNG`) across the navigation bar, announcement banner, sample creator profile, favicon, and brand badges.
- **Theme Palette:** Built a custom **Purple & Gold** aesthetic:
  - Background: Deep Void Violet (`#0E071A`)
  - Surface Cards: Royal Amethyst (`#180D2E` / `#21113E`)
  - Accent / Highlights: Sovereign Gold (`#F5B041` / `#D4AC0D` / `#FFEAA7`)
  - Borders: Muted Electric Violet (`#3A2268`)
  - Text: Bright Crisp Off-White (`#F8F9FA`) and Lilac Muted (`#C8B6E2`)

### 2. Live In-Browser Customizer (`/editor`)
- We created a dedicated, persistent **Interactive Editor** at [`/editor`](/editor) allowing you to edit:
  1. **Home Page Announcement Banner:** Title, subtitle, badge text, dates, detailed briefing, and CTA link.
  2. **Sample Profile Account:** Display name, handle, bio, creator level, cheer count, subscriber count, and creator tags.
  3. **Sample Room:** Name, tagline, category, capacity, cheer count, and full description.
- Changes save directly in local storage and take effect across the entire website instantly without needing to rebuild code.

### 3. Single Sample Profile (`/profile` or `/user/@LoraAdmin`)
- As explicitly instructed, **no real user accounts** were harvested.
- Provided **one single, complete sample account** (`@LoraAdmin`) containing:
  - Verified Creator, Maker Pen Master, and Circuit Architect badges.
  - Creator stats (Level 87, 14,250 Cheers, 5,820 Subscribers).
  - 3 customizable featured rooms.
  - 4 portfolio snapshot cards with cheer counts and dates.
  - A **"Clone JSON"** button to easily duplicate or generate multiple profiles.

### 4. Sample Room & Community Room Directory (`/rooms`)
- **Primary Editable Sample Room:** [`/rooms/cosmic-lounge`](/rooms/cosmic-lounge), showcasing interactive features, Circuits V2 specifications, guidelines, and launch CTAs.
- Over **25 distinct featured rooms** across Hangout, Action PvP, Quests, Horror, Sports, and Lo-Fi relaxation.

### 5. Over 100+ Catalog Pages & Documents
- **Main Hubs:** Home (`/`), Announcements (`/announcements`), Rooms (`/rooms`), Shop (`/shop`), Creator Hub (`/creator`), Events (`/events`), Download (`/download`), Editor (`/editor`).
- **Official Creator Articles & Announcements (55+ pages):** Copied and rebranded from the public network, covering Class of '87 Reunion, Creator Rewards, Level Cap Increase, Age Ratings, Room Boosts, and Bug Fixes.
- **Maker Pen Academy Tutorials (12 pages):** Basic geometry, Circuit V2 logic, atmospheric lighting, ink optimization, and physics constraints.
- **Developer Policies & Safety Docs (8 pages):** Code of conduct, monetization terms, IP protections, and security standards.
- **Shop & Inventions (18 items):** Royal Purple hoodies, gilded Maker Pen skins, avatar wings, sound boomboxes, and dorm furniture.

---

## 🚀 Running Locally

```bash
# Install dependencies
pnpm install

# Start Vite dev server
pnpm run dev

# Build production bundle
pnpm run build

# Start production Node/Express server
pnpm start
```

---

## 🛠️ Code Structure

```
client/
├── public/
│   ├── logo.png             # Official RecLora crest
│   ├── favicon.png          # Rebranded 64x64 favicon
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Rebranded navigation bar with logo and CTA
│   │   └── Footer.tsx       # Comprehensive footer with quick links
│   ├── data/
│   │   └── editableStore.ts # Centralized data store with easy-to-edit defaults
│   ├── pages/
│   │   ├── Home.tsx         # Rebranded landing page with announcement banner
│   │   ├── ProfileView.tsx  # Single sample profile showcase
│   │   ├── RoomDetail.tsx   # Detailed room page (including sample room)
│   │   ├── RoomsList.tsx    # Filterable 25+ room directory
│   │   ├── ShopCatalog.tsx  # Virtual store & invention marketplace
│   │   ├── CreatorHub.tsx   # Maker Pen tutorials, cashouts, and clubs
│   │   ├── ArticleView.tsx  # Dynamic reader for 60+ creator announcements
│   │   ├── ContentEditor.tsx# Real-time in-browser customization tool
│   │   ├── DownloadPage.tsx # Cross-platform launcher downloads
│   │   └── EventsPage.tsx   # Community events and workshops
│   ├── siteData.json        # 120+ structured catalog records
│   ├── index.css            # Purple & Gold CSS variables and glow effects
│   └── App.tsx              # Complete client-side routing
```
