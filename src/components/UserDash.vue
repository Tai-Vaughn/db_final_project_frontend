<template>
    <div >
        <ul v-bind:key="user.id" v-for="user in users">
            <li >
                <UserCard v-bind:user="user">

                </UserCard>
            </li>
        </ul>
    </div>
</template>

<script>
import UserCard from './UserCard'




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
        users() {return this.$store.state.users}
    },
    methods : {
    }

}
</script>