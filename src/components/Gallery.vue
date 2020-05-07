<template>
    <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-card-title> <AddPicture></AddPicture> </v-card-title>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="pic in gallary"
              :key="pic.Pic_id"
              class="d-flex child-flex"
              cols="4"
            >
             <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="200"
            :src="pic.Pic_url"
          ></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-col>
            <v-card-text>{{pic.Pic_desc}}</v-card-text>
          </v-col>
          <v-col>
           
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from 'vuex'
import AddPicture from './PopUpForms/AddPicture'
export default {
    name: 'Gallery',
    components: {
        AddPicture
    },
    computed: {
    ...mapState(['gallary'])
    }
}
</script>

<style scoped>



</style>