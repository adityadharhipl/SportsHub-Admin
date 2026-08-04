import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  const hashedPassword = await bcrypt.hash('Admin@123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sportshub.local' },
    update: {},
    create: {
      email: 'admin@sportshub.local',
      password: hashedPassword,
      name: 'Super Admin',
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@sportshub.local' },
    update: {},
    create: {
      email: 'user@sportshub.local',
      password: await bcrypt.hash('User@123', 10),
      name: 'Test User',
      role: 'USER',
    },
  });

  console.log({ admin, user });
  console.log('Database seeded successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
