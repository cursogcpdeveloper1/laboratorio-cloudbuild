const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('¡Hola desde Cloud Build + Cloud Run, modificando desde git!'));
app.listen(port, () => console.log(`App corriendo en el puerto ${port}`));
