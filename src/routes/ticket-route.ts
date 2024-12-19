import { Router, Request, Response, NextFunction} from 'express';
import PrismaHandler from '../PrismaHandler';
const router = Router();

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const db = PrismaHandler.getInstance();
    res.json();
  } catch (error: unknown) {
    console.log(error);
  }
})


export default router;