<template>
    <v-card>
        <v-card-text>
            <v-row>
               {{ post.PO_desc}} 
            </v-row>
            <v-row>
                <v-container>
                    <v-img :src="post.PO_url" aspect-ratio="1"></v-img>
                </v-container>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name : 'PostCard',
    props:['post']
}
</script>