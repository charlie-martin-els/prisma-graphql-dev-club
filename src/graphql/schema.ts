export const typeDefs = `#graphql

type TeamMember {
    id: ID!
    name: String!
    team: String!
    role: String!
    location: String!
    locationInformation: LocationInformation
}

type LocationInformation {
    name: String
    countryCode: String
    languageSpoken: String
    capital: String
}

type Query {
    teamMembers: [TeamMember]!
    locationInformation(location: String!): LocationInformation
}

input TeamMemberInput {
    id: ID!
    name: String!
    team: String!
    role: String!
    location: String!
}

type Mutation {
    addTeamMember(teamMember: TeamMemberInput): TeamMember!
    deleteTeamMember(id: ID!): Boolean!
    editTeamMember(id: ID!, teamMember: TeamMemberInput): TeamMember!
}
`;
