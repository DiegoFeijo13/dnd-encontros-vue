<template>
  <v-list-item-subtitle>
    <strong>{{ title }}</strong> {{ text }}
  </v-list-item-subtitle>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>
