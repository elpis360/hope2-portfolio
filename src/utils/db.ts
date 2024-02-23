import mongoose from "mongoose";

const useDbService = () => {
    const connection: any = {};

    const connect = async () => {
        if (connection.isConnected) {
            console.log("already connected")
            return;
        }
        if (mongoose.connections.length > 0) {
            connection.isConnected = mongoose.connections[0].readyState
            if (connection.isConnected === 1) {
                console.log("use previous connection",mongoose.connections[0].name)
                return;
            }
            mongoose.disconnect
        }
        const db = await mongoose.connect(process.env.MONGODB_URI!!)
        console.log("new connection")
        connection.isConnection = db.connections[0].readyState
    }
    const disconnect = async () => {
        if (connection.isConnected) {
            if (process.env.NODE_ENV === "production") {
                await mongoose.disconnect();
                connection.isConnected = false;
            }
        }
    }
    return { connect, disconnect }

}

export default useDbService