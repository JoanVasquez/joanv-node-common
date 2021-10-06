import { Request, Response, NextFunction } from "express";
import { throwError } from "../errors/error.exception";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    next(throwError(401, "Not Authorized"));
  }

  next();
};
