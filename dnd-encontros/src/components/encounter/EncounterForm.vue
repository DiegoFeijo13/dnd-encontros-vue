<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>Novo Encontro</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-container fluid>
          <v-text-field v-model="encounter.nome" label="Nome" outlined dense required></v-text-field>

          <v-row>
            <v-col lg="2">
              <v-text-field
                v-model="newMonster.multiplier"
                type="number"
                label="Num"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select 
              v-model="newMonster.monster" 
              :items="monsters" 
              item-text="nome"></v-select>
            </v-col>
            <v-col lg="2">
              <v-btn color="primary" fab small >
              <v-icon @click="addMonster">fa-plus</v-icon>
            </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <v-list>
        <v-list-item v-for="(m, n) in encounterMonsters" :key="n">
            <v-list-item-content>
                <v-list-item-title>
                    {{m.multiplier}}x{{m.monster.nome}}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="saveEncounter()">Salvar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      encounter: {},
      monsters: [],
      newMonster: { monster: {}, multiplier: 0 },
      encounterMonsters: [],
      valid: false
    };
  },
  mounted() {
    if (localStorage.getItem("monsters")) {
      try {
        this.monsters = JSON.parse(localStorage.getItem("monsters"));
      } catch (e) {
        localStorage.removeItem("monsters");
      }
    }
  },
  methods: {
    saveEncounter() {
      this.$emit("saveEncounter", this.encounter);
      this.encounter = {};
    },
    addMonster(){
      this.encounterMonsters.push(this.newMonster)
      this.newMonster = { monster: {}, multiplier: 0 }
    }
  }
};
</script>