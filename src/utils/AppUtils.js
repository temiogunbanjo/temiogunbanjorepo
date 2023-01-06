class AppUtils {
  static fetchUserProfile = async () => {
    const userprofile = require("../data/userdata");
    return userprofile.data;
  };

  static fetchUserSkills = async (userUuid) => {
    const userskills = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(require("../data/userdata").skills);
        } catch (error) {
          reject(error);
        }
      }, 3000);
    });
    return userskills;
  };

  static fetchUserProject = async (userUuid) => {
    const userproject = new Promise((resolve) => {
      setTimeout(() => {
        resolve(require("../data/userdata").projects);
      }, 5000);
    });
    return userproject;
  };
}

export default AppUtils;
