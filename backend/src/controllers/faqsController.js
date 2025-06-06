import faqs from "../models/faqs.js";
import faqsModel from "../models/faqs.js";

const faqsController = {};

faqsController.getFaqs = async (req, res) => {
  try {
    const faqs = await faqsModel.find();
    res.json(faqs);
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json(faqs)({ message: "Internal server error" });
  }
};

faqsController.insertFaqs = async (req, res) => {
  const { question, answer, level, isActive } = req.body;
  try {
    if (!question || !answer || !level || !isActive) {
      return res.status(400).json({ message: "Plesase write all the fields" });
    }

    if (level < 1 || level > 10) {
      return res
        .status(400)
        .json({ message: "Please insert a valid level number" });
    }

    if (question.length < 4 || answer.length > 4) {
      return res.status(400).json({ message: "Too short" });
    }

    const newFaq = new faqsModel({ question, answer, level, isActive });

    newFaq.save();
    res.status(200).json({ message: "Faq saved" });
  } catch (error) {
    console.log("error" + error);
    res.status(500).json(faqs)({ message: "Internal server error" });
  }
};

faqsController.updateFaqs = async (req, res) => {
  const { question, answer, level, isActive } = req.body;

  try {
    if (level < 1 || level > 10) {
      return res
        .status(400)
        .json({ message: "Please insert a valid level number" });
    }

    if (question.length < 4 || answer.length > 4) {
      return res.status(400).json({ message: "Too short" });
    }

    const faqsUpdated = await faqsModel.findByIdAndUpdate(
      req.params.id,
      { question, answer, level, isActive },
      { new: true }
    );

    if (!faqsUpdated) {
      return res.status(400).json({ message: "faqs not found" });
    }

    res.status(200).json({ message: "faqs updated" });
  } catch (error) {
    console.log("error" + error);
    res.status(500).json(faqs)({ message: "Internal server error" });
  }
};

faqsController.deleteFaqs = async (req, res) => {
  try {
    const deleteFaqs = await faqsModel.findByIdAndDelete(req.params.id);
    if (!deleteFaqs) {
      return res.status(400).json({ message: "faqs not found" });
    }
  } catch (error) {
    console.log("error" + error);
    res.status(500).json(faqs)({ message: "Internal server error" });
  }
};

export default faqsController;