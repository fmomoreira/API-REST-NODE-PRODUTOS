import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, code } = req.body;

    const existingProduct = await prisma.product.findUnique({
      where: { code }
    });

    if (existingProduct) {
      return res.status(400).json({ message: 'Product code already exists' });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        code
      }
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
};
