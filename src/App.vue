<template>
  <v-app>
    <Nav></Nav>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',

  components: {
    Nav
  },
  mounted(){
    this.$store.dispatch('getUsers')
  },
  computed: {

  },

  methods : {
  },

  data() {
    return{
    drawer:true,
    links: [
      {icon: 'mdi-account' , text: 'Profile', route: '/profile'  },
      {icon: 'mdi-thumb-up' , text: 'Freinds', route: '/friends' },
      {icon: 'mdi-google-photos' , text: 'Gallery', route: '/gallery' }
    ],
    }
  },

};
</script>
