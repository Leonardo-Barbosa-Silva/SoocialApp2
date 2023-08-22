import PostsModel from '../../models/posts/index.js';
import UsersModel from '../../models/users/index.js';


export default {
    // @desc Create a new post
    // @route POST v1/api/posts/create
    // @access Private
    create: async (req, res) => {
        try {
            const user = req.user

            if (!user._id) {
                return res.status(400).json({ message: "User not found" })
            }
            
            const { description, picturePath, location } = req.body

            if (!description && !picturePath) {
                return res.status(400).json({ message: "Data not send" })
            }

            const postCreated = await PostsModel.create({
                author: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                location,
                description,
                userPicturePath: user.picturePath,
                picturePath,
                likes: {},
                comments: []
            })

            res.status(201).json({
                message: "Post successfully created",
                item: postCreated
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        }
    },
    
    // @desc Get own posts
    // @route GET v1/api/posts/my
    // @access Private
    getMyPosts: async (req, res) => {
        try {
            const user = req.user

            if (!user._id) {
                return res.status(400).json({ message: "User not found" })
            }

            const posts = await PostsModel.find({ author: user._id })

            res.status(200).json({
                message: "Get posts successfully",
                item: posts
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        }
    },

    // @desc Get own feed posts
    // @route GET v1/api/posts/my/feed
    // @access Private
    getMyFeed: async (req, res) => {
        try {
            const user = req.user

            if (!user._id) {
                return res.status(400).json({ message: "User not found" })
            }

            const myPosts = await PostsModel.find({ author: user._id })

            const friendsPostsArrays = await Promise.all(
                user.friends.map( id => PostsModel.find({ author: id }) )
            )

            const friendsPosts = friendsPostsArrays.flat()

            const posts = [ ...myPosts, ...friendsPosts ]

            const postsOrdened = posts.sort( (a, b) => new Date(b.createdAt) - new Date(a.createdAt) )

            res.status(200).json({
                message: "Get user feed posts successfully",
                item: postsOrdened
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        }
    },

    // @desc Get user posts
    // @route GET v1/api/posts/user/:userId
    // @access Private
    getUserPosts: async (req, res) => {
        try {
            const user = req.user;

            if (!user._id) {
                return res.status(401).json({ message: "User not authenticate" });
            };

            const targetUser = await UsersModel.findById(req.params.id);

            if (!targetUser) {
                return res.status(404).json({ message: "User not found" });
            };

            const userPosts = await PostsModel.find({ author: req.params.userId });

            res.status(200).json({
                message: "Get user posts successfully",
                item: userPosts
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" })
        }
    },
}