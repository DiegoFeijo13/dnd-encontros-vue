<template>
  <v-card class="ma-4">
    <v-card-title>
      <span class="heading"> Personagens de Jogadores</span>
      <v-spacer></v-spacer>
      <AddPlayerDialog />
    </v-card-title>
    <v-card-text> 
    <PlayerData :players="players" />

    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import PlayerData from "./PlayerData.vue";
import AddPlayerDialog from "./AddPlayerDialog.vue";

export default {
  components: { PlayerData, AddPlayerDialog },
  computed: mapState({
    players: (state) => state.player.all,
  }),
  created() {
    this.$store.dispatch("player/getAll");
  },
};
</script>