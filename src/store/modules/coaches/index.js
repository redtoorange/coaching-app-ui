import AxiosClient from "@/util/AxiosClient";

const coaches = {
    namespaced: true,
    state: {
        coaches: [
            {
                id: '1',
                firstName: 'Zakary ',
                lastName: 'Lovell',
                areas: ['frontend', 'backend', 'career'],
                description:
                    "I'm Zakary and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
            },
            {
                id: '2',
                firstName: 'Sumaya ',
                lastName: 'Sanchez',
                areas: ['frontend', 'career'],
                description:
                    'I am Sumaya and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            },
            {
                id: '3',
                firstName: 'Leela ',
                lastName: 'Mcmanus',
                areas: ['backend', 'career'],
                description:
                    'I am Leela and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            },
            {
                id: '4',
                firstName: 'Joey ',
                lastName: 'Power',
                areas: ['backend'],
                description:
                    'I am Power and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            },
            {
                id: '5',
                firstName: 'Austin ',
                lastName: 'Coffey',
                areas: ['career'],
                description:
                    'I am Austin and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            },
            {
                id: '6',
                firstName: 'Saba ',
                lastName: 'Waters',
                areas: ['frontend'],
                description:
                    'I am Saba and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            }
        ]
    },

    mutations: {
        addCoach: (state, payload) => {
            state.coaches.push(payload);
        }
    },

    actions: {
        async registerCoach(context, data) {
            const response = await AxiosClient.post('/api/coach', JSON.stringify(data), );

            if(response.status === 200){
                context.commit('addCoach', response.data);
            }
        }
    },
    getters: {
        coaches: state => state.coaches,

        hasCoaches: state => state.coaches && state.coaches.length > 0,

        isCoach(state, getters, rootState) {
            const coaches = getters.coaches;
            const userId = rootState.userId;

            return coaches.some(c => c.id === userId)
        }
    }
}

export default coaches;
