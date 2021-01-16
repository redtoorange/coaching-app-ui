<template>
    <v-card flat>
            <v-list dense>
                <v-list-item>
                    <h3>Filters</h3>
                </v-list-item>
                <v-list-item>
                    <v-chip-group>
                        <v-chip  label
                                :color="color(c)"
                                @click="onClick(c)"
                                :outlined="outlined(c)"
                                :dark="!outlined(c)"
                                v-for="c in chips"
                                :key="c"
                        >
                            <strong>
                                {{ c }}
                            </strong>
                        </v-chip>
                    </v-chip-group>
                </v-list-item>
                <v-list-item>
                    <v-btn class="mr-1" width="100" @click="all">
                        All
                    </v-btn>
                    <v-btn @click="none" width="100">
                        None
                    </v-btn>
                </v-list-item>
            </v-list>
    </v-card>
</template>

<script>

export default {
    name: "CoachFilter",
    components: {},

    emits: ['filters-changed'],

    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            },

            chips: ['frontend', 'backend', 'career']
        }
    },

    methods: {
        onClick(val) {
            switch (val) {
                case "frontend":
                    this.filters.frontend = !this.filters.frontend;
                    break;
                case "backend":
                    this.filters.backend = !this.filters.backend;
                    break;
                case "career":
                    this.filters.career = !this.filters.career;
                    break;
            }

            this.$emit('filters-changed', this.filters)
        },

        color(val) {
            switch (val) {
                case "frontend":
                    return "purple";
                case "backend":
                    return "purple darken-2";
                case "career":
                    return "purple darken-4";
            }
            return "";
        },

        outlined(val) {
            switch (val) {
                case "frontend":
                    return !this.filters.frontend;
                case "backend":
                    return !this.filters.backend;
                case "career":
                    return !this.filters.career;
            }
        },

        all() {
            this.filters = {
                frontend: true,
                backend: true,
                career: true,
            };

            this.$emit('filters-changed', this.filters)
        },

        none() {
            this.filters = {
                frontend: false,
                backend: false,
                career: false,
            };

            this.$emit('filters-changed', this.filters)
        }
    }
}
</script>

<style scoped>

</style>
