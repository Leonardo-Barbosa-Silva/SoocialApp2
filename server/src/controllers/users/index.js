import UsersModel from '../../models/users/index.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()


async function tokenGenerate(userID) {
    return await jwt.sign({ id: userID }, process.env.JWT_SECRET)
}

export default {
    // @desc Create a new user
    // @route POST v1/api/users/auth/register
    // @access Public
    register: async (req, res) => {
        try {
            const {
                firstName,
                lastName,
                email,
                password,
                picturePath,
                friends,
                location,
                occupation,
            } = req.body

            if (!firstName) {
                return res.status(400).json({ message: "First name not provided" })
            }
            if (!lastName) {
                return res.status(400).json({ message: "Last name not provided" })
            }
            if (!email) {
                return res.status(400).json({ message: "Email not provided" })
            }
            if (!password) {
                return res.status(400).json({ message: "Password not provided" })
            }

            const userExists = await UsersModel.findOne({ email })

            if (userExists) {
                return res.status(400).json({ message: "User already exists" })
            }

            const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt())

            const userCreated = await UsersModel.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                location,
                occupation,
                picturePath,
                friends,
                viewedProfile: Math.floor(Math.random() * 10000),
                impressions: Math.floor(Math.random() * 10000),
            })

            res.status(201).json({
                message: "User successfully created",
                item: {
                    _id: userCreated._id,
                    firstName: userCreated.firstName,
                    lastName: userCreated.lastName,
                    email: userCreated.email,
                    picturePath: userCreated.picturePath,
                    friends: userCreated.friends,
                    location: userCreated.location,
                    occupation: userCreated.ocupation,
                    viewedProfile: userCreated.viewedProfile,
                    impressions: userCreated.impressions,
                    token: await tokenGenerate(userCreated._id)
                }
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        }
    },

    //@desc Login user
    //@route POST v1/api/users/auth/login
    //@access Public
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            if (!email) {
                return res.status(400).json({ message: "Email not provided" })
            }
            if (!password) {
                return res.status(400).json({ message: "Password not provided" })
            }

            const user = await UsersModel.findOne({ email })

            if (!user || (!await bcrypt.compare(password, user.password))) {
                return res.status(400).json({ message: "Invalid credentials" })
            }

            res.status(200).json({
                message: "User successfully logged",
                item: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    location: user.location,
                    picturePath: user.picturePath,
                    friends: user.friends,
                    occupation: user.occupation,
                    viwedProfile: user.viwedProfile,
                    impressions: user.impressions,
                    token: await tokenGenerate(user._id)
                }
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "Internal server error" })
        }
    },

    //@desc Get user data
    //@route GET v1/api/users/me
    //@access Private
    user: async (req, res) => {
        res.status(200).json({
            item: "User data"
        })
    }
}