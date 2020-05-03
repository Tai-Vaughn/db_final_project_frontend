<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >


      <v-spacer></v-spacer>
      <div v-if="currentUser.Fname">
        {{currentUser.Uname}}
        <v-btn text class="mr-2" @click="logoutUser">
          Logout
        </v-btn>
      </div>
      <div v-else>
        <v-btn
        text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn> 
      </div>
      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App',

  components: {
  },
  mounted(){
      this.$store.dispatch('getUsers');   
  },
  computed: {
    ...mapState(['currentUser'])
  },

  methods : {
    logoutUser() {
      this.$store.dispatch("logoutUser")
    }
  },

  data: () => ({
    //
  }),
};
</script>
