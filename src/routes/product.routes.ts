import { Router } from 'express';
import { listProducts, createProduct } from '../controllers/product.controller';
import { authenticate } from '../middlewares/auth';
import { validate } from '../validations/validate';
import { productSchema } from '../validations/schemas';

const router = Router();

router.get('/', authenticate, listProducts);
router.post('/', authenticate, validate(productSchema), createProduct);

export default router;
