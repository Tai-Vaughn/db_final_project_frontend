<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
           <v-btn color="red lighten-2" dark v-on="on" class="sucess">Add new Pic</v-btn> 
        </template>
        
        <v-card>
            <v-card-title>
                <v-container>
                    <v-form>
                        <v-file-input ></v-file-input>
                        <v-text-field label="Add Description" :rules="[required('Password'),maxlength('Description',50)]"></v-text-field>
                    </v-form>   
                </v-container>
                
            </v-card-title>
            <v-card-actions>
                <v-btn class="error" @click="dialog = false"> Cancel </v-btn>
                <v-btn class="success"> Add </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import validations from '@/utils/validations'
export default {
    name: 'AddPicForm',
    data(){
        return {
            ...validations,
            dialog: false
        }
    } 
}
</script>

