<template>
  <div>
    <v-subheader>Personagens</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nível</th>
            <th class="text-left">Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pdj in pdjs" :key="pdj.nome">
            <td>{{ pdj.nivel }}</td>
            <td>{{ pdj.nome }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    pdjs: {
      type: Array,
      required: true,
    },
  },
};
</script>