<template>
  <v-card class="my-2">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <v-img :src="monster.img"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{monster.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{monster.tipo}} / {{monster.alinhamento}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <table>
        <thead>
          <tr>
            <th>ND</th>
            <th>PV</th>
            <th>DES</th>
            <th>XP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="value">{{monster.nd}}</td>
            <td class="value">{{monster.dados}}{{monster.dv}}+{{monster.pvbase}}</td>
            <td class="value">{{monster.destreza}}</td>
            <td class="value">{{monster.xp}}</td>
          </tr>
        </tbody>
      </table>
    </v-card-text>

    <v-card-actions>
      <edit-monster-dialog :monsterToEdit="monster" />
      <v-spacer></v-spacer>
      <v-dialog v-model="removedialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>fa-trash</v-icon>
          </v-btn>
        </template>
        <ConfirmationDialog
          :title="'Remover Monstro?'"
          :text="`O Monstro ${monster.nome} será removido. Esta ação não pode ser desfeita. Confirmar?`"
          @confirm="remove"
        />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import ConfirmationDialog from "../template/ConfirmationDialog";
import EditMonsterDialog from "./EditMonsterDialog";

export default {
  components: {
    ConfirmationDialog,
    EditMonsterDialog
  },
  props: {
    monster: Object
  },
  data() {
    return {
      removedialog: false,
    };
  },
  methods: {
    remove(value) {
      this.removedialog = false;
      if (value) {
        this.$store.commit("monster/remove", this.monster);
      }
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
table th {
  text-align: center;
  background-color: black;
  color: white;
}

table td {
  text-align: center;
  background-color: lightgray;
}
</style>