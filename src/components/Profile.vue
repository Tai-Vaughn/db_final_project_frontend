<template>
    <v-container>
        <v-row>
            <v-col class="mod">
                <h3>Posts</h3> 
                <v-container
                id="scroll-target"
                style="max-height: 800px"
                class="overflow-y-auto"
                >
        
                    <v-row
                    v-scroll:#scroll-target="onScroll"
                    align="center"
                    justify="center"
                    style="height: 1000px"
                    >
                    </v-row>
                </v-container>
            </v-col>

            <v-col class="mod" v-scroll:#scroll-target="onScroll">
                <h3>Users</h3> 
                <v-container
                id="scroll-target"
                style="max-height: 800px"
                class="overflow-y-auto"
                >
                    <UserDash></UserDash>
                    <v-row
                    v-scroll:#scroll-target="onScroll"
                    align="center"
                    justify="center"
                    style="height: 1000px"
                    >
                    </v-row>
                </v-container>
            </v-col>   
        </v-row>
        
    </v-container>
</template>

<script>
import UserDash from './UserDash'
// import {mapState} from 'vuex'
    export default {
        pageTitle: 'MyProfile',
        components: {
            UserDash
         },
        computed: {
        
            },
        data () {
            return {
                
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .mod{
        border-style: groove;
        border-width: 3px;

    }
    h3{ text-align: center;}
</style>