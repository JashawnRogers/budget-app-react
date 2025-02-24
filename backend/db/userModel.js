import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a name to show on your dashboard."],
        unique: false
    },
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        unique: false
    }
})

export default mongoose.model.Users || mongoose.model("Users", UserSchema)