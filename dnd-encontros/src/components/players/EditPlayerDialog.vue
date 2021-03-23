<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>fa-edit</v-icon>
      </v-btn>
    </template>
    <player-form :playerToEdit="playerToEdit" title="Editar PDJ" @confirm="confirm" />
  </v-dialog>
</template>

<script>
import PlayerForm from "./PlayerForm.vue";

export default {
  components: { PlayerForm },
  props: {
    playerToEdit: Object
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    confirm(player) {
      this.dialog = false;
      this.$store.commit("player/update", player);
    }
  }
};
</script>