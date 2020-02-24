<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

    <v-card-text>
      {{text}}
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="confirm(false)">Cancelar</v-btn>
      <v-btn color="primary" text @click="confirm(true)">Ok</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    text: String,
    title: String
  },
  methods: {
    confirm(value) {
      this.$emit('confirm', value)
    }
  }
};
</script>