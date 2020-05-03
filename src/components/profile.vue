
<template>
    <v-container fluid>
        <v-layout column>

            <v-card-title class="card-header text-secondary">
                @{{ user.username }}
            </v-card-title>


            <v-card>
                <v-card-text>

                    <v-flex class="mb-4">

                        <v-avatar size="96" class="mr-4">
                            <img alt="Avatar">
                        </v-avatar>

                        <v-btn>Change Avatar</v-btn>

                    </v-flex>

                    <h5>Name: {{ user.first_name }} {{user.last_name}}</h5>

                    <h5>DOB:  {{user.DOB}}</h5>

                    <h5>Email: {{user.email }}</h5>

                </v-card-text>

                <v-card-actions>
                    <v-btn>
                    <v-icon right fab color="cyan">mdi-pencil</v-icon>
                        Make Changes 
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-layout>
        </v-container>
</template>

<script>
export default {
    name: 'Profile'
}
</script>