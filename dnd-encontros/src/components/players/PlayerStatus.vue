<template>
  <div class="playerstatus">
    <v-tooltip top v-for="s in status" :key="s">
      <template v-slot:activator="{ on }">
        <v-chip dense label class="ma-1" v-on="on">
          <v-avatar left>
            <v-icon small>{{s.icon}}</v-icon>
          </v-avatar>
          {{s.value}}
        </v-chip>
      </template>
      <span>s.name</span>
    </v-tooltip>
  </div>
</template>


<script>
export default {
  props: {
    player: {}
  },
  data() {
    return { status: [
      { name: "CA", value: this.player.ca, icon: 'fa-shield-alt'},
      { name: "PV", value: this.player.pv, icon: 'fa-heart'},
      { name: "Percepção", value: this.player.percepcao, icon: 'fa-eye'},
      { name: "Investigação", value: this.player.investigacao, icon: 'fa-search'},
      { name: "Intuição", value: this.player.intuicao, icon: 'fa-lightbulb'},
      ] };
  }
};
</script>

<style scoped>
.playerstatus {
  align-content: flex-end;
}
</style>