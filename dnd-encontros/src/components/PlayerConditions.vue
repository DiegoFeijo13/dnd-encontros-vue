<template>
  <v-combobox
    v-model="items"
    :items="condicoes"
    chips
    clearable
    label="Condições"
    multiple
    solo
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>
      </v-chip>
    </template>
  </v-combobox>
</template>


<script>
export default {
  data() {
    return {
      condicoes: [
        "Agarrado",
        "Amedrontado",
        "Atordoado",
        "Caído",
        "Cego",
        "Enfeitiçado",
        "Envenenado",
        "Impedido",
        "Incapacitado",
        "Inconsciente",
        "Invisível",
        "Paralisado",
        "Petrificado",
        "Surdo"
      ],
      items: []
    };
  }
};
</script>