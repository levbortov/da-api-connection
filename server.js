import app from './src/app.js'
import { port } from './src/consfig.js'

app.listen(port, () => {
    console.log(`🗄️ приложение запущено на порту ${port}`)
})
