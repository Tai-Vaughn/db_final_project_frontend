<template>
    <v-container class="card mt-4">
        <v-form v-model="valid" class="pb-3 d-flex flex-column" @submit="addUser">
            
            <h3 class="card-title">Register</h3>
        
            <v-text-field  v-model="user.Fname" label="First Name" :rules="[required('First Name'),maxlength('First Name',20)]"></v-text-field>
            <v-text-field  v-model="user.Lname" label="Last Name"  :rules="[required('Last Name'),maxlength('Last Name',20)]"></v-text-field>
            
            <v-text-field  v-model="user.Uname" label="Username" :rules="[required('Username'),maxlength('Username',30)]"></v-text-field>
            <v-text-field  v-model="user.password" label="Password" :rules="[required('Password'),maxlength('Password',30)]"></v-text-field>

            <v-text-field type="email" v-model="user.email" label="Email" :rules="[required('Email'),maxlength('Email',30), emailFormat()]"></v-text-field>
            
            <v-dialog v-model="dialog">
                <template v-slot:activator="{ on }">
                    <v-text-field v-on="on" v-model="user.DOB" label="Date Of Birth" prepend-icon="mdi-calendar" ></v-text-field >
                    
                </template>

                <v-date-picker v-model="user.DOB" @change="dialog = false"></v-date-picker> 
                    
            </v-dialog>
            

            <v-file-input v-model="user.file"></v-file-input>

            <div>
                <v-btn @click="addUser" :disabled="!valid" class="btn btn-success mr-4">Register</v-btn>
                <router-link  to="/login"><v-btn class="btn btn-info">login</v-btn></router-link>
            </div>

        </v-form>
        
    </v-container>  
</template>

<script>
import validations from '@/utils/validations'
export default {
    name: 'Register',
    data() {
        return {
            ...validations,
            valid:false,
            dialog: false,
            ProfPicture : null,
            date: null,
            user: {
                UID: 0,
            }
        }
        
    },
    methods: {
       async addUser() {
            console.log(this.user)
            try{ 
            this.$store.dispatch('addUser', this.user);
            this.$router.push({path: '/login'})
            }catch(e){
                alert('Something went wrong')
            }
        }

    }
}
</script>

<style scoped>


</style>