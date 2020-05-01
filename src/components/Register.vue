<template>
    <div class="card container">
        <form class="pb-3 d-flex flex-column ">
            
            <h3 class="card-title">Register</h3>
            <div class="mb-3">
                <label for="FirstName" class="pl-2" >First Name</label>
                <input type="text"  id="FirstName" required>

                <label for="LastName">Last Name</label>
                <input type="text" id="LastName" required> 
            </div>
            <div class="mb-3">
                <label for="Username">Username</label>
                <input type="text" id="Username" required>
                
                <label for="Password">Password</label>
                <input type="password" id="password" required>
            </div>
            <div>
                <label for="Email">Email</label>
                <input type="email" id="Email" required>

                <label for="DOB"> Date Of Birth</label>
                <input type="date" id="DOB" required>
            </div>

            <div class="mb-3">
            <input type="submit" class="btn btn-success" >
            <router-link to='/login' class="btn btn-info">Login</router-link>
        </div>
        </form>
        
    </div>  
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>


</style>