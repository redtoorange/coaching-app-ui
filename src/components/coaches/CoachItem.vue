<template>
    <v-card hover :to="detailsLink">
        <v-card-title>
            {{ fullName }}
        </v-card-title>
        <v-card-subtitle>
            ${{ coach.hourlyRate }}/hour
        </v-card-subtitle>
        <v-card-text>
            <v-chip-group>
                <CoachBadge v-for="area in coach.areas" :key="area" :area="area"/>
            </v-chip-group>
        </v-card-text>
<!--        <v-card-actions class="actions">-->
<!--            <v-btn :to="contactLink"><strong>Contact</strong></v-btn>-->
<!--            <v-btn color="purple darken-2" dark :to="detailsLink">View Details</v-btn>-->
<!--        </v-card-actions>-->
    </v-card>
</template>

<script>
import CoachBadge from "@/components/coaches/CoachBadge";
export default {
    name: "CoachItem",
    components: {CoachBadge},
    props: {coach: {type: Object, required: true}},

    data() {
        return {
            expanded: false
        }
    },

    computed: {
        fullName() {
            return this.coach.firstName + " " + this.coach.lastName;
        },

        contactLink() {
            return this.$route.path + "/" + this.coach.id + "/contact";
        },

        detailsLink() {
            return this.$route.path + "/" + this.coach.id;
        }
    }
}
</script>

<style scoped>
.actions {
    text-align: right;
    display: block;
}
</style>
