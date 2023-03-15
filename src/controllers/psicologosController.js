import Psicologos from "../models/Psicologos.js"

//Controlhe das rotas
const psicologosController = {
    async listarPsicologos(req, res) {
        const listaDePsicologos = await Psicologos.findAll()

        res.status(200).json(listaDePsicologos)
    },
    async listarPsicologosId(req, res) {
        const { id } = req.params
        const psicologoId = await Psicologos.findByPk(id)

        res.status(200).json(psicologoId)
    },
    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentacao } = req.body

        const novoPsicologo = await Psicologos.create({
            nome, email, senha, apresentacao
        })

        res.status(201).json(novoPsicologo)
    },
    async atualizarPsicologo(req, res) {
        const { id } = req.params
        const { nome, email, senha, apresentacao } = req.body

        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha,
            apresentacao
        },
            {
                where: {
                    id
                }
            })

        res.status(200).json(psicologoAtualizado)
    },
    async deletarPsicologo(req, res) {
        const { id } = req.params

        await Psicologos.destroy({
            where: {
                id
            }
        })

        res.json("Produto deletado !")
    }

}

export default psicologosController