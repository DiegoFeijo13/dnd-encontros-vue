<template>
  <div>
    <v-flex xs2>
      <v-avatar size="24">
        <img :src="monster.img" />
      </v-avatar>
    </v-flex>
    <v-flex class="ml-1">{{ monster.nome }} ND: {{monster.nd}} XP: {{monster.xp}}</v-flex>
  </div>
</template>

<script>
export default {
  props: {
    monsterToShow: Object
  },
  data() {
    return {
      monster: this.monsterToShow
    };
  }
};
</script>