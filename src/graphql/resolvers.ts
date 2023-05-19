import { countryData, prisma } from '../datasources';

export const resolvers = {
  Query: {
    async teamMembers() {
      return await prisma.team.findMany();
    },
  },

  TeamMember: {
    async locationInformation({ location }) {
      const countryInfo = countryData.find(
        (country) => country.name.toLowerCase() === location.toLowerCase()
      );
      return countryInfo || null;
    },
  },

  Mutation: {
    async addTeamMember(_, { teamMember: { id, name, team, role, location } }) {
      const teamMember = {
        id: Number(id),
        name: name,
        team: team,
        role: role,
        location: location,
      };
      return prisma.team.create({ data: teamMember });
    },

    async deleteTeamMember(_, { id }) {
      await prisma.team.delete({ where: { id: Number(id) } });
      return true;
    },

    async editTeamMember(
      _,
      { id, teamMember: { name, team, role, location } }
    ) {
      const teamMember = {
        id: Number(id),
        name: name,
        team: team,
        role: role,
        location: location,
      };
      return prisma.team.update({
        where: { id: Number(id) },
        data: teamMember,
      });
    },
  },
};
