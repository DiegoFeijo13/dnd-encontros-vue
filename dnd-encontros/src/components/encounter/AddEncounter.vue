<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="brown lighten-2" dark v-on="on">Novo Encontro</v-btn>
      </template>
      <EncounterForm title="Novo Encontro" @confirm="confirm"/>
      
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
    confirm(encounter) {      
      this.dialog = false;     
      this.$store.commit("encounter/add", encounter);      
    }
  }
};
</script>