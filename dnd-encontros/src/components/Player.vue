<template>
  <v-card shaped max-width="288">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{player.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{player.classe}} / {{player.raca}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar color="teal">
        <div style="width:100%; align-content:center;">
          <span class="white--text headline">{{player.nivel}}</span>
        </div>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider class="mx-4" :inset="inset"></v-divider>

    <v-card-text>
      <player-status :status="player.status" />
      <player-conditions />
    </v-card-text>
    
    
  </v-card>
</template>


<script>
import PlayerStatus from "./PlayerStatus.vue";
import PlayerConditions from "./PlayerConditions.vue";

export default {
  components: { PlayerStatus, PlayerConditions },
  props: {
    player: {}
  },
  data() {
    return {
      condicoes: [
        "Agarrado",
        "Amedrontado",
        "Atordoado",
        "Caído",
        "Cego",
        "Enfeitiçado",
        "Envenenado",
        "Impedido",
        "Incapacitado",
        "Inconsciente",
        "Invisível",
        "Paralisado",
        "Petrificado",
        "Surdo"
      ],
      items: []
    };
  }
};
</script>