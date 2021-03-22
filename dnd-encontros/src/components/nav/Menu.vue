<template>
  <v-navigation-drawer v-model="drawer" app dark left>
    <v-list dense>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            alt="Jepo Logo"
            class="shrink mr-2"
            contain
            src="https://raw.githubusercontent.com/DiegoFeijo13/jepo-rpg-images/master/jeporpg-hollow.png"
            transition="scale-transition"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <h2>Gerenciador</h2>
          </v-list-item-title>
          <v-list-item-subtitle>de Encontros</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item.title" link @click="$emit('nav', item.area)">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <v-footer    
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Jepo</strong>
      </v-col>
    </v-footer>
  </v-navigation-drawer>
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