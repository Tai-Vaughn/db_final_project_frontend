<template>

</template>

<script>
// import {mapState} from 'vuex'
export default {
    name: 'Sidebar',
    computed: {
    // ...mapState(['SET_SIDE_BAR_VIEW']),
    
     },
    data(){
        return {

        }
        
    },
    methods: {
        setsideBarView(view){
            this.$store.dispatch('setsideBarView',view)
        }
    }
}
</script>
