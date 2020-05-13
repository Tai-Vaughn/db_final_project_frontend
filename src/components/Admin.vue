<template>
    <v-data-table 
        :headers = "headers" 
        :items = "users"
        link router :to="users.UID"
    >
            <template v-slot:item="row">
          <tr>
            <td>{{row.item.Fname}}</td>
            <td>{{row.item.Lname}}</td>
            <td>{{row.item.Uname}}</td>
            <td>
                <v-btn class="mx-2" tile outlined color="success" @click="viewUser(row.item.UID)">
                    <v-icon dark>mdi-account-arrow-right</v-icon> View User
                </v-btn>
            </td>
          </tr>
            </template>    
    </v-data-table>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name : 'Admin',
    computed: {
    ...mapState(['users'])
    },
    data(){
        return{
            headers : [
                {
                    text: 'First Name',
                    align: 'start',
                    sortable: false,
                    value: 'Fname',
                },
                {text: 'Last Name' , value: 'Lname'},
                {text: 'Username' , value: 'Uname'}
            ]
        }
    },
    methods: {
      viewUser(UID){
          this.$router.push('/admin/'+UID)
      }  
    }
}
</script>