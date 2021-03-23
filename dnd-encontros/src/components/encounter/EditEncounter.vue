<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>fa-edit</v-icon>
        </v-btn>
      </template>
      <EncounterForm title="Editar Encontro" :encounter="encounter" @confirm="confirm"/>
      
    </v-dialog>
  </div>
</template>

<script>
import EncounterForm from './EncounterForm.vue'

export default {
  components: {EncounterForm},  
  props:{
    encounter:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,      
    };
  },
  methods: {
    confirm(encounter) {      
      this.dialog = false;     
      this.$store.commit("encounter/update", encounter);
    }
  }
};
</script>