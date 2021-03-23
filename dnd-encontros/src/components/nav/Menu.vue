<template>
<div>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>
          <v-img
            alt="Jepo Logo"
            class="shrink mr-2"
            contain
            max-height="50px"
            src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/jeporpg-hollow.png"
            transition="scale-transition"
          />
    </v-toolbar-title>
    <v-divider vertical class="mx-4"></v-divider>
    <span class="subheading">Gerenciador de Encontros</span>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in items" :key="item.title" @click="$emit('nav',item.area)">
        {{item.title}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "PDJs", icon: "mdi-home-city", area: "Players" },
        { title: "Monstros", icon: "mdi-account", area: "Monsters" },
        {
          title: "Encontros",
          icon: "mdi-account-group-outline",
          area: "Encounters"
        }
      ],
      mini: true
    };
  }
};
</script>