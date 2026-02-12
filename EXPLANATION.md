# 🎮 AntiCheat Tracker - SIMPLE EXPLANATION (Like You're 5!)

## What is This? 🤔

Imagine you have a game with lots of players. Some players are cheating!  
This website helps you **catch cheaters** and keep the game fair. 👮‍♂️

---

## The BIG Picture 🖼️

Think of the website like a **police station for your game**:

```
┌─────────────────────────────────────────┐
│  FRONTEND (What you SEE in browser)     │
│  - Fancy buttons                        │
│  - Colorful dashboard                  │
│  - Player lists                         │
└────────────────┬────────────────────────┘
                 │ (talks to)
┌────────────────▼────────────────────────┐
│  BACKEND (The Brain - Node.js)          │
│  - Thinks about data                    │
│  - Saves information                    │
│  - Runs the rules                       │
└────────────────┬────────────────────────┘
                 │ (stores in)
┌────────────────▼────────────────────────┐
│  DATABASE (The Memory)                  │
│  - Players' info                        │
│  - Cheating violations                  │
│  - Statistics                           │
└─────────────────────────────────────────┘
```

---

## File Structure (Explained Simply) 📁

Think of files like shelves in a house:

```
cheatcode/ (Your Main Project Folder)
│
├── app.js                    ← The MAIN "brain" (everything starts here!)
├── package.json             ← A "shopping list" of tools you need
├── Dockerfile               ← Instructions to put app in a container
├── docker-compose.yml       ← Easy Docker setup file
├── README.md                ← Instructions for users
│
├── views/ (The Pretty Stuff)
│   ├── header.ejs          ← Top navigation bar
│   ├── footer.ejs          ← Bottom of pages
│   ├── index.ejs           ← Dashboard (main page)
│   ├── players.ejs         ← List of all players
│   ├── violations.ejs      ← List of cheating incidents
│   └── analytics.ejs       ← Charts and stats
│
├── public/ (Your Decorations)
│   └── css/
│       └── style.css       ← All the COLORS and STYLING
│
└── data/ (The Memory)
    └── database.js         ← Stores player info
```

---

## What Each Part Does? 🔧

### 1️⃣ **app.js** (The Brain)
```javascript
// Think of this like the manager of a store
// It says:
// "When someone visits /, show the dashboard"
// "When someone visits /players, show the players list"
// "When someone clicks ban, remove the player"
```

**In Simple Words:**  
- Listens for visitors (HTTP requests)
- Decides what page to show
- Talks to the database
- Sends back what people ask for

---

### 2️⃣ **Files in views/** (The Pages)
Think of these like movie scenes:

**index.ejs (Dashboard)**
- Shows: Total players, suspicious players, violations
- Buttons to go to other pages
- Like the "home" of your police station

**players.ejs (Player List)**
- Shows all players in a table
- Displays "suspicion score" (how suspicious)
- Buttons to ban players
- Like the "wanted posters" wall

**violations.ejs (Cheating Log)**
- Shows every time someone cheated
- Severity level (Low, High, Critical)
- Like the "crime report" board

**analytics.ejs (Statistics)**
- Charts showing how many clean vs. banned players
- Violation trends
- Like the "statistics report"

---

### 3️⃣ **style.css** (The Colors & Design)
Think of this like interior design:

```css
/* Makes it look COOL */
background: dark blue with glow effects
buttons: flashy neon colors
text: bright cyan colors
animations: smooth hover effects
```

Makes your boring data look like a **hacker's dashboard!** 💻

---

### 4️⃣ **Docker Files** (The Container)
Think of Docker like a shipping container:

```
Your App + All Tools You Need
        ↓
    Packed in Container
        ↓
    Ship anywhere (any computer)
        ↓
    Works perfectly!
```

**Dockerfile**: Instructions to build container
**docker-compose.yml**: Easy way to run the container

---

## How It Works Step-by-Step 👣

### When you visit http://localhost:3000:

1. **Browser** → "Hey, I want the home page!"
2. **app.js** → "Okay, let me load the dashboard data"
3. **database.js** → "Here's all the player info!"
4. **app.js** → "Now let me make it pretty"
5. **index.ejs** → "I'll put this data into HTML"
6. **style.css** → "And I'll add all the colors!"
7. **Browser** → 🌟 Shows you beautiful dashboard!

---

### When you click the "Ban Player" button:

1. **Button click** → Send request to server
2. **app.js** → Receives the request
3. **Database** → Finds the player and marks as "BANNED"
4. **Browser** → "Page refreshed! Player is banned!"
5. **You** → See the player with red "BANNED" badge ✅

---

## Data Flow 🔄

### Player Object Example:
```javascript
{
  id: 2,              // Player's ID
  username: 'ShadowBot',  // Their nickname
  suspicion: 65,      // 65% likely cheating (0-100%)
  warnings: 3,        // Got 3 warnings
  status: 'Suspicious' // Status: Clean, Suspicious, or Banned
}
```

### Violation Object Example:
```javascript
{
  id: 1,              // Violation ID
  player: 'ShadowBot', // Who cheated
  type: 'Speed Hack',  // Type of cheat
  date: '2026-02-09',  // When it happened
  severity: 'High'     // How bad (Low, Medium, High, Critical)
}
```

---

## Colors & Their Meanings 🎨

| Color | Meaning |
|-------|---------|
| 🔵 Cyan (Bright Blue) | Trust, system, info |
| 🟢 Green | Clean, safe, okay |
| 🟡 Orange | Warning, suspicious |
| 🔴 Red | Danger, banned, critical |
| ⚫ Dark | Background, professional |

---

## The Technology Stack Explained 📚

### **Node.js** 
A runtime = a place where JavaScript can run  
**Like:** A computer for JavaScript code

### **Express**
A framework = helps build web servers easily  
**Like:** Lego blocks that do 90% of the work

### **EJS** (Embedded JavaScript)
Template engine = mix HTML with JavaScript  
**Like:** Write HTML but with programming superpowers

### **Docker**
Containerization = package everything in a box  
**Like:** Shipping box that works on any computer

---

## How to Run It 🚀

### WITHOUT Docker (Simple):
```bash
# Step 1: Go to folder
cd c:\Projects\cheatcode

# Step 2: Install tools
npm install

# Step 3: Start server
npm start

# Step 4: Open browser
http://localhost:3000
```

### WITH Docker (Advanced):
```bash
# Step 1: Go to folder
cd c:\Projects\cheatcode

# Step 2: Build & run
docker-compose up --build

# Step 3: Open browser
http://localhost:3000
```

---

## What Happens When? ⚡

### On Dashboard:
- Shows 4 stat cards: Total Players, Suspicious, Violations, Status
- Click "View Players" → Go to players page
- Click "Report Violation" → Popup asks for details

### On Players Page:
- Table shows all players
- Suspicion bar (green → red) shows how suspicious
- Click "Ban" → Player marked as BANNED
- Badge changes to red "BANNED"

### On Violations Page:
- Cards for each cheating incident
- Color-coded by severity
- Shows player name, type, date, severity

### On Analytics Page:
- Bar charts showing player distribution
- Stats about violations
- Trends and numbers

---

## Simple Customization 🎨

### Change Colors:
Edit `style.css`, find hex colors like `#00d4ff`, change to new color

### Add More Players:
Edit `data/database.js`, copy-paste a player object, change values

### Add New Page:
1. Create `views/newpage.ejs`
2. Add route in `app.js`: `app.get('/newpage', ...)`
3. Add link in `header.ejs`

---

## Troubleshooting 🆘

### "Port 3000 already in use"
Someone else is using that port. Change port in `app.js` to 3001

### "Can't connect to localhost:3000"
Server not running. Check terminal for errors.

### "Pages look ugly, no CSS"
Clear browser cache: Ctrl + Shift + Delete

### "Docker won't start"
Make sure Docker Desktop is running. Check: `docker --version`

---

## The Secret Sauce 🤫

This website is:
- **Fast**: Node.js is super quick
- **Scalable**: Can handle more players
- **Pretty**: Modern CSS with effects
- **Portable**: Works anywhere with Docker
- **Maintainable**: Clean code, easy to modify

---

## Summary 📝

| Part | Does What |
|------|-----------|
| **app.js** | Brain of the operation |
| **EJS files** | Displays information |
| **CSS** | Makes it look cool |
| **Database** | Remembers everything |
| **Docker** | Packages everything |

---

## Ready to Present? 🎤

**What to say:**

"This is AntiCheat Pro - a system to catch cheaters in games. It has:
- A beautiful dashboard showing all players
- A system to track suspicious behavior
- Reports of violations
- Analytics to spot patterns
- Runs on Node.js, uses Docker for easy deployment
- Built with a modern, sleek design"

**Demo to show:**
1. Dashboard → Explain the stats
2. Players page → Show suspicion bars
3. Click Ban → Show it updates
4. Violations → Show severity colors
5. Analytics → Show charts

---

**You're ready! Good luck with your presentation! 🎮✨**
