<template>

      <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
           <v-btn color="red lighten-2" dark v-on="on" class="sucess">Add Post</v-btn> 
        </template>
        <v-card>
            
        </v-card>
      </v-dialog>
       <!-- <v-card>
            <v-card-title>
                <v-container>
                                <v-form>
                        <v-file-input v-model="photo.file" ></v-file-input>
                        <v-text-field v-model="photo.desc" label="Add Description"></v-text-field>
            </v-form>   
                </v-container>
            </v-card-title>
            <v-card-actions>
                <v-btn class="error" @click="dialog = false"> Cancel </v-btn>
                <v-btn class="success" @click="addPic"> Add </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog> -->
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>