<template>
  <v-card class="my-2" max-width="274">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <img
          src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/lou_devole.jpg"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{player.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{player.raca}} / {{player.classe}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row dense>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">LVL</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.nivel}}</span>
          </v-avatar>
        </v-col>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">PER</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.percepcao}}</span>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">CA</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.ca}}</span>
          </v-avatar>
        </v-col>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">INT</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.intuicao}}</span>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">PV</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.pv}}</span>
          </v-avatar>
        </v-col>
        <v-col>
          <v-avatar tile size="36" color="black">
            <span class="label">INV</span>
          </v-avatar>
          <v-avatar tile size="36" color="#d3d3d3">
            <span class="value">{{player.investigacao}}</span>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <edit-player-dialog :playerToEdit="player" />
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover PDJ?'"
          :text="`O Personagem ${player.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removePlayer"
        />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import ConfirmationDialog from "../template/ConfirmationDialog";
import EditPlayerDialog from "./EditPlayerDialog";

export default {
  components: {
    ConfirmationDialog,
    EditPlayerDialog
  },
  props: {
    player: {}
  },
  data() {
    return {
      editdialog: false,
      removedialog: false,
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
  },
  methods: {
    removePlayer(value) {
      this.removedialog = false;
      if (value) {
        this.$store.commit("player/removePlayer", this.player);
      }
    }
  }
};
</script>

<style scoped>
.label {
  text-align: center;
  color: white;
}

.value {
  text-align: center;
}
</style>