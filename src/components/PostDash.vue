<template>
    <div >
        <v-container v-for="post in posts" :key="post.id">
            <PostCard :post="post"></PostCard>
        </v-container>
    </div>
</template>

<script>
import PostCard from './PostCard'
import {mapState} from 'vuex'

export default {
    name: 'PostDash',
    computed: {
        ...mapState(['posts'])
    },
    components: {
        PostCard
    },
    data() {
        return {
            user:{}
        }
    },
    methods: {
        getPosts (){
            this.user.UID = this.currentUser.UID
            console.log(this.user)
        }
    }

}
</script>