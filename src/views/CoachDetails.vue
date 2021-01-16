<template>
    <v-row>
        <v-col cols="12" lg="8">
            <v-card>
                <v-card-title>
                    {{ fullName }}
                </v-card-title>

                <v-card-subtitle>
                    ${{ selectedCoach.hourlyRate }}/hour
                </v-card-subtitle>

                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-card>
                                <v-card-text>
                                    <CoachBadge v-for="area in selectedCoach.areas" :key="area" :area="area"/>

                                    <v-divider class="my-3"></v-divider>

                                    {{ selectedCoach.description }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-card v-if="!contactDisplayed">
                                <v-card-title>
                                    Interested? Reach out now!
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn :to="contactLink">Contact</v-btn>
                                </v-card-actions>
                            </v-card>

                            <div v-if="contactDisplayed">
                                <router-view></router-view>
                            </div>
                        </v-col>
                    </v-row>


                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import CoachBadge from "@/components/coaches/CoachBadge";

export default {
    name: "CoachDetails",
    components: {CoachBadge},
    props: ['id'],
    data() {
        return {
            selectedCoach: null,
        };
    },

    computed: {

        fullName() {
            return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
        },

        contactLink() {
            return this.$route.path + "/contact";
        },

        areas() {
            return this.selectedCoach.areas;
        },

        contactDisplayed() {
            return this.$route.path.endsWith('/contact')
        }
    },

    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id);
    }
}
</script>

<style scoped>

</style>
