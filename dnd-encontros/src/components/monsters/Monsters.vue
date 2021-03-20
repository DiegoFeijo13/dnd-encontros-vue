<template>
  <div>
    <v-app-bar app color="primary" dark>
      <h1>Monstros</h1>
      <v-spacer></v-spacer>
      <add-monster-dialog />
    </v-app-bar>

    <v-container fluid>
      <v-data-iterator
      :items="monsters"
      item-key="nome"
      :items-per-page="4"      
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="(m,n) in monsters"
            :key="n"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
          <Monster :monster="m" />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
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
    AddMonsterDialog,
  },
  computed: mapState({
    monsters: (state) => state.monster.all,
  }),
  created() {
    this.$store.dispatch("monster/getAll");
  },
};
</script>