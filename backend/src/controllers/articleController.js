const Article = require("../models/articleModel");

// Récupérer tous les articles
exports.getArticles = async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
};

// Ajouter un article
exports.addArticle = async (req, res) => {
  const { nom, prix, categorie } = req.body;
  const newArticle = new Article({ nom, prix, categorie });
  await newArticle.save();
  res.status(201).json(newArticle);
};

// Modifier un article
exports.updateArticle = async (req, res) => {
  const { id } = req.params;
  const updated = await Article.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// Supprimer un article
exports.deleteArticle = async (req, res) => {
  const { id } = req.params;
  await Article.findByIdAndDelete(id);
  res.json({ message: "Article supprimé" });
};
