<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Novo Encontro</v-btn>
      </template>
      <encounter-form @saveEncounter="saveEncounter"/>
      
    </v-dialog>
  </div>
</template>

<script>
import EncounterForm from './EncounterForm.vue'

export default {
  components: {EncounterForm},  
  data() {
    return {
      dialog: false,      
    };
  },
  methods: {
    saveEncounter(encounter) {      
      this.dialog = false;     
      this.$emit('saveEncounter',encounter) 
    }
  }
};
</script>