<template>
  <div class="playerstatus">
    <v-tooltip top v-for="s in status" :key="s">
      <template v-slot:activator="{ on }">
        <v-chip label class="ma-2" v-on="on">
          <v-avatar left>
            <v-icon>{{s.icon}}</v-icon>
          </v-avatar>
          {{s.valor}}
        </v-chip>
      </template>
      <span>{{s.desc}}</span>
    </v-tooltip>
  </div>
</template>


<script>
export default {
  props: {
    status: {}
  }
};
</script>

<style scoped>
.playerstatus{
    align-content: flex-end;
}
</style>