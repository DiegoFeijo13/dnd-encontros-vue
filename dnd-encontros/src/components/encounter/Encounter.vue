<template>
  <v-card class="my-2" max-width="274">
    <v-card-title>{{encounter.name}}</v-card-title>
    <v-card-subtitle>ND {{encounter.nd}} ({{encounter.xp}}xp)</v-card-subtitle>
    <v-card-actions>
      <v-btn>
        <v-icon>fa-edit</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>fa-eye</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-dialog v-model="addEMDialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-plus</v-icon>
          </v-btn>
        </template>
        <add-encounter-monster @confirm="addEncounterMonster" />
      </v-dialog>
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover Encontro?'"
          :text="`O Encontro ${encounter.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removeEncounter"
        />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import AddEncounterMonster from "./AddEncounterMonster";
import ConfirmationDialog from "../template/ConfirmationDialog";

export default {
  components: {
    AddEncounterMonster,
    ConfirmationDialog
  },
  props: {
    encounter: Object
  },
  data() {
    return {
      removedialog: false,
      addEMDialog: false
    };
  },
  methods: {
    calculateXP() {
      //Determinar limites de xp por personagem
      
      let xp = 0;
      this.encounter.monsters.forEach(m => {
        xp += parseInt(m.monster.xp);
      });
      this.encounter.xp = xp;
    },
    removeEncounter(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removeEncounter", this.encounter);
      }
    },
    addEncounterMonster(value) {
      this.addEMDialog = false;
      if (value) {
        this.encounter.monsters.push(value);
        this.calculateXP();
      }
    },    
  }
};
</script>