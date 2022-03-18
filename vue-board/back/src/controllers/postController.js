import Post from "../models/Post";

export const home = (req, res) => {
  Post.find({}, (error, posts) => res.send(posts));
};
export const upload = async (req, res) => {
  const { title, content } = req.body;
  try {
    await Post.create({
      title,
      content,
      createdAt: Date.now(),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.sendStatue(200);
  } catch (error) {
    return res.send(error);
  }
};
