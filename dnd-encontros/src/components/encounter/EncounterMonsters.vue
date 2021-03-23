<template>
  <v-card>
    <v-card-title>Monstros no Encontro</v-card-title>
    <v-card-subtitle v-if="multiplier > 1">Multiplicador por quantidade: {{multiplier}}</v-card-subtitle>
    <v-card-text>
      <v-simple-table
        v-if="monsters != null && monsters != undefined && monsters.length > 0"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th>Monstro</th>
              <th>Exp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="monster in monsters" :key="monster.monster.name">
              <td>{{ monster.quantidade }}x {{ monster.monster.name }}</td>
              <td>{{ monster.monster.xp * monster.quantidade }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{{ totalXP }}</td>
            </tr>
          </tfoot>
        </template>
      </v-simple-table>
      <v-alert
        v-else
        border="left"
        colored-border
        color="primary"
        elevation="2"
      >
        Escolha ao lado os monstros deste encontro
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {},
  props: {
    monsters: {
      type: Array,
      required: true,
    },
    multiplier:{
      type: Number,
      required: true,
    },
    totalXP:{
      type:Number,
      required: true
    }
  },
};
</script>