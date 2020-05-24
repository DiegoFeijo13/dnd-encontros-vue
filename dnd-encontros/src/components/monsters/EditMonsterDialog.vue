<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn icon color="blue" v-on="on">
        <v-icon>fa-edit</v-icon>
      </v-btn>
    </template>
    <monster-form :monsterToEdit="monsterToEdit" title="Editar Monstro" @confirm="confirm" />
  </v-dialog>
</template>

<script>
import MonsterForm from "./MonsterForm.vue";

export default {
  components: { MonsterForm },
  props: {
    monsterToEdit: Object
  },

  data() {
    return {
      dialog: false
    };
  },
  methods: {
    confirm(monster) {
      this.dialog = false;
      this.$store.commit("monster/update", monster);
    }
  }
};
</script>