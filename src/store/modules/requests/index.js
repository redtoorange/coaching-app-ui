const requests = {
    namespaced: true,
    state: {
        requests: [
            {id: 0, coachId: 0, message: 'Test', email: 'test@gmail.com'},
            {id: 1, coachId: 0, message: 'Test', email: 'test@gmail.com'},
            {id: 2, coachId: 0, message: 'Test', email: 'test@gmail.com'},
            {id: 3, coachId: 0, message: 'Test', email: 'test@gmail.com'},
        ]
    },

    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        }
    },

    actions: {
        submitRequest(context, payload) {
            context.commit('addRequest', {id: context.state.requests.length, ...payload});
        }
    },

    getters: {
        allRequests: state => state.requests,
        getRequests: state => id => state.requests.filter(r => r.coachId === id),
    }
}

export default requests;
