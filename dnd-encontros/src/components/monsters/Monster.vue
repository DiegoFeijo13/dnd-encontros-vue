<template>
  <v-card class="my-2" max-width="274">
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
      <v-row dense>
        <v-col>
          <table style="width:100%;">
            <tr>
              <td class="label">ND</td>
              <td class="value">{{monster.nd}}</td>
            </tr>
            <tr>
              <td class="label">PV</td>
              <td class="value">{{monster.dados}}{{monster.dv}}+{{monster.pvbase}}</td>
            </tr>
          </table>
        </v-col>
        <v-col>
          <table style="width:100%;">
            <tr>
              <td class="label">DES</td>
              <td class="value">{{monster.destreza}}</td>
            </tr>
            <tr>
              <td class="label">XP</td>
              <td class="value">{{monster.xp}}</td>
            </tr>
          </table>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-dialog v-model="editdialog" width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon blue v-on="on">
            <v-icon>fa-edit</v-icon>
          </v-btn>
        </template>
        <MonsterForm :monsterToEdit="monster" title="Editar Monstro" @saveMonster="saveMonster" />
      </v-dialog>
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
          @confirm="removeMonster"
        />
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>


<script>
import ConfirmationDialog from "../template/ConfirmationDialog";
import MonsterForm from "./MonsterForm";

export default {
  components: {
    ConfirmationDialog,
    MonsterForm
  },
  props: {
    monster: {}
  },
  data() {
    return {
      removedialog: false,
      editdialog: false
    };
  },
  methods: {
    saveMonster() {
      this.editdialog = false;
      this.$emit("saveMonster", this.monster);
    },
    removeMonster(value) {
      this.removedialog = false;
      if (value) {
        this.$emit("removeMonster", this.monster);
      }
    }
  }
};
</script>

<style scoped>
.label {
  width: 35%;
  text-align: center;
  background-color: black;
  color: white;
}

.value {
  text-align: center;
  background-color: lightgray;
}
</style>