<template>

      <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
           <v-btn color="red lighten-2" dark v-on="on" class="sucess">Add Post</v-btn> 
        </template>
        <v-card>
            <v-card-title>
                <v-container>
                    <v-card-title>Add New Post</v-card-title>
                    <v-file-input v-model="post.file" label="Image"></v-file-input> 
                    <v-text-field v-model="post.PO_desc" label="Description"></v-text-field>
                </v-container>
                
            </v-card-title>
            <v-card-actions>
                <v-btn class="error" @click="dialog = false">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn class="success" @click="AddPost">OK</v-btn>
            </v-card-actions>

        </v-card>
      </v-dialog>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name : 'AppPost',
    data() {
        return{
            dialog : false,
            post : {}
        }
    },
    computed: {
        ...mapState(['currentUser'])
    },
    methods: {
       async AddPost () {
            this.post.UID = this.currentUser.UID
            await this.$store.dispatch('addPost',this.post)
            await this.$store.dispatch('getPosts',this.currentUser.UID)
            this.dialog = false 
        }
    }
}
</script>

<style scoped>

</style>