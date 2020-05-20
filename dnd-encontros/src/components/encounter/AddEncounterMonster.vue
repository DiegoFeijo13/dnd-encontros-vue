<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Adicionar monstro</v-card-title>

      <v-card-text>
        <v-select v-model="selected" :items="items">
          <template slot="selection" slot-scope="data">
            <monster-avatar :monsterToShow="data.item.value" />
          </template>
          <template slot="item" slot-scope="data">
            <monster-avatar :monsterToShow="data.item.value" />
          </template>
        </v-select>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="primary" text @click="add()">Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import MonsterAvatar from "../monsters/MonsterAvatar";
export default {
  components: { MonsterAvatar },
  data: () => ({
    valid: true,
    selected: Object,
    items: []
  }),
  methods: {
    add() {
      let encounterMonster = { monster: this.selected, amount: 1 };
      this.$emit("confirm", encounterMonster);
    }
  },
  mounted() {
    if (localStorage.getItem("monsters")) {
      try {
        let monsters = JSON.parse(localStorage.getItem("monsters"));
        monsters.forEach(m => {
          this.items.push({ text: m.nome, value: m });
        });
      } catch (e) {
        localStorage.removeItem("monsters");
      }
    }
  }
};
</script>