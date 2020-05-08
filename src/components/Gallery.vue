<template>
    <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-card-title> <AddPicture></AddPicture> </v-card-title>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="pic in gallary"
              :key="pic.Pic_id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-btn small @click="setDP(pic.Pic_url)">set DP</v-btn>
             <v-card class="d-inline-block mx-auto">
               
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <v-img
                        height="200"
                        width="200"
                        :src="pic.Pic_url"
                      ></v-img>
                    </v-col>

                    <v-col
                      cols="auto"
                      class="text-center pl-0"
                    >
                      <v-col>
                        <v-card-text>{{pic.Pic_desc}}</v-card-text>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from 'vuex'
import AddPicture from './PopUpForms/AddPicture'
export default {
    name: 'Gallery',
    components: {
        AddPicture
    },
    computed: {
    ...mapState(['gallary']),
    ...mapState(['currentUser'])
    },
    data() {
      return {
        modUser: {}
      }
      
    },

    methods:{
      setDP (url) {
        this.modUser.UID = this.currentUser.UID
        this.modUser.Fname = this.currentUser.Fname
        this.modUser.Lname = this.currentUser.Lname
        this.modUser.DOB = this.convertdate(this.currentUser.DOB)
        this.modUser.Uname = this.currentUser.Uname
        this.modUser.email = this.currentUser.email
        this.modUser.password = this.currentUser.password
        this.modUser.ImgUrl = url
        this.$store.dispatch('changeDP',this.modUser)
      },

      convertdate(date) {

        let newdate = new String
        newdate = date
        return newdate.split('T',1)[0] 

      }

    }
}
</script>

<style scoped>



</style>