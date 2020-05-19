<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-row>
        <v-col>
          <h1>Monstros</h1>
        </v-col>
        <v-col lg="2" align-self="end">
          <add-monster @saveMonster="addMonster" />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="(m, n) in monsters" :key="n">
          <monster :monster="m" @removeMonster="removeMonster(n)" @saveMonster="saveMonsters()" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Monster from "./Monster.vue";
import AddMonster from "./AddMonster.vue";

export default {
  components: {
    Monster,
    AddMonster
  },
  data() {
    return {
      monsters: []
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
    addMonster(monster) {
      this.monsters.push(monster);
      this.saveMonsters();
    },
    removeMonster(x) {
      this.monsters.splice(x, 1);
      this.saveMonsters();
    },
    saveMonsters() {
      const parsed = JSON.stringify(this.monsters);
      localStorage.setItem("monsters", parsed);
    }
  }
};
</script>