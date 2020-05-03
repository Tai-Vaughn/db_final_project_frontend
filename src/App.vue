<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >


      <v-spacer></v-spacer>
      <div v-if="currentUser.Fname">
        {{currentUser.Fname}}
        <v-btn text class="mr-2" @click="logoutUser">
          Logout
        </v-btn>
      </div>
      <div v-else>
        <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn> 
      </div>
      
    </v-app-bar>

    <v-content>
      <UserDash></UserDash>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import UserDash from './components/UserDash'
import {mapState} from 'vuex'

export default {
  name: 'App',

  components: {
    UserDash
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
