const db = require('./db.json');

export const fetchAllProfiles = async () => {
  const time = 3500;
  // console.log(time);
  const profiles = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.profile;
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, time);
  });
  return profiles;
};

export const fetchUserProfile = async (userId) => {
  const time = Math.round((Math.random() * 3500)) + 19000;
  console.log(time);
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
    }, time);
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
    }, 1500);
  });
  return userskills;
};

export const fetchUserExperiences = async (userId) => {
  const userExp = new Promise((resolve, reject) => {
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
    }, 1500);
  });
  return userExp;
}

export const fetchUserEducation = async (userId) => {
  const userExp = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = db.education.find((each) => each.userId === userId);
        if (result) {
          resolve(result.data);
        } else {
          resolve(null);
        }
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
  return userExp;
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
    }, 1500);
  });
  return userproject;
};
