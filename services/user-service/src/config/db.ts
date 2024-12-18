import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`[User-service :: Database] Established connection with MongoDB @${conn.connection.host}`)
    } catch (error) {
        console.error("[User-service :: Database] Error establishing connection with MongoDB");
        process.exit(1)
    }
}

export default connectDb