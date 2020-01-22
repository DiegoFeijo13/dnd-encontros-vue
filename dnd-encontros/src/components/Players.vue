<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="p in players" :key="p.nome" :cols="3">
        <Player :player="p" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Player from "./Player.vue";
export default {
  components: { Player },
  data() {
    return {
      players: [
        {
          nome: "Wild Bill Hiccup",
          classe: "Ladino",
          raca: "Gnomo",
          nivel: "6",
          status: [
            { desc: "CA", valor: "12", icon: "fa-shield-alt" },
            { desc: "PV", valor: "12", icon: "fa-heart" },
            { desc: "Iniciativa", valor: "5", icon: "fa-bolt" },
            { desc: "Percepção", valor: "10", icon: "fa-eye" },
            { desc: "Investigação", valor: "10", icon: "fa-search" },
            { desc: "Intuição", valor: "10", icon: "fa-lightbulb" }
          ]
        },
        {
          nome: "Wild Bill Hiccup",
          classe: "Ladino",
          raca: "Gnomo",
          nivel: "6",
          status: [
            { desc: "CA", valor: "12", icon: "fa-shield-alt" },
            { desc: "PV", valor: "12", icon: "fa-heart" },
            { desc: "Iniciativa", valor: "5", icon: "fa-bolt" },
            { desc: "Percepção", valor: "10", icon: "fa-eye" },
            { desc: "Investigação", valor: "10", icon: "fa-search" },
            { desc: "Intuição", valor: "10", icon: "fa-lightbulb" }
          ]
        }
      ]
    };
  }
};
</script>