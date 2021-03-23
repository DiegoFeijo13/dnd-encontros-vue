<template>
  <v-card>
    <v-card-title class="headline primary white--text" primary-title>{{
      title
    }}</v-card-title>

    <v-card-text>
      
      <p>{{ text }}</p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="confirm(false)">Cancelar</v-btn>
      <v-btn color="primary" @click="confirm(true)">Ok</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    text: String,
    title: String,
  },
  methods: {
    confirm(value) {
      this.$emit("confirm", value);
    },
  },
};
</script>