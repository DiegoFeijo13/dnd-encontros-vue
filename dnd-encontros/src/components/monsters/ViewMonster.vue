<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn icon color="primary" v-on="{ ...dialog, ...tooltip }">
            <v-icon>mdi-note-text</v-icon>
          </v-btn>
        </template>
          <span>Ficha</span>
      </v-tooltip>
    </template>
    <MonsterSheet :monster="monster" title="Ficha do Monstro" />
  </v-dialog>
</template>

<script>
import MonsterSheet from "./MonsterSheet.vue";

export default {
  components: { MonsterSheet },
  props: {
    monster: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>