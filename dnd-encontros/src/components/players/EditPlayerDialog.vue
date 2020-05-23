<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn icon color="blue" v-on="on">
        <v-icon>fa-edit</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Editar PDJ</v-card-title>

      <v-card-text>
        <player-form :playerToEdit="player" />
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
  props: {
    playerToEdit: Object
  },
  data() {
    return {
      dialog: false,
      player: {
        id: this.playerToEdit.id,
        nome: this.playerToEdit.nome,
        classe: this.playerToEdit.classe,
        raca: this.playerToEdit.raca,
        nivel: this.playerToEdit.nivel,
        ca: this.playerToEdit.ca,
        pv: this.playerToEdit.pv,
        percepcao: this.playerToEdit.percepcao,
        investigacao: this.playerToEdit.investigacao,
        intuicao: this.playerToEdit.intuicao
      }
    };
  },
  methods: {
    confirm() {
      this.dialog = false;
      this.$store.commit("player/updatePlayer", this.player);
    }
  }
};
</script>