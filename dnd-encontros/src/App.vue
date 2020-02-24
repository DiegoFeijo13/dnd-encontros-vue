<template>
  <v-app>
    <Menu></Menu>

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
      
        <Players />
      
      <!-- <HelloWorld/> -->
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Players from "./components/players/Players";
import Menu from "./components/nav/Menu";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Players,
    Menu
  },

  data: () => ({
    //
  })
};
</script>
