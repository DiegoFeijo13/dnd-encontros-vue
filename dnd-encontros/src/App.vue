<template>
  <v-app>
    <Menu @nav="nav"></Menu>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Jepo Logo"
          class="shrink mr-2"
          contain
          src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/jeporpg-hollow.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Gerenciador de Encontros</h1>
      </div>      
    </v-app-bar>

    <v-content>
      <component :is="componente"/>      
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Players from "./components/players/Players";
import Monsters from "./components/monsters/Monsters"
import Menu from "./components/nav/Menu";

export default {
  name: "App",

  components: {    
    Players,
    Monsters,
    Menu
  },

  data: () => ({
    componente: "Players"
  }),

  methods: {
    nav(value){      
      this.componente = value;
    }
  }
};
</script>
