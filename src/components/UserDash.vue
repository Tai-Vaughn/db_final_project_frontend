<template>
    <div>
        <div v-bind:key="user.id" v-for="user in users">
            <UserCard v-bind:user="user"> 
            </UserCard>
        </div>
    </div>
</template>

<script>
import UserCard from './UserCard'
import {mapState} from 'vuex'



export default {
    name: 'UserDash',
    components: {
        UserCard
    },

    mounted(){
        
    },

    created: function(){
    },

    computed: {
        ...mapState(['users'])
    },
    
    methods : {
    }

}
</script>