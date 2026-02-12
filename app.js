const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set up EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sample data storage (in real app, use database)
let players = [
  { id: 1, username: 'Player1', suspicion: 15, warnings: 0, status: 'Clean' },
  { id: 2, username: 'Player2', suspicion: 65, warnings: 3, status: 'Suspicious' },
  { id: 3, username: 'Player3', suspicion: 95, warnings: 5, status: 'Banned' }
];

let violations = [
  { id: 1, player: 'Player1', type: 'Unusual Aim', date: '2026-02-10', severity: 'Low' },
  { id: 2, player: 'Player2', type: 'Speed Hack', date: '2026-02-09', severity: 'High' },
  { id: 3, player: 'Player3', type: 'Wall Hack', date: '2026-02-08', severity: 'Critical' }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    pageTitle: 'Dashboard',
    totalPlayers: players.length,
    suspiciousPlayers: players.filter(p => p.suspicion > 50).length,
    recentViolations: violations.length
  });
});

app.get('/players', (req, res) => {
  res.render('players', { 
    pageTitle: 'Players',
    players: players
  });
});

app.get('/violations', (req, res) => {
  res.render('violations', { 
    pageTitle: 'Violations',
    violations: violations
  });
});

app.get('/analytics', (req, res) => {
  res.render('analytics', { 
    pageTitle: 'Analytics',
    players: players,
    violations: violations
  });
});

// API endpoints for adding data
app.post('/api/report-violation', (req, res) => {
  const { playerName, violationType, severity } = req.body;
  const newViolation = {
    id: violations.length + 1,
    player: playerName,
    type: violationType,
    date: new Date().toISOString().split('T')[0],
    severity: severity
  };
  violations.push(newViolation);
  res.json({ success: true, message: 'Violation reported!' });
});

app.post('/api/ban-player', (req, res) => {
  const { playerId } = req.body;
  const player = players.find(p => p.id == playerId);
  if (player) {
    player.status = 'Banned';
    player.suspicion = 100;
  }
  res.json({ success: true, message: 'Player banned!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎮 Server running on http://localhost:${PORT}`);
});
