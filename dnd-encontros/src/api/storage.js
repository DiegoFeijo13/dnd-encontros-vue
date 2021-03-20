function getPlayersFromLocalStorage() {
    let players = [];
    if (localStorage.getItem("players")) {
        try {
            players = JSON.parse(localStorage.getItem("players"));
        } catch (e) {
            localStorage.removeItem("players");
        }
    }

    return players;
}

function savePlayersToLocalStorage(players) {
    const parsed = JSON.stringify(players);
    localStorage.setItem("players", parsed);
}

function getEncountersFromLocalStorage() {
    let encounters = [];
    if (localStorage.getItem("encounters")) {
        try {
            encounters = JSON.parse(localStorage.getItem("encounters"));
        } catch (e) {
            localStorage.removeItem("encounters");
        }
    }
    return encounters;
}

function saveEncountersToLocalStorage(encounters) {
    const parsed = JSON.stringify(encounters);
    localStorage.setItem("encounters", parsed);
}

export default {
    getPlayers(cb) {
        cb(getPlayersFromLocalStorage())
    },
    savePlayers(players) {
        savePlayersToLocalStorage(players)
    },
    getEncounters(cb) {
        cb(getEncountersFromLocalStorage())
    },
    saveEncounters(encounters) {
        saveEncountersToLocalStorage(encounters)
    }

}