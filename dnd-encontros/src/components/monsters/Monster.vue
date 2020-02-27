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
          :title="'Remover Monstro?'"
          :text="`O Monstro ${monster.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="removeMonster"
        />
      </v-dialog>
    </v-card-actions>
    <v-img height="150" contain :src="monster.img"></v-img>

    <v-card-title>{{monster.nome}}</v-card-title>
    <v-card-subtitle>{{monster.tipo}} / {{monster.alinhamento}}</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row dense>
        <v-col lg="2">
          <strong>ND:</strong>
        </v-col>
        <v-col>{{monster.nd}} ({{monster.xp}}xp)</v-col>
      </v-row>

      <v-row dense>
        <v-col lg="2">
          <strong>PV:</strong>
        </v-col>
        <v-col>{{monster.dados}}{{monster.dv}}+{{monster.pvbase}}</v-col>
      </v-row>

      <v-row dense>
        <v-col lg="2">
          <strong>DES:</strong>
        </v-col>
        <v-col>{{monster.destreza}}</v-col>
      </v-row>
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
    monster: {}
  },
  data() {
    return {
      removedialog: false
    };
  },
  methods: {
    removeMonster(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removeMonster", this.monster);
      }
    }
  }
};
</script>