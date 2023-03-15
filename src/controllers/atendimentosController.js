import Atendimentos from "../models/Atendimentos.js"

const atendimentosController = {
    async listarAtendimentos(req, res) {
        const listaDeAtendimentos = await Atendimentos.findAll()

        res.status(200).json(listaDeAtendimentos)
    },
    async listarAtendimentoId(req, res) {
        const { id } = req.params
        const atendimentoId = await Atendimentos.find(id)

        res.status(200).json(atendimentoId)
    },
    async criarAtendimento(req, res) {
        const { id_paciente, data_nascimento, observacao } = req.body

        const novoAtendimento = await Atendimentos.create({
            id_paciente, data_nascimento, observacao
        })

        res.status(201), json('Atendimento Registrado')
    }
}

export default atendimentosController