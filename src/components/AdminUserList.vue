<template>
    <div>
        <div v-for="user in users" :key="user.id">
            {{ user.first_name}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['users'])
    }
}
</script>