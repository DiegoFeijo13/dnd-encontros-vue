<template>
  <v-card class="my-2" color="background">
    <v-card-title>{{encounter.name}}</v-card-title>
    <v-card-subtitle>{{encounter.xp}}xp</v-card-subtitle>
    <v-card-actions>
     <EditEncounter :encounter="encounter"/>
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover Encontro?'"
          :text="`O Encontro ${encounter.name} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removeEncounter"
        />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import ConfirmationDialog from "../template/ConfirmationDialog";
import EditEncounter from "./EditEncounter.vue"

export default {
  components: {
    ConfirmationDialog,
    EditEncounter
  },
  props: {
    encounter: Object
  },
  data() {
    return {
      removedialog: false,      
    };
  },
  methods: {    
    removeEncounter(value) {
      this.removedialog = false;
      if (value) {
        this.$store.commit("encounter/remove", this.encounter);
      }
    },
  }
};
</script>