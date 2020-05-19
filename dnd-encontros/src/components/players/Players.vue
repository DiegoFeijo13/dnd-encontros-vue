<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-row>
        <v-col>
          <h1>Personagens dos Jogadores</h1>
        </v-col>
        <v-col lg="2" align-self="end">
          <AddPlayer @savePlayer="addPlayer" />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="(p, n) in players" :key="n">
          <Player :player="p" @removePlayer="removePlayer(n)" @savePlayer="savePlayers()" />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    this.$emit("title", "Personagens dos Jogadores");
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