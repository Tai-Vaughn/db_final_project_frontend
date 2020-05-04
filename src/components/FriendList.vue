<template>
    <v-container>
        <div v-bind:key="friend.id" v-for="friend in friends">
                <v-container fluid>
        
        <v-layout column>

            <v-card-title class="card-header text-secondary">
                @{{friend.Uname}} 
            </v-card-title>


            <v-card>
                <v-card-text>

                    <v-flex class="mb-4">

                        <v-avatar size="96" class="mr-4">
                            <img :src="friend.ImgUrl"  alt="Avatar">
                        </v-avatar>

                    </v-flex>

                    <h5>Name: {{ friend.Fname }} {{friend.Lname}} </h5>

                    <h5>DOB:  {{friend.DOB}}</h5>

                    <h5>Email: {{friend.email }}</h5>

                </v-card-text>

                <v-card-actions>

                </v-card-actions>
            </v-card>

        </v-layout>
        </v-container>
        </div>
    </v-container>
</template>

<script>
import UserCard from './UserCard'
import {mapState} from 'vuex'

export default {
    name : 'FriendList',
    components: [
       UserCard 
    ],
    mounted() {
        this.$store.dispatch('getFriends')
    },
  computed: {
    ...mapState(['friends'])
  }
}
</script>