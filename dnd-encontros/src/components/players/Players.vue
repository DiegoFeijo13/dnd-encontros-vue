<template>
  <div>
    <v-app-bar app color="primary" dark>
      <h1>PDJs</h1>
      <v-spacer></v-spacer>
      <add-player-dialog />
    </v-app-bar>

    <v-container>
      <div v-for="(p, n) in players" :key="n" class="ma-3">
        <Player :player="p" />
      </div>
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
    this.$store.dispatch("player/getAll");
  }
};
</script>