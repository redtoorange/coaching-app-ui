<template>
    <div>
        Users
        <ul>
            <li v-for="u in users" :key="u.id">{{ u.firstName }}</li>
        </ul>
    </div>
</template>

<script>
// import Axios from "axios";
// import store from "@/store";

export default {
    name: "UserTest",

    data() {
        return {
            users: []
        };
    },

    beforeMount() {
        // const that = this;
        //
        // if (store.getters.isAuthed) {
        //     Axios.get('http://localhost:5000/api/users', {headers: store.state.requestHeader})
        //         .then(response => that.users = response.data)
        // } else {
        //     store.dispatch('authenticate')
        //         .then(() => Axios.get('http://localhost:5000/api/users', {headers: store.state.requestHeader})
        //             .then(response => that.users = response.data)
        //         )
        // }
    }
}
</script>

<style scoped>

</style>
