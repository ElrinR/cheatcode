// Mock Database - Can be replaced with real MongoDB, PostgreSQL, etc.

const playersDb = [
  { id: 1, username: 'PhantomX', suspicion: 15, warnings: 0, status: 'Clean', joinDate: '2026-01-15' },
  { id: 2, username: 'ShadowBot', suspicion: 65, warnings: 3, status: 'Suspicious', joinDate: '2026-02-01' },
  { id: 3, username: 'ToxicPlayer', suspicion: 95, warnings: 5, status: 'Banned', joinDate: '2025-12-20' },
  { id: 4, username: 'NoobSlayer', suspicion: 25, warnings: 1, status: 'Clean', joinDate: '2026-02-05' },
];

const violationsDb = [
  { id: 1, player: 'PhantomX', type: 'Unusual Aim', date: '2026-02-10', severity: 'Low', details: 'Detected unusual aiming pattern' },
  { id: 2, player: 'ShadowBot', type: 'Speed Hack', date: '2026-02-09', severity: 'High', details: 'Player moving faster than physically possible' },
  { id: 3, player: 'ToxicPlayer', type: 'Wall Hack', date: '2026-02-08', severity: 'Critical', details: 'Player can see through walls' },
  { id: 4, player: 'NoobSlayer', type: 'Chat Spam', date: '2026-02-07', severity: 'Low', details: 'Repeated spam messages' },
];

module.exports = {
  playersDb,
  violationsDb
};
