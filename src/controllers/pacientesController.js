import Pacientes from "../models/Pacientes.js"
//Controlhe das rotas
const pacientesController = {
    async listarPacientes(req, res) {
        const listaDePacientes = await Pacientes.findAll()

        res.status(200).json(listaDePacientes)
    },
    async listarPacientesId(req, res) {
        const { id } = req.params
        const pacienteId = await Pacientes.findByPk(id)

        res.status(200).json(pacienteId)
    },
    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body

        const novoPaciente = await Pacientes.create({
            nome, email, idade
        })

        res.status(201).json(novoPaciente)
    },
    async atualizarPaciente(req, res) {
        const { id } = req.params
        const { nome, email, idade } = req.body

        const pacienteAtualizado = await Pacientes.update({
            nome,
            email,
            idade
        },
            {
                where: {
                    id
                }
            })

        res.status(200).json(pacienteAtualizado)
    },
    async deletarPaciente(req, res) {
        const { id } = req.params

        await Pacientes.destroy({
            where: {
                id
            }
        })

        res.json("Paciente Deletado!")
    }

}

export default pacientesController