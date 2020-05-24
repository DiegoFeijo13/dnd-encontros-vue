<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>{{title}}</v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-row dense>
            <v-col>
              <v-text-field v-model="img" label="Imagem" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <v-text-field
                v-model="nome"
                label="Nome"
                outlined
                dense
                required
                :counter="20"
                :rules="string20Rules"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="tipo"
                label="Tipo"
                outlined
                dense
                required
                :counter="20"
                :rules="string20Rules"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="alinhamento"
                label="Alinhamento"
                outlined
                dense
                required
                :counter="20"
                :rules="string20Rules"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col>
              <v-text-field
                v-model="destreza"
                type="number"
                label="Mod Des"
                outlined
                dense
                required
                :rules="numberRules"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="nd"
                type="number"
                label="ND"
                outlined
                dense
                required
                :rules="positiveNumberRules"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="xp"
                type="number"
                label="XP"
                outlined
                dense
                required
                :rules="positiveNumberRules"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="dados"
                type="number"
                label="Nr Dados"
                outlined
                dense
                required
                :rules="positiveNumberRules"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-select
                v-model="dv"
                label="DV"
                :items="['d2','d4','d6','d8','d10','d12','d20']"
                outlined
                dense
                required
              ></v-select>
            </v-col>

            <v-col>
              <v-text-field
                v-model="pvbase"
                type="number"
                :counter="2"
                label="PV Base"
                outlined
                dense
                required
                :rules="positiveNumberRules"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="confirm()">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: {
    monsterToEdit: Object,
    title: String
  },
  data() {
    return {
      id: this.monsterToEdit.id,
      img: this.monsterToEdit.img,
      nome: this.monsterToEdit.nome,
      tipo: this.monsterToEdit.tipo,
      alinhamento: this.monsterToEdit.alinhamento,
      destreza: this.monsterToEdit.destreza,
      nd: this.monsterToEdit.nd,
      xp: this.monsterToEdit.xp,
      dados: this.monsterToEdit.dados,
      dv: this.monsterToEdit.dv,
      pvbase: this.monsterToEdit.pvbase,
      valid: false,
      string20Rules: [
        v => !!v || "Obrigatório",
        v => (v && v.length <= 20) || "Limite de caracteres excedido."
      ],
      positiveNumberRules: [
        v => (v && !isNaN(v)) || "Informe um número",
        v => (v && v >= 0 && v < 1000) || "Valor inválido"
      ],
      numberRules: [
        v => (v && !isNaN(v)) || "Informe um número",
        v => (v && v > -1000 && v < 1000) || "Valor inválido"
      ]
    };
  },
  methods: {
    confirm() {
      this.$refs.form.validate();
      let monster = {
        id: this.id,
        img: this.img,
        nome: this.nome,
        tipo: this.tipo,
        alinhamento: this.alinhamento,
        destreza: this.destreza,
        nd: this.nd,
        xp: this.xp,
        dados: this.dados,
        dv: this.dv,
        pvbase: this.pvbase
      };
      this.$emit("confirm", monster);
      this.$refs.form.reset();
    }
  }
};
</script>