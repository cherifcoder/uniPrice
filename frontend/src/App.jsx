import { useEffect, useState } from "react";
import { getArticles, addArticle, updateArticle, deleteArticle } from "./services/articleService";
import SearchBar from "./components/SearchBar";
import AddArticleForm from "./components/AddArticleForm";
import EditArticleForm from "./components/EditArticleForm";

function App() {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  // Charger les articles au démarrage
  useEffect(() => {
    getArticles().then(data => setArticles(data));
  }, []);

  // Ajouter un article
  const handleAddArticle = async (newArticle) => {
    const saved = await addArticle(newArticle);
    setArticles([...articles, saved]);
    setShowForm(false);
  };

  // Modifier un article
  const handleUpdateArticle = async (id, updated) => {
    const saved = await updateArticle(id, updated);
    setArticles(articles.map(a => a._id === id ? saved : a));
    setEditingArticle(null); // fermer le formulaire après modification
  };

  // Supprimer un article
  const handleDeleteArticle = async (id) => {
    await deleteArticle(id);
    setArticles(articles.filter(a => a._id !== id));
  };

  return (
    <div className="flex flex-col items-center gap-9">
      {/* Barre de recherche et liste */}
      <SearchBar 
        articles={articles} 
        onOpenForm={() => setShowForm(true)} 
        onDelete={handleDeleteArticle} 
        openEditForm={(article) => setEditingArticle(article)}
         onDelete={handleDeleteArticle} 
      />
 

      {/* Formulaire d’ajout */}
      {showForm && (
        <AddArticleForm 
          onAdd={handleAddArticle} 
          onClose={() => setShowForm(false)} 
        />
      )}

      {/* Formulaire d’édition */}
      {editingArticle && (
        <EditArticleForm 
          article={editingArticle} 
          onUpdate={(updated) => handleUpdateArticle(editingArticle._id, updated)} 
          onClose={() => setEditingArticle(null)} 
        />
      )}
    </div>
  );
}

export default App;
