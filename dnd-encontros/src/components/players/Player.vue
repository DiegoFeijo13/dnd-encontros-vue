<template>
  <v-card>
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
      <table>
        <thead>
          <tr>
            <th>LVL</th>
            <th>CA</th>
            <th>PV</th>
            <th>PER</th>
            <th>INT</th>
            <th>INV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{player.nivel}}</td>
            <td>{{player.ca}}</td>
            <td>{{player.pv}}</td>
            <td>{{player.percepcao}}</td>
            <td>{{player.intuicao}}</td>
            <td>{{player.investigacao}}</td>
          </tr>
        </tbody>
      </table>
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
          @confirm="remove"
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
    player: Object
  },
  data() {
    return {
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
    remove(value) {
      this.removedialog = false;
      if (value) {
        this.$store.commit("player/remove", this.player);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
table th {
  text-align: center;
  background-color: black;
  color: white;
}

table td {
  text-align: center;
  background-color: lightgray;
}
</style>