const app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(80, () => console.log('Servidor online')
)