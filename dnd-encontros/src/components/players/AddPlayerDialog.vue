<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="brown lighten-2" dark v-on="on">Novo PDJ</v-btn>
    </template>

    <player-form :playerToEdit="newPlayer" title="Novo PDJ" @confirm="confirm"/>
  </v-dialog>
</template>

<script>
import PlayerForm from "./PlayerForm.vue";

export default {
  components: { PlayerForm },
  data() {
    return {
      dialog: false,
      newPlayer: {}
    };
  },
  methods: {
    confirm(player) {
      this.dialog = false;
      this.$store.commit("player/add", player);
    }
  }
};
</script>