<template>
    <v-container class="card  mt-4">
        
        <v-form v-model="valid" class="pb-3 d-flex flex-column ">
            
            <h3 class="card-title">Login</h3>
            <v-text-field v-model="loginInfo.Uname" label="Username" :rules="[required('Username'),maxlength('Username',30)]"></v-text-field>
            <v-text-field 
                :type="showPassword ? 'text' : 'password'" 
                v-model="loginInfo.password" 
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="change"
                :rules="[required('Password'),maxlength('Password',30)]"
            ></v-text-field>
            
        
            <div class="mb-3">
                <v-btn class="btn btn-success mr-3" :disabled="!valid" @click="loginUser">Login</v-btn>
                <router-link to='/register'><v-btn class="btn btn-info">Register</v-btn></router-link>

        </div>
        </v-form>
    </v-container>
</template>

<script>
import validations from '@/utils/validations'
export default {
    name: "Login",
    data(){
        return{
            ...validations,
            valid:false,
            showPassword:true,
            loginInfo : {
                Uname : 'Isamutai',
                password: 'pass123'
            }
        }
    },
    methods: {
        async loginUser(){
            let user = await this.$store.dispatch('loginUser',this.loginInfo)
            if( (typeof user) === 'undefined') {
                this.$router.push('/profile')
            }else{
                alert('Invalid username or password')
            }
        },
        containsKey(obj, key ) {
            return Object.keys(obj).includes(key);
        },
        change(){
            this.showPassword = !this.showPassword;
        }
    }
}
</script>

<style scoped>

    .card {
        width: 18rem;
    }
    
</style>