const User = require("../Routes/user.route")


const get = (req, res) => {
    res.send("welcome to Page")
}

const getUsers = async (req, res) => {
    try {
        let data = await User.find()
        res.send(data)
    } catch (error) {
        res.status(500).send({ error: "Error fetching users" });
    }
}

const createUser = async (req, res) => {
    try {
        let { email } = req.body
        let user = await User.findOne({ email: email })

        if (user) {
            res.send({ msg: "user alredy exists", user })
        }
        else {
            let data = await User.create(req.body)
            res.send(data)
        }
    } catch (error) {
        res.status(500).send({ error: "Error creating user" });
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params
        let data = await User.findByIdAndUpdate(id, req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send({ error: "Error updating user" });
    }
}

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let data = await User.findByIdAndDelete(id, req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send({ error: "Error deleting user" });
    }
}



const loginPsge = (req, res) => {
    res.render("login")
}
const singupPage = (req, res) => {
    res.render("signup")
}
const homepage = (req, res) => {
    res.render("index")
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body

        let user = await User.findOne({ email: email })

        if (user) {
            if (user.password !== password) {
                res.send("wrong password")
            }
            else {
                res.send("login success full")
            }
        }
        else {
            res.status(404).send("user not found")
        }
    } catch (error) {
        res.status(500).send({ error: "Error logging in" });
    }
}

module.exports = { get, getUsers, createUser, updateUser, deleteUser, loginPsge, singupPage, homepage, login }