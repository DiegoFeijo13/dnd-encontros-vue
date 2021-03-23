<template>
 <v-card class="ma-4">
    <v-card-title>
      <span class="heading"> Encontros</span>
      <v-spacer></v-spacer>
          <AddEncounter />
    </v-card-title>
    <v-card-text> 
    <EncounterData :encounters="encounters" />

    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import EncounterData from "./EncounterData.vue";
import AddEncounter from "./AddEncounter.vue";

export default {
  components: {
    EncounterData,
    AddEncounter,
  },
  computed: mapState({
    encounters: (state) => state.encounter.all,
  }),
  created() {
    this.$store.dispatch("encounter/getAll");
  },
};
</script>