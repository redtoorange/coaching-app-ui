<template>
    <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title>
                <a :href="emailLink">{{ request.email }}</a>
            </v-list-item-title>
            <v-list-item-subtitle>
                {{ request.message }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: "RequestItem",
    props: {
        request: {type: Object, required: true}
    },

    computed: {
        emailLink() {
            return "mailto:" + this.request.email;
        }
    }
}
</script>

<style scoped>

</style>
