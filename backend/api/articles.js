import articleController from "../src/controllers/articleController.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    return articleController.getArticles(req, res);
  }
  if (req.method === "POST") {
    return articleController.addArticle(req, res);
  }
  if (req.method === "PUT") {
    return articleController.updateArticle(req, res);
  }
  if (req.method === "DELETE") {
    return articleController.deleteArticle(req, res);
  }

  res.status(405).json({ error: "Method not allowed" });
}
