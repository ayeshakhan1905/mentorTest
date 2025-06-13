const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },
    name : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String,
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    sessionTokens: [String],
})

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next()
    }
    try {
        const bcrypt = require("bcrypt")
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model("User", userSchema)