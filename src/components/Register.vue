<template>
    <div class="card container">
        <form class="pb-3 d-flex flex-column" @submit="addUser">
            
            <h3 class="card-title">Register</h3>
            <div class="mb-3">
                <label for="FirstName" class="pl-2" >First Name</label>
                <input type="text"  id="FirstName" v-model="user.first_name" required>

                <label for="LastName">Last Name</label>
                <input type="text" id="LastName"  v-model="user.last_name" required> 
            </div>
            <div class="mb-3">
                <label for="Username">Username</label>
                <input type="text" id="Username" v-model="user.username" required>
                
                <label for="Password">Password</label>
                <input type="password" id="password"  v-model="user.p_word" required>
            </div>
            <div>
                <label for="Email">Email</label>
                <input type="email" id="Email" v-model="user.email" required>

                <label for="DOB"> Date Of Birth</label>
                <input type="date" id="DOB" required>
            </div>

            <div class="mb-3">
            <router-link to='/register' tag="button" class="btn ">
                <v-btn class="btn btn-success">Register</v-btn>
            </router-link>
            <router-link to='/login' tag="button" class="btn ">
                <v-btn class="btn btn-info">login</v-btn>
            </router-link>
        </div>
        </form>
        
    </div>  
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            user: {
                user_ID: 0,
            }
        }
        
    },
    methods: {
        addUser() {
            this.$store.dispatch('addUser', this.user);
            this.$router.push({path: '/login'})
        }
    }
}
</script>

<style scoped>


</style>