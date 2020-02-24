<template>
  <v-container fluid>
    <AddPlayer @savePlayer="addPlayer" />
    <v-row dense>
      <v-col v-for="(p, n) in players" :key="n" :cols="2">
        <Player :player="p" @editPlayer="editPlayer" @removePlayer="removePlayer(n)"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Player from "./Player.vue";
import AddPlayer from "./AddPlayer.vue";

export default {
  components: { Player, AddPlayer },
  data() {
    return {
      players: []
    };
  },
  mounted() {
    if (localStorage.getItem("players")) {
      try {
        this.players = JSON.parse(localStorage.getItem("players"));
      } catch (e) {
        localStorage.removeItem("players");
      }
    }
  },
  methods: {
    addPlayer(player) {
      this.players.push(player);
      this.savePlayers();
    },
    editPlayer(){
      this.savePlayers()
    },
    removePlayer(x) {
      this.players.splice(x, 1);
      this.savePlayers();
    },
    savePlayers() {
      const parsed = JSON.stringify(this.players);
      localStorage.setItem("players", parsed);
    }
  }
};
</script>