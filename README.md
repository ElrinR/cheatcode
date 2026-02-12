# 🛡️ AntiCheat Pro - Player Behavior Tracker

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/ElrinR/cheatcode?style=social)](https://github.com/ElrinR/cheatcode)

A sleek, modern web application for tracking player behavior and detecting cheating in online games using **Node.js**, **Express**, **EJS**, and **Docker**.

## Features

✅ **Real-time Dashboard** - Monitor all players at a glance  
✅ **Player Management** - Track player statistics and suspicion levels  
✅ **Violation Logging** - Record all detected cheating incidents  
✅ **Analytics & Reports** - Visual statistics and behavior analysis  
✅ **Docker Ready** - Easy deployment with Docker containers  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Modern UI** - Sleek, dark theme with cyberpunk aesthetics  

## 🎮 What You Get

### 📊 Dashboard
- **4 Real-time Stats**: Total players, suspicious players, violations, system status
- **Quick Action Buttons**: Navigate to other sections instantly
- **System Health Indicator**: Live monitoring display

### 👥 Player Management
- **Player Table**: All players with suspicion scores (0-100%)
- **Status Tracking**: Clean, Suspicious, or Banned
- **Warning Count**: Track violations per player
- **Color-Coded Bars**: Visual suspicion meter
- **Ban Functionality**: One-click player removal

### 🚨 Violations Log
- **Incident Tracking**: Every cheating detection logged
- **Severity Levels**: Low, Medium, High, Critical (color-coded)
- **Detailed Info**: Player, violation type, date, severity
- **Visual Cards**: Easy to scan and investigate

### 📈 Analytics & Reports
- **Player Distribution Charts**: Status breakdown
- **Violation Type Analysis**: Most common cheats
- **System Statistics**: Overall metrics and trends
- **Visual Insights**: Bar charts and summaries

## 💻 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime for server |
| **Express.js** | Web server framework |
| **EJS** | Template engine for HTML rendering |
| **CSS3** | Styling (gradients, animations) |
| **Docker** | Container & deployment |
| **Docker Compose** | Multi-container orchestration |

### Design Highlights
- **Dark cyberpunk theme** with neon cyan accents
- **Color-coded status indicators** (green/orange/red)
- **Responsive layout** (mobile, tablet, desktop)
- **Smooth animations** and transitions
- **Custom CSS** - no frameworks, pure styling

## 📂 Project Structure

```
cheatcode/
├── 🐳 Docker Setup
│   ├── Dockerfile                    # Container image config
│   ├── docker-compose.yml           # Easy Docker deployment
│   └── .dockerignore                # Docker exclusions
│
├── 🎯 Backend
│   ├── app.js                       # Express server (~80 lines)
│   └── data/
│       └── database.js              # Sample data
│
├── 🎨 Frontend
│   ├── views/                       # EJS templates
│   │   ├── index.ejs               # Dashboard
│   │   ├── players.ejs             # Players table
│   │   ├── violations.ejs          # Violations log
│   │   ├── analytics.ejs           # Analytics charts
│   │   ├── header.ejs              # Navigation
│   │   └── footer.ejs              # Footer
│   └── public/
│       └── css/
│           └── style.css           # Complete styling (~600 lines)
│
├── 📚 Documentation
│   ├── README.md                    # This file
│   ├── EXPLANATION.md               # Simple guide
│   ├── PRESENTATION.md              # Presentation script
│   ├── FILE_GUIDE.md                # File details
│   └── QUICKSTART.md                # Quick reference
│
├── ⚙️ Config
│   ├── package.json                 # Dependencies
│   ├── .gitignore                   # Git exclusions
│   ├── start.bat                    # Windows launcher
│   └── start.sh                     # Mac/Linux launcher
│
└── 📦 Generated
    ├── node_modules/                # Dependencies (ignored)
    └── package-lock.json            # Dependency lock
```

**Total:** ~900 lines of code (small, maintainable)

## 🚀 Quick Start (Docker - Recommended)

The **easiest way** to run this application is with Docker. No need to install Node.js!

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

### Deploy in 2 Commands

```bash
git clone https://github.com/ElrinR/cheatcode.git
cd cheatcode
docker-compose up --build
```

**Then visit:** `http://localhost:3000` ✨

**To stop:**
```bash
docker-compose down
```

---

## 📖 Alternative: Run Locally (Without Docker)

If you prefer to run without Docker:

### Prerequisites
- Node.js 16+ installed

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm start
```

### Step 3: Access the Application
Open your browser: `http://localhost:3000`

**To stop:**
```
Ctrl + C
```

## 🌐 API Endpoints

### Pages/Routes
| Route | Description |
|-------|-------------|
| `GET /` | Dashboard - Overview & stats |
| `GET /players` | Player management table |
| `GET /violations` | Violations log |
| `GET /analytics` | Analytics & reports |

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/report-violation` | Report a new violation |
| `POST` | `/api/ban-player` | Ban a player immediately |

## 🛠️ Customization & Development

### Add More Players
Edit `data/database.js`:
```javascript
const playersDb = [
  { id: 1, username: 'Player1', suspicion: 15, warnings: 0, status: 'Clean', joinDate: '2026-01-15' },
  // Add your players here
];
```

### Change Colors & Design
Edit `public/css/style.css`:
```css
/* Main accent color */
#00d4ff   /* Cyan */
#10b981   /* Green - Success */
#ef4444   /* Red - Danger */
#f59e0b   /* Orange - Warning */
```

### Add a New Feature Page
1. Create `views/newpage.ejs`
2. Add route in `app.js`:
```javascript
app.get('/newpage', (req, res) => {
  res.render('newpage', { pageTitle: 'New Page' });
});
```
3. Update navigation in `views/header.ejs`

### Connect a Real Database
Replace in-memory data with:
- **MongoDB**: `npm install mongoose`
- **PostgreSQL**: `npm install pg`
- **MySQL**: `npm install mysql2`

### Docker Development

**Run with volumes for hot-reload:**
```bash
docker-compose -f docker-compose.yml up
```

**Build without Docker:**
```bash
npm install
npm start
```

## 🐳 Docker Deployment & Commands

### Docker Compose Commands (Recommended)

**Start the application:**
```bash
docker-compose up --build
```

**Run in background:**
```bash
docker-compose up -d
```

**View logs:**
```bash
docker-compose logs -f app
```

**Stop everything:**
```bash
docker-compose down
```

**Restart:**
```bash
docker-compose restart
```

### Docker CLI Commands

**Build image:**
```bash
docker build -t anticheat-tracker .
```

**Run container:**
```bash
docker run -p 3000:3000 anticheat-tracker
```

**View images:**
```bash
docker images
```

**View running containers:**
```bash
docker ps
```

### Deploy to Production

Once verified locally, deploy to:
- **AWS EC2** - Push Docker image
- **DigitalOcean App Platform** - Connect GitHub repo
- **Heroku** - Use Docker container registry
- **Azure Container Instances** - Deploy from image
- **Google Cloud Run** - Serverless containers

## 📚 Additional Resources

### Documentation Files Included
- **README.md** (this file) - Project overview
- **EXPLANATION.md** - Simple explanation of how it works
- **PRESENTATION.md** - Full presentation script for demo
- **FILE_GUIDE.md** - Detailed file-by-file breakdown
- **QUICKSTART.md** - Quick reference card

### Learn More
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [EJS Templates](https://ejs.co/)
- [Docker Documentation](https://docs.docker.com/)
- [CSS3 Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/)

### Getting Help
If you encounter issues:
1. Check **Troubleshooting** section above
2. Review logs: `docker-compose logs`
3. Check GitHub Issues
4. Read the documentation files included

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Commit** your changes: `git commit -m 'Add amazing feature'`
5. **Push** to the branch: `git push origin feature/amazing-feature`
6. **Open** a Pull Request

### Ways to Contribute
- 🐛 Report bugs and issues
- 🎨 Improve UI/UX design
- 📝 Improve documentation
- ⭐ Add new features
- 🚀 Improve performance
- 💡 Suggest improvements

## 📦 Deployment Ready

This project is designed to be deployed anywhere:

### Quick Deploy Options
- **Docker Hub** - Push to Docker Hub registry
- **GitHub Container Registry** - Use GitHub's registry
- **AWS ECR** - Amazon's container registry
- **DigitalOcean App Platform** - Zero-config deployment
- **Heroku** - Use Docker buildpacks
- **Railway.app** - Modern deployment platform
- **Render** - Deploy from GitHub

### Deployment Guide
```bash
# Build for production
docker build -t anticheat-tracker:latest .

# Tag for registry
docker tag anticheat-tracker:latest myregistry/anticheat-tracker:latest

# Push to registry
docker push myregistry/anticheat-tracker:latest
```

## Future Enhancements

- [ ] Connect to MongoDB database
- [ ] User authentication & roles
- [ ] Real-time WebSocket notifications
- [ ] Machine learning for anomaly detection
- [ ] Email alerts for critical violations
- [ ] Player appeal system
- [ ] Admin dashboard with advanced settings

## 🆘 Troubleshooting

### Application won't start with Docker?

**Check if Docker is running:**
```bash
docker ps
```

**View container logs:**
```bash
docker-compose logs -f app
```

**Rebuild from scratch:**
```bash
docker-compose down
docker-compose up --build
```

### Port 3000 already in use?

**Option 1 - Change port in `docker-compose.yml`:**
```yaml
ports:
  - "8000:3000"  # Use 8000 instead
```

**Option 2 - Kill process using port 3000:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Can't access http://localhost:3000?

1. Check container is running: `docker ps`
2. Check port mapping: `docker port cheatcode-app-1`
3. Try `http://127.0.0.1:3000` instead
4. Clear browser cache: `Ctrl+Shift+Del`

### Docker Desktop not working?

- Restart Docker Desktop
- Check system requirements (Windows/Mac need virtualization enabled)
- Download latest version: https://www.docker.com/

### Running locally (without Docker) has issues?

**Make sure Node.js is installed:**
```bash
node --version  # Should be 16 or higher
```

**Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

## 📄 License

This project is licensed under the **MIT License** - feel free to use it for your game or project!

See [LICENSE](LICENSE) file for details.

---

## 👤 About

**AntiCheat Pro** was built as a complete, production-ready solution for game server administrators to track and manage player behavior.

### Key Highlights
✨ Built with modern web technologies  
✨ Docker-ready for instant deployment  
✨ Responsive & beautiful UI  
✨ Fully documented & beginner-friendly  
✨ Open source & MIT licensed  

---

## 🙏 Support

If you found this project helpful:
- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest improvements
- 📢 Share with others
- 🤝 Contribute code

---

**Made with ❤️ for gaming communities | [GitHub](https://github.com/ElrinR/cheatcode) | [Docker Hub](https://hub.docker.com/) | [License](LICENSE)**
