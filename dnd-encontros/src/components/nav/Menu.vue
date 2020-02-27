<template>  
    <v-navigation-drawer v-model="drawer" app dark absolute permanent right>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" 
        link 
        @click="$emit('nav', item.area)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
        { title: "Encontro", icon: "mdi-account-group-outline", area:"Encounters" }
      ],
      mini: true
    };
  }
};
</script>