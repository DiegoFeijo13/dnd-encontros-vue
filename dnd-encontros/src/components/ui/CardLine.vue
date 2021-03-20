<template>
  <div>
    <strong>{{ title }}</strong> {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
};
</script>
