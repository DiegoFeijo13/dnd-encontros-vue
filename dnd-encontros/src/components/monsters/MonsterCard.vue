<template>
  <v-card class="my-2" color="#ffe599">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline primary--text">
          {{ monster.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-capitalize font-italic primary--text">
          {{ monster.type }} / {{ monster.alignment }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar>
        <ViewMonster :monster="monster"/>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-list-item>
      <v-list-item-content class="primary--text">
        <CardLine :title="'Nível de Desafio'" :text="ndToText()" />
        <CardLine :title="'Pontos de Vida'" :text="pvToText()" />
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>


<script>
import axios from "axios";
import CardLine from "../ui/CardLine.vue";
import ViewMonster from "./ViewMonster.vue"
import util from "../../api/util"

export default {
  components: {
    CardLine,
    ViewMonster
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      monster: {},
    };
  },
  mounted() {
    this.getMonster();
  },
  methods: {
    getMonster() {
      axios
        .get(`http://www.dnd5eapi.co${this.url}`)
        .then((response) => (this.monster = response.data));
    },
    pvToText() {
      return `${this.monster.hit_dice}+${this.monster.hit_points}`;
    },
    ndToText() {
      return `${util.numToFractionString(this.monster.challenge_rating)} (${this.monster.xp} XP)`;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
table th {
  text-align: center;
  background-color: black;
  color: white;
}

table td {
  text-align: center;
  background-color: lightgray;
}
</style>