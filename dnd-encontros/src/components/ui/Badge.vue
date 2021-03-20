<template>
  <v-badge bordered overlap bottom :content="title">
    <v-avatar tile size="40" color="grey darken-4 white--text">
      <span class="text-overline">{{ text }}</span>
    </v-avatar>
  </v-badge>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>
