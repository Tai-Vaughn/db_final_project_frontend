<template>
  <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on" class="sucess">Add new Group</v-btn> 
    </template>
   <v-card width="1000" class="mx-auto mt-5">

     <v-card-title>
     <h1 class="headline" prepend-icon="mdi-card-account-details">Create Group</h1>
     </v-card-title>
     
     <v-form>
        <v-text-field label="Enter Name" prepend-icon="mdi-card-account-details"/>
        <v-text-field label="Select Users" prepend-icon="mdi-account-search"/>
        <v-text-field label="Enter Description (optional)" prepend-icon="mdi-pencil"/>
        <v-file-input label="Choose Picture (optional)" prepend-icon="mdi-camera"/>
     </v-form>

     <v-card-actions>
         <v-btn class="error" @click="dialog = false">Cancel</v-btn>
         <v-btn color="success">Create</v-btn>
     </v-card-actions>

   </v-card>
  </v-dialog>
    
  
</template>

<script>
export default {
    name : 'CreateGroup',
    data() {
        dialog: false
    }
}
</script>