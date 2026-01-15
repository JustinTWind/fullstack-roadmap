import { type Request, type Response, type NextFunction } from "express";
import { ApiError, badRequestError } from "../utils/errors.utils.js";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response
) => {
  console.error("ERROR:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: "Error interno del servidor." });
};

export const verifyQueryParamsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { a, b } = req.query;

    if (!a || !b || Array.isArray(a) || Array.isArray(b)) {
      throw new badRequestError(
        "Alguno de los parámetros no fue entregado o es inválido"
      );
    }

    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new badRequestError("Los parámetros deben ser números válidos");
    }

    req.parsedA = numA;
    req.parsedB = numB;

    next();
  } catch (error) {
    next(error);
  }
};

declare module "express-serve-static-core" {
  interface Request {
    parsedA?: number;
    parsedB?: number;
  }
}
