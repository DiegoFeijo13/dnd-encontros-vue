<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Novo Monstro</v-btn>
      </template>
      <monster-form 
      :title="'Novo Monstro'" 
      :monsterToEdit="{}"
      @saveMonster="saveMonster"/>
      
    </v-dialog>
  </div>
</template>

<script>
import MonsterForm from './MonsterForm.vue'

export default {
  components: {MonsterForm},  
  data() {
    return {
      dialog: false,      
    };
  },
  methods: {
    saveMonster(monster) {      
      this.dialog = false;     
      this.$emit('saveMonster',monster) 
    }
  }
};
</script>