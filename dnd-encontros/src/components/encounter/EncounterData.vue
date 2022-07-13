<template>
  <v-container fluid>
    <v-data-iterator
      :items="encounters"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      @page-count="pageCountChanges"
      hide-default-footer
      no-data-text = "Nenhum encontro localizado"
    >
      <template v-slot:header>
        <v-toolbar dark color="primary">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Pesquisar"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="12"
            md="6"
            lg="3"
          >
            <EncounterCard :encounter="item"/>
          </v-col>
        </v-row>
      </template>
      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Cards por página</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Página {{ page }} de {{ pagecount }}
          </span>
          <v-btn fab dark color="primary" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="primary" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import EncounterCard from "./EncounterCard.vue";

export default {
  components: {
    EncounterCard,
  },
  props: {
    encounters: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {
      search: "",
      itemsPerPageArray: [4, 8, 12, 16, 20],
      filter: {},
      page: 1,
      pagecount: 0,
    };
  },
  methods: {
    pageCountChanges(options) {
      this.pagecount = options;
    },
    nextPage() {
      if (this.page + 1 <= this.pagecount) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>