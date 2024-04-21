import mongoose from 'mongoose';


const Connection = async (username,password) =>{
    const URL =`mongodb://${username}:${password}@ac-d0xgprk-shard-00-00.lwnr4rf.mongodb.net:27017,ac-d0xgprk-shard-00-01.lwnr4rf.mongodb.net:27017,ac-d0xgprk-shard-00-02.lwnr4rf.mongodb.net:27017/?ssl=true&replicaSet=atlas-rs4r8k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try{

        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ',error);
    }
};


export default Connection;

//, { useNewUrlParser: true}