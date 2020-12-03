const { gql } = require('apollo-server');

const typeDefs = gql`
    # My schema will go here

    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBoocked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]!
        token: String
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    enum PatchSize {
        SMALL
        LARGE
    }

    type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
        me: User
    }

    type Mutation {
        bookTrips(launchsIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchID: ID!): TripUpdateResponse!
        login(email: String): User
    }

    type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]!
    }
`;


module.exports = typeDefs;