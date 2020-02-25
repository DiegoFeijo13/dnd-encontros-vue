<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-container fluid>
          <v-text-field v-model="monster.nome" label="Nome" outlined dense required></v-text-field>

          <v-text-field v-model="monster.tipo" label="Tipo" outlined dense required></v-text-field>

          <v-text-field v-model="monster.alinhamento" label="Alinhamento" outlined dense required></v-text-field>

          <v-text-field
            v-model="monster.dados"
            type="number"
            label="Nr Dados"
            outlined
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="monster.dv"
            type="number"
            label="DV"
            outlined
            dense
            required
            prepend-icon="fa-shield-alt"
          ></v-text-field>

          <v-text-field
            v-model="monster.pvbase"
            type="number"
            :counter="2"
            label="PV Base"
            outlined
            dense
            required
            prepend-icon="fa-heart"
          ></v-text-field>

          <v-text-field
            v-model="monster.destreza"
            type="number"
            :counter="2"
            label="Mod Destreza"
            outlined
            dense
            required
            prepend-icon="fa-eye"
          ></v-text-field>
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