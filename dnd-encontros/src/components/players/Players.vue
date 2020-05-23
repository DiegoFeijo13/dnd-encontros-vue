<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-row>
        <v-col>
          <h1>Personagens dos Jogadores</h1>
        </v-col>
        <v-col lg="2" align-self="end">
          <add-player-dialog />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="(p, n) in players" :key="n">
          <Player :player="p" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Player from "./Player.vue";
import AddPlayerDialog from "./AddPlayerDialog.vue";

export default {
  components: { Player, AddPlayerDialog },
  computed: mapState({
    players: state => state.player.all
  }),
  created() {
    this.$store.dispatch("player/getAllPlayers");
  }
};
</script>