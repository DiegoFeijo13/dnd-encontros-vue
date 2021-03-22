<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card >
      <v-card-title class="headline primary white--text">{{
        title
      }}</v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="4" >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nome"
              required
              validate-on-blur
            ></v-text-field>
            <EncounterPDJs :pdjs="pdjs" />
          </v-col>
          <v-col cols="8">
            
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary" text @click="saveEncounter()"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import EncounterPDJs from "./EncounterPDJs.vue";

export default {
  components: { EncounterPDJs },
  props: {
    title: String,
  },
  computed: mapState({
    players: (state) => state.player.all,
  }),
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Informe o Nome",
      (v) => (v && v.length <= 10) || "Limite de caracteres (10) excedido.",
    ],
    pdjs: [],
    monsters: [],
    nivelDificuldade: 0,
    xp: 0,
  }),
  mounted() {
    this.pdjs = this.players;
  },
  methods: {
    saveEncounter() {
      this.$refs.form.validate();
      let encounter = { name: this.name, monsters: [] };
      this.$emit("saveEncounter", encounter);
      this.$refs.form.reset();
    },
  },
};
</script>