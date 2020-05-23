<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="brown lighten-2" dark v-on="on">Novo PDJ</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Novo PDJ</v-card-title>

      <v-card-text>
        <player-form :playerToEdit="newPlayer" />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="confirm()">Salvar</v-btn>
      </v-card-actions>
    </v-card>
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
    confirm() {
      this.dialog = false;      
      this.$store.commit('player/addPlayer',this.newPlayer);
    }
  }
};
</script>