<template>
  <v-card class="ma-4">
    <v-card-title>
      <span class="heading"> Monstros</span>
    </v-card-title>
    <v-card-text>
      <MonsterData class="ma-2" />
    </v-card-text>
  </v-card>
</template>

<script>
import MonsterData from "./MonstersData.vue";

export default {
  components: {
    MonsterData,
  },
};
</script>