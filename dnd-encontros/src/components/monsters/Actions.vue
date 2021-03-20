<template>
  <v-list-item v-if="actions.length > 0">
    <v-list-item-content class="subtitle-1 primary--text">
      <h3 class="primary--text">{{title}}</h3>
      <v-divider></v-divider>
      <p class="pa-1" v-for="(action, i) in actions" :key="i">
        <strong class="font-italic">{{ action.name }}.</strong> {{ action.desc }}
      </p>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    actions: {
      type: Array,
      required: true,
    },
  },
};
</script>