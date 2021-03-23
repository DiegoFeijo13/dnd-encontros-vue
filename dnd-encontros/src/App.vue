<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <Menu @nav="nav"></Menu>

    <v-main>
      <component :is="componente" />
    </v-main>
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
    Menu,
  },

  data: () => ({
    componente: "Players",
    title: "",
  }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  methods: {
    nav(value) {
      this.componente = value;
    },
    changeTitle(n) {
      this.title = n;
    },
  },
};
</script>

<style>
#app {
  background: url('https://img.wallpapersafari.com/desktop/1920/1080/85/95/hEk5Zj.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>