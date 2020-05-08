<template>
    <v-container fluid>
        
        <v-layout column>

            <v-card-title class="card-header text-secondary">
                @{{user.Uname}} 
            </v-card-title>


            <v-card>
                <v-card-text>

                    <v-flex class="mb-4">

                        <v-avatar size="96" class="mr-4">
                            <img :src="user.ImgUrl"  alt="Avatar">
                        </v-avatar>

                    </v-flex>

                    <h5>Name: {{ user.Fname }} {{user.Lname}} </h5>

                    <h5>DOB:  {{user.DOB}}</h5>

                    <h5>Email: {{user.email }}</h5>

                </v-card-text>

                <v-card-actions>
                    <v-btn @click="addFriend">
                    <v-icon right fab color="cyan">mdi-pencil</v-icon>
                        add Friend
                    </v-btn>

                    <v-select
                        v-model="friend.type"
                        :items="friendTypes"
                        filled
                        label="Friend Type"
                    ></v-select>
                </v-card-actions>
            </v-card>

        </v-layout>
        </v-container>  
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "UserCard",
    props:['user'],
      computed: {
    ...mapState(['currentUser']),
    ...mapState(['friendTypes'])
     },
    data() {
        return {
            friend: {
                type: '',
                UID : this.$store.state.currentUser.UID,
                FID : this.user.UID
            }
        }
    },
    methods: {
        addFriend(){
            try{
                let req = this.friend
                console.log(req)
                this.$store.dispatch('addFriend',req)
            }catch(e){
                alert(e)
            }
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