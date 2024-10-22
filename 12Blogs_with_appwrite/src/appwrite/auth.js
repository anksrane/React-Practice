import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }

    // Sign Up Method
    async createAccount({email,password,name}){
        try {
            const userAccount= await this.account.create(ID.unique() ,name,email,password);
            if (userAccount) {
                // call another method
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;            
        }
    }

    // Login Method
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
            throw error;
        }
    }

    // Check User is Logged in
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    // logout method
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}
const authService=new AuthService();
export default authService;