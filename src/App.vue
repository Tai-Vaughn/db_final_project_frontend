<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >


      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <UserDash></UserDash>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import UserDash from './components/UserDash'

export default {
  name: 'App',

  components: {
    UserDash
  },
    mounted(){
       this.$store.dispatch('getUsers');
    },

  data: () => ({
    //
  }),
};
</script>
