import conf from '../conf/config';
import {Client, Account, ID, Databases, Storage, Query} from 'appwrite';

export class PostService{

    client = new Client
    account
    database 
    bucket

    constructor(){
        this.client.
        setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredimage,status,userid}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userid
                }
            )
        } catch (error) {
            throw(error)
        }
    }

    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }
            )
        } catch (error) {
            throw(error)
        }
    }    

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw(error)
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug                
            )
        } catch (error) {
            throw(error)
        }
    }

    async getPostList(
        queries = [Query.equal("status", "active")]
    ){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            throw(error)
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw(error)
            return false
        }
    }

    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid,
            )
            return true
        } catch (error) {
            throw(error)
        }
    }

    getfilePreview(fileid){

            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileid
            )

    }


}

const postService = new PostService()


export default postService