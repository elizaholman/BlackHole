const baseURL = 'http://localhost:9000/api/players/';

const PlayerService =  {
  getPlayers() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  addPlayer(player) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  updatePlayer(player) {
    return fetch(baseURL + player._id, {
      method: 'PUT',
      body: JSON.stringify(player),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deletePlayer(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};