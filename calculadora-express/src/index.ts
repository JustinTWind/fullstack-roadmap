import Express from "express";
import rutaSuma from "../routes/suma.route.ts";
import rutaResta from "../routes/resta.route.ts";
import rutaMultiplicacion from "../routes/multiplicacion.route.ts";
import rutaDivision from "../routes/division.route.ts";
import {
  errorHandlerMiddleware,
  verifyQueryParamsMiddleware,
} from "../middlewares/middlewares.ts";

const app = Express();

app.use(verifyQueryParamsMiddleware);

app.use("/api/suma", rutaSuma);
app.use("/api/resta", rutaResta);
app.use("/api/multiplicacion", rutaMultiplicacion);
app.use("/api/division", rutaDivision);

app.use(errorHandlerMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor Corriendo 🚀");
});
