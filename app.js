import express from 'express'
import despesasRouter from './router/UsuarioRouter.js';

const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//API para testar se a URL está no ar (http://localhost:3000)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/despesas', despesasRouter)

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`)
})



