<template>
  <v-card class="my-2" max-width="274">
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn text icon pink v-on="on">
            <v-icon>fa-times</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover Encontro?'"
          :text="`O Encontro ${encounter.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removeEncounter"
        />
      </v-dialog>
    </v-card-actions>

    <v-card-title>{{encounter.nome}}</v-card-title>
    <v-card-subtitle>ND {{encounter.nd}} ({{encounter.xp}}xp)</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-list dense>
        <v-subheader>Monstros</v-subheader>
        <v-list-item v-for="(m, n) in encounter.monsters" :key="n">
            <v-list-item-content>
                <v-list-item-title>
                    {{m.num}}x{{m.monster.nome}}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>


<script>
import ConfirmationDialog from "../template/ConfirmationDialog";

export default {
  components: {
    ConfirmationDialog
  },
  props: {
    encounter: {}
  },
  data() {
    return {
      removedialog: false
    };
  },
  methods: {
    removeEncounter(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removeEncounter", this.encounter);
      }
    }
  }
};
</script>