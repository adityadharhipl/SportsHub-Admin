// Temporary minimal validation until Zod or Joi is added
export const validateRegister = (req: any, res: any, next: any) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Email, password, and name are required' });
  }
  next();
};

export const validateLogin = (req: any, res: any, next: any) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  next();
};
