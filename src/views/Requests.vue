<template>
    <v-row>
        <v-col cols="12" lg="10" offset-lg="1">
            <v-card v-if="requests.length > 0">
                <v-list-item-group>
                    <div  v-for="r in requests" :key="r.id">
                        <RequestItem  :request="r"></RequestItem>
                        <v-divider></v-divider>
                    </div>
                </v-list-item-group>

            </v-card>

            <h3 v-else>
                No Requests Received
            </h3>
        </v-col>

    </v-row>
</template>

<script>
import {mapGetters} from "vuex";
// import store from "@/store";
import RequestItem from "@/components/requests/RequestItem";

export default {
    name: "RequestList",
    components: {RequestItem},
    computed: {
        requests(getters) {
            // return getters.getRequests(getters.userId);
            return getters.allRequests;
        },

        ...mapGetters(['userId']),
        ...mapGetters('requests', ['getRequests', 'allRequests'])
    },

    beforeRouteEnter(to, from, next) {
        // if (!store.getters["coaches/isCoach"]) {
        //     next('/');
        // }

        next();
    }
}
</script>

<style scoped>

</style>
