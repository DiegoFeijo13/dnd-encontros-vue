<template>
  <v-container color="grey">
    <v-app-bar app color="primary" dark>
      <h1>PDJs</h1>
      <v-spacer></v-spacer>
      <add-player-dialog />
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="4" v-for="(p, n) in players" :key="n" class="ma-0">
          <Player :player="p" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Player from "./Player.vue";
import AddPlayerDialog from "./AddPlayerDialog.vue";

export default {
  components: { Player, AddPlayerDialog },
  computed: mapState({
    players: (state) => state.player.all,
  }),
  created() {
    this.$store.dispatch("player/getAll");
  },
};
</script>