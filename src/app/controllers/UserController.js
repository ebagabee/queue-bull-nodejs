import Mail from "../lib/Mail.js";

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password
        };

        // Adicionar Job RegistrationMail na Fila

        return res.json(user);
    }
}