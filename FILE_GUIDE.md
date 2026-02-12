# 📋 FILE-BY-FILE GUIDE

## Core Files 🔧

### **app.js** (Main Server)
**What it does:** Runs the entire website  
**Lines:** ~100  
**Key functions:**  
- Starts server on port 3000
- Defines all routes (/, /players, /violations, /analytics)
- Handles API requests (ban player, report violation)
- Manages in-memory database

**Example:**
```javascript
app.get('/', (req, res) => {
  res.render('index', { totalPlayers: 3 });
});
```

---

### **package.json** (Dependencies List)
**What it does:** Lists all tools the project needs  
**What to change:** Add new libraries here  
**Example:**
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "ejs": "^3.1.8"
  }
}
```

**To install new package:**
```bash
npm install package-name
```

---

## View Files (HTML Pages) 🎨

### **views/header.ejs** (Top Navigation)
- **Shows:** Logo and menu
- **Contains:** Navigation links
- **Included in:** Every page
- **Edit to:** Change menu items, logo, styling

### **views/footer.ejs** (Bottom Page)
- **Shows:** Copyright and closing HTML tags
- **Included in:** Every page
- **Edit to:** Add footer links, change text

### **views/index.ejs** (Dashboard)
- **Shows:** 4 stat cards, action buttons
- **Data used:** totalPlayers, suspiciousPlayers, recentViolations
- **Edit to:** Add more stats, change cards

### **views/players.ejs** (Players Table)
- **Shows:** All players in table format
- **Displays:** ID, username, suspicion bar, warnings, status
- **Buttons:** Ban player, view details
- **Edit to:** Add columns, change layout

### **views/violations.ejs** (Violations Grid)
- **Shows:** Cheating incidents as cards
- **Info:** Player, violation type, date, severity
- **Edit to:** Change card layout, add more info

### **views/analytics.ejs** (Charts & Stats)
- **Shows:** Bar charts, statistics
- **Charts:** Player distribution, violation breakdown
- **Stats:** Total violations, average suspicion
- **Edit to:** Add more charts, change data

---

## Styling 🎨

### **public/css/style.css** (All Colors & Design)
- **Size:** 600+ lines of CSS
- **Sections:**
  - Global styles (fonts, colors)
  - Navigation styling
  - Buttons and forms
  - Tables and cards
  - Charts and analytics
  - Responsive mobile design

**Main Colors:**
```css
#00d4ff   /* Cyan - Main accent */
#1a1a2e   /* Dark - Background */
#ef4444   /* Red - Danger */
#10b981   /* Green - Success */
#f59e0b   /* Orange - Warning */
```

---

## Database 💾

### **data/database.js** (Mock Database)
- **Stores:** Player and violation data
- **Can be upgraded to:** MongoDB, PostgreSQL
- **Contains:** Two arrays (playersDb, violationsDb)

**When to edit:**
- Add sample data
- Change player info
- Add more violations for testing

---

## Docker Files 🐳

### **Dockerfile** (Container Recipe)
**What it does:** Instructions to build container  
**Contains:**
- Base image: Node.js 18
- Working directory: /app
- Install dependencies
- Copy files
- Expose port 3000
- Run command: npm start

**Edit to:** Change Node version, ports, commands

### **docker-compose.yml** (Easy Docker Setup)
**What it does:** Simplifies Docker commands  
**Contains:**
- Service name: app
- Build settings
- Port mapping: 3000:3000
- Environment variables
- Volume settings

**To use:**
```bash
docker-compose up --build
```

### **.dockerignore** (Exclude from Container)
**What it does:** Tells Docker what NOT to copy  
**Contains:** node_modules, logs, git files

---

## Config Files ⚙️

### **.gitignore** (Don't Save These)
**What it does:** Files that git won't track  
**Contains:** node_modules, .env, temp files

### **package-lock.json** (Auto-generated)
**What it does:** Locks dependency versions  
**Never edit manually** - npm generates this

---

## Documentation 📚

### **README.md** (Project Overview)
- **For:** Users and developers
- **Contains:** Features, setup, how to use
- **Read this to:** Understand the project

### **EXPLANATION.md** (Simple Guide)
- **For:** People like you
- **Contains:** Explained simply with pictures
- **Read this to:** Understand how it works

### **PRESENTATION.md** (Presentation Script)
- **For:** Presenting the project
- **Contains:** What to say, timing, Q&A
- **Read this to:** Give a great presentation

---

## Quick Reference 🚀

### **To Start Project:**
Windows:
```bash
start.bat
```

Mac/Linux:
```bash
./start.sh
```

Manual:
```bash
npm install
npm start
```

### **To Use Docker:**
```bash
docker-compose up --build
```

### **To Stop Server:**
```bash
Ctrl + C
```

---

## What Each File Does (Quick) 📋

| File | Purpose | Edit When |
|------|---------|-----------|
| app.js | Main server | Add routes/features |
| package.json | Dependencies | Add new packages |
| Dockerfile | Container config | Change Node version |
| docker-compose.yml | Docker setup | Change ports |
| header.ejs | Menu & nav | Change menu items |
| footer.ejs | Page bottom | Change footer |
| index.ejs | Dashboard page | Change dashboard |
| players.ejs | Players table | Change columns |
| violations.ejs | Violations cards | Change layout |
| analytics.ejs | Charts page | Add more stats |
| style.css | All colors & design | Change colors |
| database.js | Sample data | Update test data |

---

## File Size Reference 📊

```
app.js               ~80 lines
index.ejs            ~40 lines
players.ejs          ~50 lines
violations.ejs       ~30 lines
analytics.ejs        ~60 lines
style.css            ~600 lines
header.ejs           ~25 lines
footer.ejs           ~10 lines
package.json         ~20 lines
```

**Total:** ~900 lines of code (small, maintainable project!)

---

**Happy coding! 🎉**
