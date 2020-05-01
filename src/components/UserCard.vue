<template>
    <v-card class="mb-3 mt-2">
        <v-card-title class="card-header text-secondary">
            @{{ user.username }}
        </v-card-title>
        <v-card-text class="card-body d-flex-column">
            <h5>Name: {{ user.first_name }} {{user.last_name}}</h5>
            <h5>Email : {{user.email}}</h5>
            <v-btn class="btn btn-primary">View</v-btn>
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