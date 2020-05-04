<template>
    <v-row no-gutters>
        <v-card class="pa-2" outlined tile >
            <SideBar></SideBar>
        </v-card>

         <v-card class="pa-2" outlined tile  >
            <UserDash></UserDash>
        </v-card>
    </v-row>
    <!-- <div>
        <div>
            <SideBar></SideBar>
        </div>
    </div> -->
</template>

<script>
import SideBar from './SideBar'
import UserDash from './UserDash'
import {mapState} from 'vuex'
    export default {
        pageTitle: 'My Profile',
        components: { SideBar ,UserDash},
        computed: {
         ...mapState(['SET_SIDE_BAR_VIEW']),
            },
        data () {
            return {
                loading: false,
                form: {
                    firstName: 'John',
                    lastName: 'Doe',
                    contactEmail: 'john@doe.com',
                    avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
                },
                showAvatarPicker: false
            }
        },
        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },
            selectAvatar (avatar) {
                this.form.avatar = avatar
            }
        }
    }
</script>