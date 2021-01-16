<template>
    <v-app>
        <v-navigation-drawer app temporary v-model="navBar">
            <v-list nav>
                <v-list-item-group>
                    <v-list-item to="/coaches">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Coaches</v-list-item-title>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item text to="/requests" v-if="isCoach">
                        <v-list-item-icon>
                            <v-icon>mdi-bell</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Requests</v-list-item-title>
                    </v-list-item>

                    <v-list-item text to="/register" v-if="!isCoach">
                        <v-list-item-icon>
                            <v-icon>mdi-account-plus</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="purple darken-2"
            dark
        >
            <v-app-bar-nav-icon @click="navBar = true"></v-app-bar-nav-icon>

            <v-toolbar-title class="v-btn--text ma-5">
                <h2>
                    Coach Finder
                </h2>
            </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: 'App',

    data() {
        return {
            navBar: false
        };
    },

    computed: {
        ...mapGetters('coaches', ['isCoach'])
    }
};
</script>
