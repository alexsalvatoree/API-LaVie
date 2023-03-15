import express from 'express'
import atendimentosController from '../controllers/atendimentosController.js'
import pacientesController from '../controllers/pacientesController.js'
import psicologosController from '../controllers/psicologosController.js'

const routes = express.Router()

routes.get('/', (req, res) => {
    console.log(req.query)
    res.send('Bem vindo a API da LaVie - Saude Mental')
})
//---- Rotas Psicologos ----

routes.get('/psicologos', psicologosController.listarPsicologos)
routes.get('/psicologos/:id', psicologosController.listarPsicologosId)
routes.post('/psicologos', psicologosController.cadastrarPsicologo)
routes.put('/psicologos/:id', psicologosController.atualizarPsicologo)
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo)

//---- Rotas Pacientes ----

routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacientesId)
routes.post('/pacientes', pacientesController.cadastrarPaciente)
routes.put('/pacientes/:id', pacientesController.atualizarPaciente)
routes.delete('/pacientes/:id', pacientesController.deletarPaciente)

//---- Rotas Atendimentos ----

routes.get('/atendimentos', atendimentosController.listarAtendimentos)
routes.get('/atendimentos/:id', atendimentosController.listarAtendimentoId)
routes.post('/atendimentos', atendimentosController.criarAtendimento)


export default routes