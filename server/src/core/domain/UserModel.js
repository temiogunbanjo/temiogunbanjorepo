/**
 * @class
 *
 */
class User {
  /**
   *
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} password
   */
  constructor(email, firstName, lastName, phone, password) {
    this.email = email;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}

export default User;
