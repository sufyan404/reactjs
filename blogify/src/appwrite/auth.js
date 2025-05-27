import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // eslint-disable-next-line no-unused-vars
  async createAccount({ email, password, name }) {
    const userAccount = await this.account.create(ID.unique(), email, password);
    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async logOut() {
    return await this.account.deleteSessions();
  }
}

const authService = new AuthService();
export default authService;

// import conf from "../conf/conf.js";
// import { Client, Account, ID } from "appwrite";
// export class AuthService {
//   client = new Client();
//   account;
//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);
//     this.account = new Account(this.client);
//   }
//   // eslint-disable-next-line no-unused-vars
//   async createAccount({ email, password, name }) {

//       const userAccount = await this.account.create(
//         ID.unique(),
//         email,
//         password
//       );
//       if (userAccount) {
//         return this.login({ email, password });
//       } else {
//         return userAccount;
//       }

//   }
//   async login({ email, password }) {

//       return await this.account.createEmailPasswordSession(email, password);

//   }
//   async getCurrentUser() {

//       return await this.account.get();

//   }
//   async logOut() {

//       return await this.account.deleteSessions();

//   }
// }

// const authService = new AuthService();
// export default authService;
