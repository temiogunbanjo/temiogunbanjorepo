const db = require('./db.json');

export const fetchUserProfile = async (userId) => {
  const profile = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.profile.find((each) => each.id === userId);
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
  return profile;
};

export const fetchUserSkills = async (userId) => {
  const userskills = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.skills.find((each) => each.userId === userId);
        if (result) {
          resolve(result.data);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
  return userskills;
};

export const fetchUserExperiences = async (userId) => {
  const userskills = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.experiences.find((each) => each.userId === userId);
        if (result) {
          resolve(result.data);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
  return userskills;
}

export const fetchUserProject = async (userId) => {
  const userproject = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.projects.find((each) => each.userId === userId);
        if (result) {
          resolve(result.data);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
  return userproject;
};
