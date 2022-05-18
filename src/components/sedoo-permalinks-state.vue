<template>
<v-app class="minimum">
  <v-container >
      <v-row class="pb-5">
       <v-col cols="12" sm="3" class="pb-8">
            <SedooStateTitle url="https://api.sedoo.fr/aeris-permalink-rest/actuator/info" jsonkeyLastCheck="Unavailable Urls.last check" jsonkey="Unavailable Urls.broken permalinks" label="Broken Permalinks"></SedooStateTitle>
        </v-col>

      </v-row>
      
  </v-container>
  </v-app>
</template>

<script>
import SedooStateTitle from "./sedoo-state-tile"
export default {
  name: "sedoo-permalinks-state",
  components: { SedooStateTitle },
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


