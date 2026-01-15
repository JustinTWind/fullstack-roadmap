import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: `El Resultado de la resta de los parámetros es: ${
      req.parsedA! - req.parsedB!
    }`,
  });
});

export default router;
