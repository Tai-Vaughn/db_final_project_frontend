<template>
    <nav>
      <v-app-bar flat app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="currentUser.Fname"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase mr-3">
          <h2>DB Final</h2>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="currentUser.Fname">
        <v-btn text class="mr-2" @click="logoutUser">
          Logout
          <v-icon>mdi-exit-run</v-icon>
        </v-btn>
      </div>
      </v-app-bar>

      <v-navigation-drawer class="NavBar" v-model="drawer" absolute bottom temporary>
        <v-list >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar size="100" color="indigo">
              <img :src="currentUser.ImgUrl">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ currentUser.Fname}} {{currentUser.Lname}}</v-list-item-title>
              <v-list-item-subtitle>{{ currentUser.Uname}}</v-list-item-subtitle>
            </v-list-item-content>
            
          </v-list-item>
            <AddPost></AddPost>
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
import AddPost from './PopUpForms/AddPost'
import {mapState} from 'vuex'
export default {
    name : 'Nav',
    components: {
      AddPost
    },
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
    ...mapState(['currentUser']),
    ...mapState(['isAuthenticated'])
    },
    methods : {
    logoutUser() {
      this.$store.dispatch("logoutUser")
      this.$router.push('/login')
    },
    async loadFriends(){
      await this.$store.dispatch('getFriends',this.currentUser.UID)
    },
    async loadPic(){
      await this.$store.dispatch('getPics',this.currentUser.UID)
    },
    async loadPosts(){
      await this.$store.dispatch('getPosts',this.currentUser.UID)
      
    },
    },
    mounted(){
    },
    watch: {
    '$route' : function (to){
      switch(to.name){    
            case "Galllery":
                this.loadPic()
                break;
            case "Friend":
                this.loadFriends();
                break;
            case "Profile":
                this.loadPosts();
                }
            }
        },
}
</script>

<style scoped>
    .nav {
        background-color: aquamarine;
    }
    .NavBar{
      position: fixed;
    }

</style>