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
              <v-card flat tile class="d-flex">
                <v-img
                  :src="pic.Pic_url"
                  aspect-ratio="1"
                  class="grey lighten-1 border border-dark pb-4"
                  
                >
                    <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                             <div class="body-1 text-white bg-dark">{{ pic.Pic_desc }}</div>
                        </v-col>
                    </v-row>
                  <template v-slot:placeholder>
                    
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                <v-card-text>
                    <div>{{ pic.Pic_desc }}</div>  
                </v-card-text>
                  </template>
                </v-img>
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