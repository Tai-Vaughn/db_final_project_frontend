<template>
    <div class="card mb-3">
        <h4 class="card-header text-secondary">
            @{{ user.username }}
        </h4>
        <div class="card-body d-flex-column">
            <h5>Name: {{ user.first_name }} {{user.last_name}}</h5>
            <h5>Email : {{user.email}}</h5>
            <button class="btn btn-primary">View</button>
        </div>    
    </div>    
</template>

<script>
export default {
    name: "UserCard",
    props:['user']
}
</script>

<style scoped>

</style>