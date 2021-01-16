<template>
    <v-row>
        <v-col offset="0" cols="12" md="6" offset-md="3">
            <v-card elevation="5">
                <v-card-title>
                    Register as a coach now!
                </v-card-title>

                <v-card-text>
                    <CoachForm @form-submitted="handleSubmit"/>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm";
import {mapActions} from "vuex";

export default {
    name: "CoachRegister",
    components: {CoachForm},
    methods: {
        handleSubmit(data) {
            this.registerCoach(data);
            this.$router.replace('/coaches');
        },

        ...mapActions('coaches', ['registerCoach']),
    }
}
</script>

<style scoped>

</style>
