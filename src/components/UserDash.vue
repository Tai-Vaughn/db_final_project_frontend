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
import Api from '../service/api'



export default {
    name: 'UserDash',
    components: {
        UserCard
    },

    mounted(){
        // Api().get('/users').then(res => this.users=res.data)
    },

    created: function(){
        this.getUsers();
    },

    data() {
        return {
            users: []
        }
    },
    methods : {
        async getUsers(){
            let response = await Api().get('/users').then(res => console.log(res));
            this.users = response.data;
        }
    }

}
</script>