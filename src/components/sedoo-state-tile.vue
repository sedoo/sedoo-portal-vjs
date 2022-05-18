<template>

    <v-card :color="color" :elevation="2" tile class="sedoo-counter" @click="opentarget()" :style="{ cursor: activeCursor}">
        <v-row>
        <v-col cols="12">
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h2 mb-1 white--text">
                <v-icon v-if="counter==0" class="text-h1 mb-1 white--text" color="white">mdi-check</v-icon>
                <v-icon v-else class="text-h1 mb-1 white--text" color="white">mdi-close</v-icon>
                </v-list-item-title>
                <v-list-item-subtitle class="white--text text-h6"><span v-if="preprend">{{preprend}}</span>{{counter}}<span v-if="append">{{append}}</span> {{label}}</v-list-item-subtitle>
                <v-list-item-subtitle class="white--text headlines font-weight-thin">Last check: {{lastCheck}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-col>
        </v-row>
    </v-card>
       
</template>

<script>

export default {
  name: "sedoo-dashboard-tile",

  computed: {
    
    color: function() {
      if (this.counter==0) {
        return "green darken-2"
      } else {
        return "red darken-2"
      }
    },

    activeCursor: function () {
      if (this.targeturl) {
        return "pointer"
      } else {
        return "default"
      }
    },

    hasIcon: function() {
      if (!this.icon) {
        return false;
      }
      if (this.icon.length==0) {
        return false
      }
      return true
    }
  },

 props: {
   
    icon: {
      type: String,
      default:""
    },

    url: {
      type: String
    },

    jsonkey: {
      type: String
    },

    jsonkeyLastCheck: {
      type: String
    },

    targeturl: {
      type: String
    },

    preprend: {
      type: String
    },
    append: {
      type: String
    },

    speed: {
      type: Number,
      default: 100
    },
    label: {
      type: String
    },

     step: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      timer: null,
      counter: 0,
      ok: false,
      dValue: null,
      lastCheck: "-"
    };
  },

  created() {
    this.loadDynamicValue();
  },

  methods: {

    getStyle() {
      if (this.targeturl) {
        return "cursor:pointer";
      }
    },

    opentarget() {
      if (this.targeturl) {
        window.open(this.targeturl, "_blank")
      }
    },

    loadDynamicValue() {
      
    this.axios
          .get(
            this.url)
          .then(res => {
            let aux = res.data;
            this.counter = this.getValueFromNotation(aux,this.jsonkey)
            this.lastCheck = this.getValueFromNotation(aux,this.jsonkeyLastCheck);
          }).catch(error => {
            
          });
    },


    getValueFromNotation(obj,key) {
    
    if (typeof key == 'string')
      return this.getValueFromNotation(obj,key.split('.'));
    else if (key.length==1)
      return obj[key[0]];
    else if (key.length==0)
      return obj;
    else
      return this.getValueFromNotation(obj[key[0]],key.slice(1));
  
  },

    increaseCounter() {
      if (this.counter < this.dValue) {
        if (this.counter+Number.parseInt(this.step)> this.dValue) {
          this.counter = this.dValue;
        } else {
        this.counter=Number.parseInt(this.counter)+Number.parseInt(this.step);
        }
      } else {
        clearInterval(this.timer);
      }
      
    }
    
  }
};
</script>

