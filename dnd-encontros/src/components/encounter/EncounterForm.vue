<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card color="background">
      <v-card-title class="headline primary white--text">{{
        title
      }}</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="name"
          :counter="50"
          :rules="nameRules"
          label="Nome"
          required
          validate-on-blur
        ></v-text-field>
      </v-card-text>

      <v-card-text>
        <EncounterMonsters
          :monsters="monsters"
          :multiplier="multiplier"
          :totalXP="totalXP"
          v-on:addMons="showAddMonsterDialog = true"
          v-on:removeMonster="removeMonster($event)"
        />

        <v-dialog v-model="showAddMonsterDialog">
          <v-card>
            <v-card-title class="headline primary white--text">
              Adicionar Monstros
            </v-card-title>
            <v-card-text>
              <MonstersData
                :addBtn="true"
                :itemsPerPage="4"
                v-on:add="addMonster($event)"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                color="primary"
                v-on:click="showAddMonsterDialog = false"
                >Fechar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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
import tables from "../../api/tables.js";
import util from "../../api/util.js";
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
  data() {
    return {
      id: this.encounter.id,
      name: this.encounter.name,
      monsters: util.copyArray(this.encounter.monsters),
      valid: false,
      nameRules: [
        (v) => !!v || "Informe o Nome",
        (v) => (v && v.length <= 50) || "Limite de caracteres (50) excedido.",
      ],
      showAddMonsterDialog: false,
    };
  },
  computed: {
    totalXP: function () {
      let total = 0;
      if (this.monsters != null) {
        this.monsters.forEach((x) => {
          total += x.monster.xp * x.quantidade;
        });
      }

      return total * this.multiplier;
    },
    multiplier: function () {
      let totalMons = 0;
      if (this.monsters != null) {
        this.monsters.forEach((x) => (totalMons += x.quantidade));
      }

      return tables.getEncounterMultiplier(totalMons);
    },
  },
  methods: {
    
    addMonster(url) {
      axios.get(`http://www.dnd5eapi.co${url}`).then((response) => {
        let monster = response.data;
        if (this.monsters != null) {
          let encounterMon = this.monsters.find(
            (x) => x.monster.index == monster.index
          );
          if (encounterMon == null) {
            this.monsters.push({ monster: monster, quantidade: 1 });
          } else {
            encounterMon.quantidade += 1;
          }
        }
      });
    },
    removeMonster(monster) {
      this.monsters.splice(this.monsters.indexOf(monster), 1);
    },
    saveEncounter() {
      this.$refs.form.validate();
      let encounter = {
        id: this.id,
        name: this.name,
        monsters: this.monsters,
        xp: this.totalXP(),
      };

      this.$emit("confirm", encounter);
    },
  },
};
</script>