<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card class="my-2" color="#ffe599">
      <v-card-title class="headline primary white--text" primary-title>{{
        title
      }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-text-field
          v-model="nome"
          label="Nome"
          outlined
          dense
          :counter="20"
          required
          :rules="string20Rules"
          validate-on-blur
        ></v-text-field>
        <v-text-field
          v-model="classe"
          :counter="20"
          label="Classe"
          outlined
          dense
          required
          :rules="string20Rules"
          validate-on-blur
        ></v-text-field>

        <v-text-field
          v-model="raca"
          :counter="20"
          label="Raça"
          outlined
          dense
          :rules="string20Rules"
          required
          validate-on-blur
        ></v-text-field>

        <v-text-field
          v-model="nivel"
          type="number"
          :counter="2"
          label="Nível"
          outlined
          dense
          required
          validate-on-blur
          :rules="positiveNumberRules"
        ></v-text-field>

        <v-text-field
          v-model="ca"
          type="number"
          :counter="2"
          label="CA"
          outlined
          dense
          required
          validate-on-blur
          :rules="positiveNumberRules"
        ></v-text-field>

        <v-text-field
          v-model="pv"
          type="number"
          :counter="4"
          label="PV"
          outlined
          dense
          required
          validate-on-blur
          :rules="positiveNumberRules"
        ></v-text-field>

        <v-text-field
          v-model="percepcao"
          type="number"
          :counter="2"
          label="Percepção"
          outlined
          dense
          required
          validate-on-blur
          :rules="numberRules"
        ></v-text-field>

        <v-text-field
          v-model="investigacao"
          type="number"
          :counter="2"
          label="Investigação"
          outlined
          dense
          required
          validate-on-blur
          :rules="numberRules"
        ></v-text-field>

        <v-text-field
          v-model="intuicao"
          type="number"
          :counter="2"
          label="Intuição"
          outlined
          dense
          required
          validate-on-blur
          :rules="numberRules"
        ></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary" block @click="confirm()"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: {
    playerToEdit: Object,
    title: String,
  },
  data() {
    return {
      id: this.playerToEdit.id,
      nome: this.playerToEdit.nome,
      classe: this.playerToEdit.classe,
      raca: this.playerToEdit.raca,
      nivel: this.playerToEdit.nivel,
      ca: this.playerToEdit.ca,
      pv: this.playerToEdit.pv,
      percepcao: this.playerToEdit.percepcao,
      investigacao: this.playerToEdit.investigacao,
      intuicao: this.playerToEdit.intuicao,
      valid: false,
      string20Rules: [
        (v) => !!v || "Obrigatório",
        (v) => (v && v.length <= 20) || "Limite de caracteres excedido.",
      ],
      string10Rules: [
        (v) => !!v || "Obrigatório",
        (v) => (v && v.length <= 10) || "Limite de caracteres excedido.",
      ],
      positiveNumberRules: [
        (v) => (v && !isNaN(v)) || "Informe um número",
        (v) => (v && v >= 0 && v < 1000) || "Valor inválido",
      ],
      numberRules: [
        (v) => (v && !isNaN(v)) || "Informe um número",
        (v) => (v && v > -1000 && v < 1000) || "Valor inválido",
      ],
    };
  },
  methods: {
    confirm() {
      this.$refs.form.validate();
      let player = {
        id: this.id,
        nome: this.nome,
        classe: this.classe,
        raca: this.raca,
        nivel: this.nivel,
        ca: this.ca,
        pv: this.pv,
        percepcao: this.percepcao,
        investigacao: this.investigacao,
        intuicao: this.intuicao,
      };
      this.$emit("confirm", player);
      this.$refs.form.reset();
    },
  },
};
</script>