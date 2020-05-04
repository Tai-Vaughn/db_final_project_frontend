<template>
    <nav>
      <v-app-bar flat app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase mr-3">
          <h2>DB Final</h2>
        </v-toolbar-title>
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

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar size="100" color="indigo">
              <img :src="currentUser.ImgUrl">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item link router :to="link.route" v-for="link in links" :key="link.text">
            <v-list-item-icon>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name : 'Nav',
    data() {
        return{
        drawer:false,
        links: [
        {icon: 'mdi-account' , text: 'Profile', route: '/profile'  },
        {icon: 'mdi-thumb-up' , text: 'Freinds', route: '/friends' },
        {icon: 'mdi-google-photos' , text: 'Gallery', route: '/gallery' }
            ],
        miniVariant: false,
        }
    },
      computed: {
    ...mapState(['currentUser'])
    },
    methods : {
    logoutUser() {
      this.$store.dispatch("logoutUser")
    },
    loadFriends(){
      this.$store.dispatch('getFriends',this.currentUser.UID)
    },
    loadPic(){
      this.$store.dispatch('getPics',this.currentUser.UID)
    },
    },
    mounted(){
    },
    watch: {
    '$route' : function (to){
      switch(to.name){
            case "Friend":
                this.loadFriends();

                break;
            case "Galllery":
                this.loadPic()
                break;

                }
            }
        },
}
</script>

<style scoped>
    .nav {
        background-color: aquamarine;
    }
</style>