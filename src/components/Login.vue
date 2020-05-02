<template>
    <div class="card container">
        
        <form class="pb-3 d-flex flex-column ">
            
            <h3 class="card-title">Login</h3>
            <div>
                <label for="username" class="pl-2" >Username</label>
                <input type="text"  id="username">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password">
            </div>
            
        </form>
        <div class="mb-3">
            <v-btn class="btn btn-success mr-3">Login</v-btn>
            <router-link to='/register' tag="button" class="btn ">
                <v-btn class="btn btn-info">Register</v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

    .card {
        width: 18rem;
    }
    
</style>