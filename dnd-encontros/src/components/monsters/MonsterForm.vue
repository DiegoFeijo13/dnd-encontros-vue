<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-container fluid>
          <v-row dense>
            <v-col>
              <v-text-field v-model="monster.img" label="Imagem" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-text-field v-model="monster.nome" label="Nome" outlined dense required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="monster.tipo" label="Tipo" outlined dense required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="monster.alinhamento"
                label="Alinhamento"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>            
            <v-col>
              <v-text-field
                v-model="monster.destreza"
                type="number"
                label="Mod Des"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="monster.nd" type="number" label="ND" outlined dense required></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="monster.xp" type="number" label="XP" outlined dense required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="monster.dados"
                type="number"
                label="Nr Dados"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>

            <v-col>
              <v-select
                v-model="monster.dv"
                label="DV"
                :items="['d2','d4','d6','d8','d10','d12','d20']"
                outlined
                dense
              ></v-select>
            </v-col>

            <v-col>
              <v-text-field
                v-model="monster.pvbase"
                type="number"
                :counter="2"
                label="PV Base"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="saveMonster()">Salvar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    monsterToEdit: {},
    title: String
  },
  data() {
    return {
      monster: this.monsterToEdit,
      valid: false
    };
  },
  methods: {
    saveMonster() {
      this.$emit("saveMonster", this.monster);
      this.monster = {};
    }
  }
};
</script>