const reviewsController = {};
import reviewsModel from "../models/reviews.js";

reviewsController.getReview = async (req, res) => {
    const reviews = await 
    reviewsModel.find().populate('idClient')
    res.json(reviews)
}                   


//insert 


reviewsController.createReview = async (req, res) => {
    const {Comment, Rating, idClient} = req.body;
    const newReview = new reviewsModel({Comment, Rating, idClient})
    await newReview.save()
    res.json({message: "review saved"});
}
 


reviewsController.deleteReview = async (req, res) => {

    await reviewsModel.findOneAndDelete(req.params.id)
}

reviewsController.updateReview = async (req,res) => {

    const {Comment, Rating, idClient} = req.body;

    await reviewsModel.findByIdAndUpdate(req.params.id, {Comment, Rating, idClient}, {new: true});

    res.json({message: "product updated "})
}

export default reviewsController
;