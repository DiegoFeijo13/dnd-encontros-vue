<template>
  <div class="text-center">
    <v-dialog v-model="dialog" fullscreen>
      <template v-slot:activator="{ on }">
        <v-btn color="brown lighten-2" dark v-on="on">Novo Encontro</v-btn>
      </template>
      <encounter-form title="Novo Encontro" @saveEncounter="saveEncounter"/>
      
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