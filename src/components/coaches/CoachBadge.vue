<template>
    <v-chip dark label :color="color" @click="$emit('click')">
        <strong>
            {{ area }}
        </strong>
    </v-chip>
</template>

<script>
export default {
    name: "CoachBadge",
    props: {
        area: {type: String, required: true}
    },

    emits: ['click'],
    computed: {
        color() {
            switch (this.area){
                case "frontend":
                    return "purple";
                case "backend":
                    return "purple darken-2";
                case "career":
                    return "purple darken-4";
            }
            return "";
        }
    }
}
</script>

<style scoped>

</style>
