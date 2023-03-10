use portals;
db.dropDatabase();

db.players.insertMany([
  {
    name: "Mathias",
    active: false,
    wins: 0,
    losses: 0
  },
  {
    name: "Connor",
    active: false,
    wins: 0,
    losses: 0
  },
  {
    name: "Taylor",
    active: false,
    wins: 0,
    losses: 0
  },
  {
    name: "Eliza",
    active: false,
    wins: 0,
    losses: 0
  }
]);