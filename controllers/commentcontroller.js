import { createError } from "../error.js";
import Comments from "../models/comments.js";
import Video from "../models/video.js";
export const addComments = async (req, res,next)=>{
    const comments = new Comments({...req.body ,userId: req.user.id})
    try {
        const saveComments = await comments.save() ;
        res.status(200).json(saveComments)
    
    } catch (error) {
        next(error)
    }
}

export const Deletecomments = async (req, res, next) => {
    try {
        const comment = await Comments.findById(req.params.id);
        const video = await Video.findById(req.params.videoId);  // Ensure video ID is passed correctly

        // if (!comment || !video) {
        //     return next(createError(404, "Comment or video not found"));
        // }

        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comments.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Comment deleted successfully" });
        } else {
            return next(createError(403, "You can delete only your comment!"));
        }
    } catch (err) {
        next(err);
    }
};

export const Getcomments = async (req, res,next)=>{
try {
    const comments = await Comments.find({ videoId: req.params.videoId });
    return res.status(200).json(comments);
    
} catch (error) {
    next(error)
}


}