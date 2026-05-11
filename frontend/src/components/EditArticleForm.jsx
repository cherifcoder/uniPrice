import { useState, useEffect } from "react";
import { Banknote, Boxes, Box, RotateCcw, Save } from 'lucide-react';
import Button from "./Button";

const EditArticleForm = ({ article, onUpdate, onClose }) => {
  const [formData, setFormData] = useState(article);

  // Met à jour formData si l’article change
  useEffect(() => {
    setFormData(article);
  }, [article]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // envoie les données modifiées à App.js
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl flex flex-col gap-5 shadow-2xl p-5 bg-white">
      <h1 className="text-center font-bold text-2xl uppercase m-4 text-accent">Modifier un Article</h1>

      {/* Champ Nom */}
      <div className="w-full">
        <label htmlFor="nom" className="block text-accent text-xl">Article</label>
        <div className="flex items-center rounded-md bg-white/5 pl-3">
          <Box />
          <input 
            id="nom" 
            type="text" 
            name="nom" 
            value={formData.nom || ""} 
            onChange={handleChange} 
            placeholder="Nom de l'article" 
            className="block grow py-2.5 m-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6" 
          />
        </div>
      </div>

      {/* Champ Prix */}
      <div>
        <label htmlFor="prix" className="block text-accent text-xl">Prix</label>
        <div className="flex items-center rounded-md bg-white/5 pl-3">
          <Banknote />
          <input 
            id="prix" 
            type="number" 
            name="prix" 
            value={formData.prix || ""} 
            onChange={handleChange} 
            placeholder="Entrez le prix" 
            className="block grow h-10 m-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6" 
          />
        </div>
      </div>

      {/* Champ Catégorie */}
      <div>
        <label htmlFor="categorie" className="block text-accent text-xl">Catégorie</label>
        <div className="flex items-center rounded-md bg-white/5 pl-3">
          <Boxes />
          <select 
            name="categorie" 
            id="categorie" 
            value={formData.categorie || ""} 
            onChange={handleChange} 
            className="block grow h-10 m-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6"
          >
            <option value="">Choisir une catégorie</option>
            <option value="alimentation">Alimentation</option>
            <option value="cosmetique">Cosmétique</option>
            <option value="piece">Pièce</option>
            <option value="quincaillerie">Quincaillerie</option>
          </select>
        </div>
      </div>

      {/* Boutons */}
      <div className="flex gap-16">
        <Button type="button" variant="btn" icon={RotateCcw} onClick={onClose}>
          Annuler
        </Button>
        <Button type="submit" variant="btn-accent" icon={Save}>
          Enregistrer
        </Button>
      </div>
    </form>
  );
};

export default EditArticleForm;
