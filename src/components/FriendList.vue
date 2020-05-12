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
                    <v-dialog max-width="600px" v-model="dialog">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" @click="getPosts(friend.UID)">View Post</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <v-row>
                                    <v-col>
                                        <v-avatar size="96" class="mr-4">
                                            <img :src="friend.ImgUrl"  alt="Avatar">
                                        </v-avatar> @{{friend.Uname}} 
                                    </v-col>
                                </v-row>
                            </v-card-title>
                            <v-card-text>
                                <v-col class="mod">
                                    <h3>Posts</h3> 
                                    <v-container id="scroll-target" style="max-height: 500px" class="overflow-y-auto">
                                        <v-container v-for="post in posts.slice().reverse()" :key="post.id">
                                            <PostCard :post="post"></PostCard>
                                        </v-container>
                                        <v-row v-scroll:#scroll-target="onScroll" align="center" justify="center" style="height: 300px" >
                                        </v-row>
                                    </v-container>
                                </v-col>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                </v-card-actions>
            </v-card>
        </v-layout>
        </v-container>
        </div>
    </v-container>
</template>

<script>
import PostCard from './PostCard'
import Api from '../service/api'
import {mapState} from 'vuex'

export default {
    name : 'FriendList',
    components: {
        PostCard
    },
    mounted() {
    },
    data(){
        return{
            posts:[]
        }
    },
    computed: {
    ...mapState(['friends'])
    },
    methods:{
        async getPosts(UID){
            let response = await Api().get('/posts/'+UID)
            this.posts = response.data
}

    }

}
</script>