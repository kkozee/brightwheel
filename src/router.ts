import { Router, Request, Response } from 'express';
import emailHandler from './handlers/email';
import emailValidator from './schemas/email';

const router = Router();

router.get('/health', (req: Request, res: Response) => res.send('All is well!'));

router.post('/email', emailValidator, emailHandler);

export default router;