<template>
    <div>
        <v-card v-if="!messageSent">
            <v-card-title>
                Contact
            </v-card-title>

            <v-card-text>
                <v-form ref="contactForm">
                    <v-text-field
                        v-model="email"
                        label="email"
                        type="email"
                        required
                    ></v-text-field>

                    <v-textarea
                        v-model="message"
                        label="Message"
                        rows="5"
                        required
                    ></v-textarea>

                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn type="submit" @click="sendMessage">Send Message</v-btn>
                <v-btn @click="clear" absolute right color="red">Clear</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="messageSent">
            <v-card-title>
                Message Submitted
            </v-card-title>
        </v-card>
    </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "ContactCoach",

    data: () => ({
        email: '',
        message: '',
        messageSent: false,
    }),

    props: ['id'],

    methods: {
        sendMessage() {
            const request = {
                coachId: this.id,
                email: this.email,
                message: this.message
            }

            this.submitRequest(request);
            this.messageSent = true;
        },

        clear() {
            this.$refs.contactForm.reset();
        },

        ...mapActions('requests', ['submitRequest'])
    }
}
</script>

<style scoped>

</style>
