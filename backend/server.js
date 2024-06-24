import "dotenv/config";
import app from "./src/app.js";
import cors from 'cors';

app.use(cors({
  origin: 'http://localhost:5173'
}));

// const port = process.env.PORT || 3001;
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});