<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="brown lighten-2" dark v-on="on">Novo Monstro</v-btn>
    </template>
    <monster-form :monsterToEdit="newMonster" title="Novo Monstro" @confirm="confirm"/>
  </v-dialog>
</template>

<script>
import MonsterForm from "./MonsterForm.vue";

export default {
  components: { MonsterForm },

  data() {
    return {
      dialog: false,
      newMonster: {}
    };
  },
  methods: {
    confirm(monster) {
      this.dialog = false;
      this.$store.commit("monster/add", monster);
    },
  }
};
</script>