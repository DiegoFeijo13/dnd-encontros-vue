<template>
  <div class="playerstatus">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>fa-shield-alt</v-icon>
          </v-avatar>
          {{player.ca}}
        </v-chip>
      </template>
      <span>CA</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>fa-heart</v-icon>
          </v-avatar>
          {{player.pv}}
        </v-chip>
      </template>
      <span>PV</span>
    </v-tooltip>   
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>fa-eye</v-icon>
          </v-avatar>
          {{player.percepcao}}
        </v-chip>
      </template>
      <span>Percepção</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>fa-search</v-icon>
          </v-avatar>
          {{player.investigacao}}
        </v-chip>
      </template>
      <span>Investigação</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>fa-lightbulb</v-icon>
          </v-avatar>
          {{player.intuicao}}
        </v-chip>
      </template>
      <span>Intuição</span>
    </v-tooltip>
  </div>
</template>


<script>
export default {
  props: {
    player: {}
  }
};
</script>

<style scoped>
.playerstatus{
    align-content: flex-end;
}
</style>