<template>
    <v-row>
        <v-col cols="12" offset="0" lg="10" offset-lg="1">
            <v-card>
                <v-card-text>
                    <v-btn left>
                        Refresh
                    </v-btn>

                    <v-btn to="/register" v-if="!isCoach" color="purple darken-1" dark absolute right>
                        Register
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text align="center">
                    <CoachFilter @filters-changed="OnFilterChange"></CoachFilter>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    <div v-if="hasCoaches">
                        <v-row >
                            <v-col cols="12" sm="6" v-for="coach in filteredCoaches" :key="coach.id">
                                <CoachItem :coach="coach"/>
                            </v-col>
                        </v-row>
                    </div>
                    <h2 v-else>
                        No Coaches Found
                    </h2>
                </v-card-text>

            </v-card>
        </v-col>
    </v-row>

</template>

<script>
import {mapGetters} from "vuex";
import CoachItem from "@/components/coaches/CoachItem";
import CoachFilter from "@/components/coaches/CoachFilter";

export default {
    name: "Coaches",
    components: {CoachFilter, CoachItem},

    methods: {
        OnFilterChange(filters) {
            this.filters = filters;
        }
    },

    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },

    computed: {
        filteredCoaches() {
            const allCoaches = this.$store.getters['coaches/coaches'];
            return allCoaches.filter(c => {
                if(c.areas){
                    if (this.filters.frontend && c.areas.includes('frontend')) {
                        return true;
                    }
                    if (this.filters.career && c.areas.includes('career')) {
                        return true;
                    }
                    if (this.filters.backend && c.areas.includes('backend')) {
                        return true;
                    }
                }

                return false;
            });
        },

        ...mapGetters('coaches', ['hasCoaches', 'isCoach'])
    }
}
</script>

<style scoped>

</style>
