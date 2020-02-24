<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

    <v-card-text>
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
                prepend-icon="fa-shield-alt"
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
                prepend-icon="fa-heart"
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
                prepend-icon="fa-eye"
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
                prepend-icon="fa-search"
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
                prepend-icon="fa-lightbulb"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="savePlayer()">Salvar</v-btn>
    </v-card-actions>
  </v-card>
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
  },
  methods: {
    savePlayer() {
      this.$emit('savePlayer', this.player)
      this.player = {}
    }
  }
};
</script>