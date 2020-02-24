<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Novo PDJ</v-btn>
      </template>
      <player-form 
      :title="'Novo PDJ'" 
      :playerToEdit="{}"
      @savePlayer="savePlayer"/>
      
    </v-dialog>
  </div>
</template>

<script>
import PlayerForm from './PlayerForm.vue'

export default {
  components: {PlayerForm},  
  data() {
    return {
      dialog: false,      
    };
  },
  methods: {
    savePlayer(player) {      
      this.dialog = false;     
      this.$emit('savePlayer',player) 
    }
  }
};
</script>