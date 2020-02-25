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
    <v-img
      height="150"
      contain
      src="https://i.pinimg.com/564x/4f/c2/87/4fc287088a5ffe51c2baa2c6bf98e745.jpg"
    ></v-img>

    <v-card-title>{{monster.nome}}</v-card-title>
    <v-card-subtitle>{{monster.tipo}} / {{monster.alinhamento}}</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row dense>
        <v-col>
          <v-text-field
            v-model="monster.dv"
            type="number"
            label="Nível"
            outlined
            dense
            prepend-icon="fa-bolt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="monster.dados"
            type="number"
            label="Nr Dados"
            outlined
            dense
            prepend-icon="fa-eye"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col>
          <v-text-field
            v-model="monster.pvbase"
            type="number"
            label="PV Base"
            outlined
            dense
            prepend-icon="fa-shield-alt"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="monster.destreza"
            type="number"
            label="Mod Destreza"
            outlined
            dense
            prepend-icon="fa-search"
          ></v-text-field>
        </v-col>
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
      removedialog: false,
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