<template>
  <v-card class="my-2" max-width="274">
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn text icon pink v-on="on">
            <v-icon>fa-times</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover PDJ?'"
          :text="`O Personagem ${player.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removePlayer"
        />
      </v-dialog>
    </v-card-actions>
    <v-img
      height="150"
      contain
      src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/lou_devole.jpg"
    ></v-img>

    <v-card-title>{{player.nome}}</v-card-title>
    <v-card-subtitle>{{player.raca}} / {{player.classe}}</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.nivel"
            type="number"
            label="Nível"
            outlined
            dense
            prepend-icon="fa-bolt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.percepcao"
            type="number"
            label="PER"
            outlined
            dense
            prepend-icon="fa-eye"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.ca"
            type="number"
            label="CA"
            outlined
            dense
            prepend-icon="fa-shield-alt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.investigacao"
            type="number"
            label="INV"
            outlined
            dense
            prepend-icon="fa-search"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.pv"
            type="number"
            label="PV"
            outlined
            dense
            prepend-icon="fa-heart"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.intuicao"
            type="number"
            label="INT"
            outlined
            dense
            prepend-icon="fa-lightbulb"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    
  </v-card>
</template>


<script>
//import PlayerStatus from "./PlayerStatus.vue";
//import PlayerConditions from "./PlayerConditions.vue";
//import PlayerForm from "./PlayerForm";
import ConfirmationDialog from "../template/ConfirmationDialog";

export default {
  components: {
    //PlayerStatus,
    //PlayerConditions,
    //PlayerForm,
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
    removePlayer(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removePlayer", this.player);
      }
    }
  }
};
</script>