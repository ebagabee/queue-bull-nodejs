import Mail from '../lib/Mail.js'

export default {
    key: "UserReport",
    async handle({ data }) {
        const { user } = data;

        console.log(user);
    },
}