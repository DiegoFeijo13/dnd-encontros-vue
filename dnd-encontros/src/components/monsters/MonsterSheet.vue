<template>
  <v-card class="my-2" color="#ffe599">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline primary--text">
          {{ monster.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-capitalize font-italic primary--text">
          {{ monster.type }} {{ monster.subtype }} {{ monster.size }},
          {{ monster.alignment }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-list-item>
      <v-list-item-content class="primary--text">
        <CardLine
          :title="'Classe de Armadura'"
          :text="monster.armor_class.toString()"
        />
        <CardLine :title="'Pontos de Vida'" :text="pvToText()" />
        <CardLine :title="'Deslocamento'" :text="speedToText()" />
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-list-item>
      <v-list-item-content>
        <Attributes :monster="monster" />
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-list-item>
      <v-list-item-content class="primary--text">
          <CardLine
          v-if="
            monster.damage_vulnerabilities != null &&
            monster.damage_vulnerabilities.length > 0
          "
          :title="'Vulnerabilidades'"
          :text="arrayToString(monster.damage_vulnerabilities)"
        />
        <CardLine
          v-if="
            monster.damage_resistances != null &&
            monster.damage_resistances.length > 0
          "
          :title="'Resistência a Dano'"
          :text="arrayToString(monster.damage_resistances)"
        />
        <CardLine
          v-if="
            monster.damage_immunities != null &&
            monster.damage_immunities.length > 0
          "
          :title="'Imunidade a Dano'"
          :text="arrayToString(monster.damage_immunities)"
        />
        <CardLine
          v-if="
            monster.condition_immunities != null &&
            monster.condition_immunities.length > 0
          "
          :title="'Imunidade a Condição'"
          :text="conditionImmunities()"
        />
        <CardLine
          v-if="savingThrows() != null"
          :title="'Testes de Resistência'"
          :text="savingThrows()"
        />
        <CardLine
          v-if="skills() != null"
          :title="'Perícias'"
          :text="skills()"
        />
        <CardLine
          v-if="senses() != null"
          :title="'Sentidos'"
          :text="senses()"
        />
        <CardLine
          v-if="monster.languages != undefined && monster.languages.length > 0"
          :title="'Idiomas'"
          :text="monster.languages"
        />
        <CardLine :title="'Nível de Desafio'" :text="ndToText()" />
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-4"></v-divider>

    <v-list-item>
      <v-list-item-content class="subtitle-1 primary--text">
        <p class="pa-1" v-for="(sa, i) in monster.special_abilities" :key="i">
          <strong class="font-italic">{{ sa.name }}.</strong> {{ sa.desc }}
        </p>
      </v-list-item-content>
    </v-list-item>

    <Actions
      v-if="monster.actions != undefined && monster.actions.length > 0"
      :actions="monster.actions"
      :title="'Ações'"
    />
    <Actions
      v-if="
        monster.legendary_actions != undefined &&
        monster.legendary_actions.length > 0
      "
      :actions="monster.legendary_actions"
      :title="'Ações Lendárias'"
    />
  </v-card>
</template>

<script>
import Attributes from "./Attributes.vue";
import Actions from "./Actions.vue";
import CardLine from "../ui/CardLine.vue";
import translator from "../../api/translator";
import util from "../../api/util";

export default {
  components: {
    Actions,
    Attributes,
    CardLine,
  },
  props: {
    monster: {
      type: Object,
      required: true,
    },
  },
  methods: {
    pvToText() {
      return `${this.monster.hit_dice}+${this.monster.hit_points}`;
    },
    ndToText() {
      return `${util.numToFractionString(this.monster.challenge_rating)} (${
        this.monster.xp
      } XP)`;
    },
    speedToText() {
      let text = "";
      let deslocamento = translator.translateSpeed(this.monster.speed);
      deslocamento.forEach((x) => {
        let append = `${x.descricao} ${x.valor} m`;
        if (text == "") {
          text = append;
        } else {
          text = `${text}, ${append}`;
        }
      });

      return text;
    },
    arrayToString(value) {
      if (value == null || value == undefined || value.length == 0) return null;

      let text = "";
      value.forEach((x) => {
        if (text == "") text = x;
        else text = `${text}; ${x}`;
      });

      return text;
    },
    conditionImmunities() {
      let conditions = this.monster.condition_immunities;
      if (
        conditions == null ||
        conditions == undefined ||
        conditions.length == 0
      )
        return null;

      let text = "";
      conditions.forEach((x) => {
        let t = translator.translateCondition(x.index);
        if (text == "") {
          text = t;
        } else {
          text = `${text}, ${t}`;
        }
      });

      return text
    },
    savingThrows() {
      let sts = this.monster.proficiencies.filter((x) =>
        x.proficiency.index.includes("saving-throw")
      );

      if (sts == null || sts == undefined || sts.length == 0) {
        return null;
      }

      let text = "";
      sts.forEach((s) => {
        let att = translator.translateAttribute(s.proficiency.index);
        let t = `${att} ${s.value > 0 ? `+${s.value}` : s.value}`;

        if (text == "") {
          text = t;
        } else {
          text = `${text}, ${t}`;
        }
      });

      return text;
    },
    skills() {
      let skills = this.monster.proficiencies.filter((x) =>
        x.proficiency.index.includes("skill")
      );

      if (skills == null || skills == undefined || skills.length == 0) {
        return null;
      }

      let text = "";
      skills.forEach((s) => {
        let skill = translator.translateSkill(s.proficiency.index);
        let t = `${skill} ${s.value > 0 ? `+${s.value}` : s.value}`;

        if (text == "") {
          text = t;
        } else {
          text = `${text}, ${t}`;
        }
      });

      return text;
    },
    senses() {
      let text = "";
      let sentidos = translator.translateSenses(this.monster.senses);

      if (sentidos == null || sentidos == undefined || sentidos.length == 0)
        return null;

      sentidos.forEach((x) => {
        let append = `${x.descricao} ${x.valor}`;
        if (text == "") {
          text = append;
        } else {
          text = `${text}, ${append}`;
        }
      });

      return text;
    },
  },
};
</script>