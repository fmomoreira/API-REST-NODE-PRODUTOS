import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.registerUser(email, password);
    const tokens = authService.generateTokens(user.id);

    res.status(201).json({
      message: 'User registered successfully',
      ...tokens
    });
  } catch (error: any) {
    if (error.message === 'Email already registered') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error registering user' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);
    const tokens = authService.generateTokens(user.id);

    res.json(tokens);
  } catch (error: any) {
    if (error.message === 'Invalid credentials') {
      return res.status(401).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error logging in' });
  }
};
