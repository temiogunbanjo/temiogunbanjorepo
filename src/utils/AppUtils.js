class AppUtils {
    static fetchUserProfile = async () => {
        const userprofile = require('../data/userdata');
        return userprofile.data;
    };

    static fetchUserSkills = async (userUuid) => {
        const userSkills = require('../data/userdata');
        return userSkills.skills;
    };

    static fetchUserProject = async (userUuid) => {
        const userSkills = require('../data/userdata');
        return userSkills.projects;
    };
}

export default AppUtils;
