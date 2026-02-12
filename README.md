# 🛡️ AntiCheat Pro - Player Behavior Tracker

A sleek, modern web application for tracking player behavior and detecting cheating in online games using **Node.js**, **Express**, **EJS**, and **Docker**.

## Features

✅ **Real-time Dashboard** - Monitor all players at a glance  
✅ **Player Management** - Track player statistics and suspicion levels  
✅ **Violation Logging** - Record all detected cheating incidents  
✅ **Analytics & Reports** - Visual statistics and behavior analysis  
✅ **Docker Ready** - Easy deployment with Docker containers  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Modern UI** - Sleek, dark theme with cyberpunk aesthetics  

## Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: EJS Templates + Custom CSS
- **Database**: In-memory (JSON) - can be upgraded to MongoDB/PostgreSQL
- **Containerization**: Docker & Docker Compose
- **Styling**: CSS3 with gradients and animations

## Project Structure

```
cheatcode/
├── app.js                 # Main Express server
├── package.json           # Dependencies
├── Dockerfile            # Docker image config
├── docker-compose.yml    # Docker Compose config
├── routes/               # API routes
├── views/                # EJS templates
│   ├── index.ejs        # Dashboard
│   ├── players.ejs      # Player management
│   ├── violations.ejs   # Violation log
│   ├── analytics.ejs    # Analytics
│   ├── header.ejs       # Navigation
│   └── footer.ejs       # Footer
└── public/
    ├── css/
    │   └── style.css    # All styling
    └── js/              # Frontend scripts
```

## Getting Started

### Option 1: Run Locally (Without Docker)

**Step 1:** Install Node.js dependencies
```bash
npm install
```

**Step 2:** Start the server
```bash
npm start
```

**Step 3:** Open your browser
```
http://localhost:3000
```

### Option 2: Run with Docker

**Step 1:** Make sure Docker is installed and running

**Step 2:** Build and run with Docker Compose
```bash
docker-compose up --build
```

**Step 3:** Open your browser
```
http://localhost:3000
```

**To stop the container:**
```bash
docker-compose down
```

## API Endpoints

### Pages
- `GET /` - Dashboard
- `GET /players` - Player Management
- `GET /violations` - Violations Log
- `GET /analytics` - Analytics & Reports

### API Routes
- `POST /api/report-violation` - Report a violation
- `POST /api/ban-player` - Ban a player

## How to Use

### 📊 Dashboard
- View total players, suspicious players, and violations
- Quick access buttons to other sections
- System status indicator

### 👥 Player Management
- See all players with suspicion scores
- Track warnings and player status
- Ban suspicious players
- Visual suspicion meter

### 🚨 Violations Log
- View all reported violations
- Filter by severity (Low, Medium, High, Critical)
- Color-coded violation cards
- Detailed incident information

### 📈 Analytics
- Player status distribution charts
- Violation severity breakdown
- Overall system statistics
- Trends and patterns

## Customization

### Add More Players
Edit `app.js` and modify the `players` array:
```javascript
let players = [
  { id: 1, username: 'Player1', suspicion: 15, warnings: 0, status: 'Clean' },
  // Add more players here
];
```

### Modify Styling
Edit `public/css/style.css` to change colors, fonts, or layout.

### Add New Pages
1. Create a new `.ejs` file in `views/`
2. Add a route in `app.js`
3. Update navigation in `header.ejs`

## Docker Commands

```bash
# Build image
docker build -t anticheat-tracker .

# Run container
docker run -p 3000:3000 anticheat-tracker

# Build with Compose
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

## Future Enhancements

- [ ] Connect to MongoDB database
- [ ] User authentication & roles
- [ ] Real-time WebSocket notifications
- [ ] Machine learning for anomaly detection
- [ ] Email alerts for critical violations
- [ ] Player appeal system
- [ ] Admin dashboard with advanced settings

## Troubleshooting

**Port 3000 already in use?**
```bash
# Change port in app.js or docker-compose.yml
```

**Docker not found?**
- Download from https://www.docker.com/

**Can't connect to localhost:3000?**
- Make sure the server is running
- Check docker logs: `docker-compose logs`

## License

MIT License - Feel free to use this project for your game!

---

Made with ❤️ for gaming communities
