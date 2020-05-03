<template>
    <div class="card container  mt-4">
        
        <v-form class="pb-3 d-flex flex-column ">
            
            <h3 class="card-title">Login</h3>
            <v-text-field v-model="loginInfo.Uname" label="Username"></v-text-field>
            <v-text-field type="password" v-model="loginInfo.password" label="Password"></v-text-field>
            
        
            <div class="mb-3">
                <v-btn class="btn btn-success mr-3" @click="loginUser">Login</v-btn>
                <v-btn class="btn btn-info">Register</v-btn>
                
        </div>
        </v-form>
    </div>
</template>

<script>

export default {
    name: "Login",
    data(){
        return{
            loginInfo : {
                Uname : '',
                password: ''
            }
        }
    },
    methods: {
        async loginUser(){
            let user = await this.$store.dispatch('loginUser',this.loginInfo)
            if(user.error){
                alert(user.error)
            }
        }
    }
}
</script>

<style scoped>

    .card {
        width: 18rem;
    }
    
</style>