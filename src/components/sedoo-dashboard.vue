<template>
<v-app class="minimum">
  <v-container class="mt-5">
      <v-row class="pb-5">
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#297E9E" url="https://www.sedoo.fr/wp-json/wp/v2/sedoo_wppl_projects_taxo_typo/24" jsonkey="count" label="Projets internationaux" targeturl="https://www.sedoo.fr/typologies/projets-internationaux" ></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3"class="pb-8" >
            <SedooDashboardTitle color="#000000" url="https://www.sedoo.fr/wp-json/wp/v2/sedoo_wppl_projects_taxo_typo/25" jsonkey="count" label="Projets nationaux" targeturl="https://www.sedoo.fr/typologies/projets-nationaux/" ></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#90BCD1" url="https://www.sedoo.fr/wp-json/wp/v2/sedoo_wppl_projects_taxo_typo/23" jsonkey="count" label="SNO" targeturl="https://www.sedoo.fr/typologies/sno/"></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#000000" url="https://www.sedoo.fr/wp-json/wp/v2/sedoo_wppl_projects_taxo_typo/26" targeturl="https://www.sedoo.fr/typologies/campagnes/" :step="2" jsonkey="count" label="Campagnes"></SedooDashboardTitle>
        </v-col>
      </v-row>
      <v-row >
      <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#CC9933"  url="https://www.sedoo.fr/wp-json/wp/v2/sedoo_wppl_projects_taxo_typo/29" jsonkey="count" label="Projets ANR" targeturl="https://www.sedoo.fr/typologies/agence-nationale-de-la-recherche/" ></SedooDashboardTitle>
        </v-col>
      <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#000000"  value="150" preprend="+" label="Sites web" :step="15" targeturl="https://www.sedoo.fr/hebergement-wordpress/" ></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#B6CC49" value="132" label="Coeurs de calcul" :step="17" ></SedooDashboardTitle>
        </v-col>
         <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#000000"  value="14" label="Développeurs" :step="2" targeturl="https://www.sedoo.fr/equipeactuelle/" ></SedooDashboardTitle>
        </v-col>
      </v-row>
  </v-container>
  </v-app>
</template>

<script>
import SedooDashboardTitle from "./sedoo-dashboard-tile"
export default {
  name: "sedoo-dashboard",
  components: { SedooDashboardTitle },
  computed: {
   
  },

 props: {
   
  },

  data() {
    return {
    };
  },

  created() {
  
  },

  methods: {
    
  }
};
</script>

