import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

  // Validar se token esta preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");
  // Validar se token é valido
  try {
    const { sub } = verify(token, "34140186b1d5406809584974c15d0d97");

    const userId = typeof sub === "string" ? sub : sub();

    request.user_id = userId;

    return next();
  } catch (e) {
    return response.status(401).end();
  }

  // Recuperar informações do usuário
}
