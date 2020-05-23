<template>
  <v-form v-model="valid">
        <v-container>
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.nome"                
                :counter="20"
                label="Nome"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.classe"                
                :counter="10"
                label="Classe"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.raca"                
                :counter="10"
                label="Raça"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.nivel"
                type="number"
                :counter="2"
                label="Nível"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.ca"
                type="number"
                :counter="2"
                label="CA"
                outlined
                dense
                required                
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.pv"
                type="number"
                :counter="2"
                label="PV"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.percepcao"
                type="number"
                :counter="2"
                label="Percepção"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.investigacao"
                type="number"
                :counter="2"
                label="Investigação"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="player.intuicao"
                type="number"
                :counter="2"
                label="Intuição"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
</template>

<script>
export default {
  props: {
    playerToEdit: {},
    title: String
  },
  data() {
    return {
      player: this.playerToEdit,
      valid: false,      
    };
  }
};
</script>