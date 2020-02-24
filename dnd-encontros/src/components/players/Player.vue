<template>
  <v-card shaped>
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

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <player-status :player="player" />
      <player-conditions />
    </v-card-text>

    <v-card-actions>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="red" dark x-small v-on="on">Remover</v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover PDJ?'"
          :text="`O Personagem ${player.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removePlayer"
        />
      </v-dialog>

      <v-spacer></v-spacer>

      <v-dialog v-model="editdialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark x-small v-on="on">Editar</v-btn>
        </template>
        <player-form :title="'Editar PDJ'" :playerToEdit="player" @savePlayer="editPlayer" />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import PlayerStatus from "./PlayerStatus.vue";
import PlayerConditions from "./PlayerConditions.vue";
import PlayerForm from "./PlayerForm";
import ConfirmationDialog from "../ConfirmationDialog";

export default {
  components: {
    PlayerStatus,
    PlayerConditions,
    PlayerForm,
    ConfirmationDialog
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
    editPlayer(player) {
      this.editdialog = false;
      this.$emit("editPlayer", player);
    },
    removePlayer(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removePlayer", this.player);
      }
    }
  }
};
</script>