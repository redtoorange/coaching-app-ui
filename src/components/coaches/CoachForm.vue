<template>
    <v-form ref="form" @submit.prevent="submitForm">
        <v-text-field
            v-model="firstName"
            :rules="firstNameRules"
            label="First Name"
            required
        ></v-text-field>

        <v-text-field
            v-model="lastName"
            :rules="lastNameRules"
            label="Last Name"
            required
        ></v-text-field>

        <v-slider
            v-model="hourlyRate"
            class="align-center"
            max="200"
            min="0"
            hide-details
            label="Hourly Rate"
        >
            <template slot="append">
                <v-text-field
                    v-model="hourlyRate"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                ></v-text-field>
            </template>
        </v-slider>

        <v-textarea
            v-model="description"
            label="Description"
            required
        ></v-textarea>


        <div>
            <h3>Areas of Specialty</h3>
            <v-row>
                <v-col v-for="a in areaCheckboxes" :key="a.value">
                    <v-checkbox
                        v-model="areas"
                        :label="a.label"
                        :value="a.value"
                    ></v-checkbox>
                </v-col>
            </v-row>
        </div>

        <v-btn
            class="mr-4"
            type="submit"
        >
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: "CoachForm",
    emits: ['form-submitted'],

    data: () => ({
        firstName: '',
        firstNameRules: [
            v => !!v || 'Name is required',
        ],

        lastName: '',
        lastNameRules: [
            v => !!v || 'Name is required',
        ],
        hourlyRate: 0,
        description: '',
        areas: [],
        areaCheckboxes: [
            {label: "Frontend", value: "frontend"},
            {label: "Backend", value: "backend"},
            {label: "Career", value: "career"},
        ]
    }),

    methods: {
        clear() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        },

        submitForm() {
            const coachData = {
                firstName: this.firstName,
                lastName: this.lastName,
                areas: this.areas,
                description: this.description,
                hourlyRate: this.hourlyRate
            };

            this.$emit('form-submitted', coachData);
        }
    }
}
</script>

<style scoped>

</style>
