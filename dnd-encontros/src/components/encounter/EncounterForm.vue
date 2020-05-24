<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nome"
          required
          validate-on-blur
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary" text @click="saveEncounter()">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: {
    title: String
  },
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Informe o Nome",
      v => (v && v.length <= 10) || "Limite de caracteres (10) excedido."
    ]
  }),
  methods: {
    saveEncounter() {
      this.$refs.form.validate();
      let encounter = { name: this.name, monsters: [] };
      this.$emit("saveEncounter", encounter);
      this.$refs.form.reset();
    }
  }
};
</script>