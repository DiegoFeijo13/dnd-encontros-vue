<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-row>
        <v-col>
          <h1>Encontros</h1>
        </v-col>
        <v-col lg="2" align-self="end">
          <add-encounter @saveEncounter="addEncounter" />
        </v-col>
      </v-row>
    </v-app-bar>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="(e, n) in encounters" :key="n">
          <encounter :encounter="e" @removeEncounter="removeEncounter(n)" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Encounter from "./Encounter.vue";
import AddEncounter from "./AddEncounter.vue";

export default {
  components: {
    Encounter,
    AddEncounter
  },
  data() {
    return {
      encounters: []
    };
  },
  mounted() {
    if (localStorage.getItem("encounters")) {
      try {
        this.encounters = JSON.parse(localStorage.getItem("encounters"));
      } catch (e) {
        localStorage.removeItem("encounters");
      }
    }
  },
  methods: {
    addEncounter(e) {
      this.encounters.push(e);
      this.saveEncounters();
    },
    removeEncounter(x) {
      this.encounters.splice(x, 1);
      this.saveEncounters();
    },
    saveEncounters() {
      const parsed = JSON.stringify(this.encounters);
      localStorage.setItem("encounters", parsed);
    }
  }
};
</script>