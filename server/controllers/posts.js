import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();
        res.status(200).send(postMessages)

    } catch (error) {
        res.status(408).json({ message: error.message })
    }
}

export const createPost = (req, res) => {
    res.send('post creation')
}