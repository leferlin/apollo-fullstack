module.exports = {
    Query: {
        launches: (_, __, { dataSources }) => 
            dataSources.launchesAPI.getAllLaunches(),
        launch: (_, { id }, { dataSources }) => 
            dataSources.launchesAPI.getLaunchById({ launchId: id }), 
        me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
};