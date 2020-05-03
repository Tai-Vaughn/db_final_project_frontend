<template>
    <v-card class="mb-3 mt-2">
        <v-card-title class="card-header text-secondary">
            @{{ user.Uname }}
        </v-card-title>
        <v-card-text class="card-body">

                <div>
                    <v-img :src="user.ImgUrl" ></v-img>
                </div>
                <div>
                    <h5>Name: {{ user.Fname }} {{user.Lname}}</h5>
                    <h5>Email : {{user.email}}</h5>
                    <v-btn class="btn btn-primary">View</v-btn> 
                </div> 
        </v-card-text>    
    </v-card>    
</template>

<script>
export default {
    name: "UserCard",
    props:['user']
}
</script>

<style scoped>

</style>