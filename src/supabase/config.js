// import { MongoClient } from "mongodb";

// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);

// const connectDB =  async () => {
//     try {
//         await client.connect();
//         console.log("✅ MongoDB connected");
//         return client.db("fashion");
//     } catch (error) {
//         console.log("database is not connected !!!!!");
        
//     }
// }

// export default connectDB;


import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbInstance = null;

const connectDB = async () => {
  try {
    if (!dbInstance) {
      await client.connect();
      console.log("✅ MongoDB connected");
      dbInstance = client.db("fashion");
    }
    return dbInstance;
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
