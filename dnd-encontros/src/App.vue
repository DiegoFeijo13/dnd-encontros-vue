<template>
  <v-app>
    <Menu @nav="nav"></Menu>

    <v-content>
      <component :is="componente" />
    </v-content>

    
  </v-app>
</template>

<script>
import Players from "./components/players/Players";
import Monsters from "./components/monsters/Monsters";
import Encounters from "./components/encounter/Encounters";
import Menu from "./components/nav/Menu";

export default {
  name: "App",

  components: {
    Players,
    Monsters,
    Encounters,
    Menu
  },

  data: () => ({
    componente: "Players",
    title: ""
  }),

  methods: {
    nav(value) {
      this.componente = value;
    },
    changeTitle(n) {
      this.title = n;
    }
  }
};
</script>
