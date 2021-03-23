<template>
  <v-card class="my-2" color="background">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ player.nome }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ player.raca }} / {{ player.classe }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar color="grey">
        <img
          src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/lou_devole.jpg"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-list-item>
        <v-list-item-content class="primary--text">
          <CardLine
            :title="'Classe de Armadura'"
            :text="player.ca.toString()"
          />
          <CardLine :title="'Pontos de Vida'" :text="player.pv.toString()" />
          <CardLine :title="'Nível'" :text="player.nivel.toString()" />
          <CardLine :title="'Percepção'" :text="player.percepcao.toString()" />
          <CardLine :title="'Intuição'" :text="player.intuicao.toString()" />
          <CardLine :title="'Investigação'" :text="player.investigacao.toString()" />
        </v-list-item-content>
      </v-list-item>      
    </v-card-text>

    <v-card-actions>
      <EditPlayerDialog :playerToEdit="player" />
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
import CardLine from "../ui/CardLine.vue";
import ConfirmationDialog from "../template/ConfirmationDialog";
import EditPlayerDialog from "./EditPlayerDialog";

export default {
  components: {
    CardLine,
    ConfirmationDialog,
    EditPlayerDialog,
  },
  props: {
    player: Object,
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
        "Surdo",
      ],
      items: [],
    };
  },
  methods: {
    remove(value) {
      this.removedialog = false;
      if (value) {
        this.$store.commit("player/remove", this.player);
      }
    },
  },
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