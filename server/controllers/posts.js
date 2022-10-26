import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).send(postMessages)
    } catch (error) {
        res.status(408).send({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.statuts(200).send(newPost);
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}