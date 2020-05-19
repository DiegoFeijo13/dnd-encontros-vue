<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>Editar {{player.nome}}</v-card-title>

    <v-card-text>
      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.nivel"
            type="number"
            label="Nível"
            outlined
            dense
            prepend-icon="fa-bolt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.percepcao"
            type="number"
            label="PER"
            outlined
            dense
            prepend-icon="fa-eye"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.ca"
            type="number"
            label="CA"
            outlined
            dense
            prepend-icon="fa-shield-alt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.investigacao"
            type="number"
            label="INV"
            outlined
            dense
            prepend-icon="fa-search"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            v-model="player.pv"
            type="number"
            label="PV"
            outlined
            dense
            prepend-icon="fa-heart"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="player.intuicao"
            type="number"
            label="INT"
            outlined
            dense
            prepend-icon="fa-lightbulb"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>      
      <v-btn color="primary" text @click="confirm(true)">Ok</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    player: {}
  },
  methods: {
    confirm(value) {
      this.$emit("confirm", value);
    }
  }
};
</script>