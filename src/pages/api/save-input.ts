import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, lastName, email, birthdate, phoneNumber, password } = req.body;

    try {
      console.log("hola")
      const savedInput = await prisma.formData.create({
        data: { 
          name,
          lastName,
          email,
          birthdate: new Date(birthdate),
          phoneNumber, 
          password,
        },
      });
      res.status(200).json(savedInput);
    } catch (error) {
      res.status(500).json({ error: 'Error saving input value' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}