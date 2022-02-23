// import { NestMiddleware } from "@nestjs/common";
// import { NextFunction, Request, Response } from "express";

// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log('Request...');

//         next();
//     }
// }

/* Criando um middleware como funcao usado quando o middleware nao precisar
de dependencias*/
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};