import Post from "../models/Post";

export const home = (req, res) => {
  Post.find({}, (error, posts) => res.send(posts));
};

export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("see", { pageTitle: `See ${video.title}` });
};
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
