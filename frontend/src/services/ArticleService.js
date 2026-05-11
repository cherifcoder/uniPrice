const API_URL = "http://localhost:5000/articles";

export const getArticles = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addArticle = async (article) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
  return res.json();
};

export const updateArticle = async (id, article) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  });
  return res.json();
};

export const deleteArticle = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
