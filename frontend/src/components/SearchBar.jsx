import { Banknote, Boxes, Box, SquarePlus, Trash, SquarePen } from 'lucide-react';
import { useState } from 'react';

const SearchBar = ({ articles, onOpenForm, openEditForm, onDelete }) => {
  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState("");

  const filteredArticles = articles.filter((article) => {
    if (search) {
      return article.nom.toLowerCase().includes(search.toLowerCase());
    }
    if (categorie) {
      return article.categorie.toLowerCase().includes(categorie.toLowerCase());
    }
    return true;
  }).sort((a, b) => a.nom.localeCompare(b.nom));

  return (
    <div className="">
      <div className="gap-3 md:flex items-center justify-center content-center">
        {/* Recherche + Catégorie */}
        <div className="md:flex gap-2 mt-2">
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 outline-gray-600">
              <Box />
              <input
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                name="search"
                placeholder="Rechercher un Article"
                className="block grow h-10 m-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 outline-gray-600">
              <Boxes /> <span className="label">Catégories</span>
              <select
                id="categorie"
                name="categorie"
                onChange={(e) => setCategorie(e.target.value)}
                className="block grow h-10 m-1.5 pr-3 pl-1 focus:outline-none sm:text-sm/6"
              >
                <option value="">Toutes</option>
                <option value="alimentation">Alimentation</option>
                <option value="cosmetique">Cosmétique</option>
                <option value="piece">Pièce</option>
                <option value="quincaillerie">Quincaillerie</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bouton + */}
        <div className="flex items-center justify-center mt-4">
          <button
            className="flex items-center justify-center px-4 w-fit h-13 btn btn-accent"
            onClick={onOpenForm}
          >
            <SquarePlus />
          </button>
        </div>
      </div>

      {/* Tableau */}
      <div className="py-5">
        <h1 className="text-accent text-2xl font-bold uppercase text-center">Liste des Articles</h1>
        <div className="overflow-auto shadow-xl rounded-2xl">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-200 text-accent uppercase rounded-b-2xl">
                <th className="p-1.5 pl-2 text-left">Article</th>
                <th className="p-1.5">Prix</th>
                <th className="p-1.5">Catégorie</th>
                <th className="p-1.5">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article, i) => (
                <tr className="text-center" key={i}>
                  <td className="p-1.5 pl-2 text-left font-bold">{article.nom}</td>
                  <td className="p-1.5 text-sm">{article.prix} CFA</td>
                  <td className="p-1.5">
                    <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400">
                      {article.categorie}
                    </span>
                  </td>
                  <td className="flex gap-5 justify-center">
                    {/* Bouton édition */}
                    <button
                      onClick={() => openEditForm(article)}
                      className="text-yellow-500 bg-amber-200 p-1.5 rounded-xl"
                    >
                      <SquarePen />
                    </button>
                    {/* Bouton suppression */}
                    <button
                      onClick={() => onDelete(article._id)}
                      className="text-red-500 bg-red-200 p-1.5 rounded-xl"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
