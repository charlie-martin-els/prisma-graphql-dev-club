import { PrismaClient } from '@prisma/client';
import { teamData } from '../data';
const prisma = new PrismaClient();

const databaseSeeding = async () => {
  await prisma.team.createMany({
    data: teamData.map((teamMember) => ({
      id: teamMember.id,
      name: teamMember.name,
      team: teamMember.team,
      role: teamMember.role,
      location: teamMember.location,
    })),
  });
};

databaseSeeding()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
