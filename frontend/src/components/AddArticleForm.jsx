import { useState } from "react";
import {
  Plus,
  Banknote,
  Boxes,
  Box,
  SquarePlus,
  FilePlus,
  Trash,
  SquarePen,
} from "lucide-react";
const AddArticleForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prix: "",
    categorie: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl p-5 shadow-2xl flex flex-col gap-4"
    >
      <h1 className="text-accent text-2xl font-bold uppercase text-center">Ajouter un Atricle</h1>
      <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
        <div className="flex gap-2 shrink-0 grid-cols-1 focus-within:relative">
          <Box />
        </div>
        <input
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom de l'article"
          className="block min-w-0 grow h-10 m-1.5 pr-3 pl-1  focus:outline-none sm:text-sm/6"
        />
      </div>

      <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
        <div className="flex gap-2 shrink-0 grid-cols-1 focus-within:relative">
          <Banknote />
        </div>
        <input
          name="prix"
          value={formData.prix}
          onChange={handleChange}
          placeholder="Prix"
          className="block min-w-0 grow h-10 m-1.5 pr-3 pl-1  focus:outline-none sm:text-sm/6"
        />
      </div>

<div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
      
      <div className="flex gap-2 shrink-0 grid-cols-1 focus-within:relative">
          <Boxes />
        </div>
      <select
        name="categorie"
        value={formData.categorie}
        onChange={handleChange}
        className="block min-w-0 grow h-10 m-1.5 pr-3 pl-1  focus:outline-none sm:text-sm/6"
      >
        <option value="">Choisir une catégorie</option>
        <option value="alimentation">Alimentation</option>
        <option value="cosmetique">Cosmétique</option>
        <option value="piece">Pièce</option>
        <option value="quincaillerie">Quincaillerie</option>
      </select>
      </div>

      <div className="flex gap-3 justify-center ">
        <button type="submit" className="btn btn-accent">
          Ajouter
        </button>
        <button type="button" className="btn btn-error" onClick={onClose}>
          Fermer
        </button>
      </div>
    </form>
  );
};

export default AddArticleForm;
