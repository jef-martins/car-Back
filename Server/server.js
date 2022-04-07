const app = require("./services");
const car = require('../Routes/car');
const cors = require("cors");

app.use(cors());
app.use(car);

app.listen(8081, () => console.log("Server started in port 8081"));