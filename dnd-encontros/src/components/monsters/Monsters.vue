<template>
  <div>
    <v-app-bar app color="primary" dark>
      <h1>Monstros</h1>
      <v-spacer></v-spacer>
      <add-monster-dialog />
    </v-app-bar>

    <v-container fluid>
      <div v-for="(m, n) in monsters" :key="n" class="ma-3">
        <monster :monster="m" />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Monster from "./Monster.vue";
import AddMonsterDialog from "./AddMonsterDialog";

export default {
  components: {
    Monster,
    AddMonsterDialog
  },
  computed: mapState({
    monsters: state => state.monster.all
  }),
  created() {
    this.$store.dispatch("monster/getAll");
  }
};
</script>