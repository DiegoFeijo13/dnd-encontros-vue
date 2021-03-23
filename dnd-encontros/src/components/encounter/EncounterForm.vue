<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-title class="headline primary white--text">{{
        title
      }}</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="encounter.name"
          :counter="50"
          :rules="nameRules"
          label="Nome"
          required
          validate-on-blur
        ></v-text-field>
      </v-card-text>

      <v-card-text>
        <v-row>
          <v-col cols="4">
            <EncounterMonsters
              :monsters="encounter.monsters"
              :multiplier="multiplier()"
              :totalXP="totalXP()"
            />
          </v-col>
          <v-col cols="8">
            <MonstersData
              :addBtn="true"
              :itemsPerPage="4"
              v-on:add="addMonster($event)"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary" block @click="saveEncounter()"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import tables from "../../api/tables.js";
import EncounterMonsters from "./EncounterMonsters.vue";
import MonstersData from "../monsters/MonstersData.vue";

export default {
  components: { EncounterMonsters, MonstersData },
  props: {
    title: {
      type: String,
      required: true,
    },
    encounter: {
      type: Object,
      default() {
        return {
          name: "",
          monsters: [],
          xp: 0,
        };
      },
    },
  },
  computed: mapState({
    players: (state) => state.player.all,
  }),
  data: () => ({
    valid: false,    
    nameRules: [
      (v) => !!v || "Informe o Nome",
      (v) => (v && v.length <= 50) || "Limite de caracteres (50) excedido.",
    ],
  }),
  methods: {
    multiplier() {
      let totalMons = 0;
      if (this.encounter.monsters != null) {
        this.encounter.monsters.forEach((x) => (totalMons += x.quantidade));
      }

      return tables.getEncounterMultiplier(totalMons);
    },
    totalXP() {
      let total = 0;
      if (this.encounter.monsters != null) {
        this.encounter.monsters.forEach((x) => {
          total += x.monster.xp * x.quantidade;
        });
      }

      return total * this.multiplier();
    },
    addMonster(url) {
      axios.get(`http://www.dnd5eapi.co${url}`).then((response) => {
        let monster = response.data;
        if (this.encounter.monsters != null) {
          let encounterMon = this.encounter.monsters.find(
            (x) => x.monster.index == monster.index
          );
          if (encounterMon == null) {
            this.encounter.monsters.push({ monster: monster, quantidade: 1 });
          } else {
            encounterMon.quantidade += 1;
          }
        }
      });
    },
    saveEncounter() {
      this.$refs.form.validate();
      this.encounter.xp = this.totalXP();
      this.$emit("confirm", this.encounter);
      this.$refs.form.reset();
    },
  },
};
</script>