// Importe le hook d'état 'useState' depuis la bibliothèque React
import { useState } from 'react';

// Importe la liste des plantes depuis un fichier local './PlantList.js'
import { plantList } from '../datas/PlantList';

// Importe le composant PlantItem depuis un fichier local './PlantItem.js'
import PlantItem from './PlantItem';

// Importe le composant Categories depuis un fichier local './Categories.js'
import Categories from './Categories';

// Importe les styles CSS spécifiques au composant ShoppingList depuis un fichier externe
import '../styles/ShoppingList.css';

// Définit un composant React nommé ShoppingList qui reçoit les propriétés cart et updateCart
function ShoppingList({ cart, updateCart }) {
	// Initialise une variable d'état 'activeCategory' avec la valeur initiale ''
	const [activeCategory, setActiveCategory] = useState('');

	// Crée un tableau 'categories' en extrayant les catégories uniques de la liste des plantes
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	);

	// Fonction pour ajouter un article au panier en fonction de son nom et de son prix
	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name);
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			);
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			]);
		} else {
			updateCart([...cart, { name, price, amount: 1 }]);
		}
	}

	// Rendu du composant ShoppingList
	return (
		<div className='lmj-shopping-list'>
			{/* Composant Categories pour afficher les catégories et les filtrer */}
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			{/* Liste des plantes avec des boutons "Ajouter" */}
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					// Vérifie si aucune catégorie n'est sélectionnée ou si la catégorie correspond à celle sélectionnée
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							{/* Composant PlantItem pour afficher les informations de la plante */}
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							{/* Bouton "Ajouter" pour ajouter la plante au panier */}
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	);
}

// Exporte le composant ShoppingList pour pouvoir l'utiliser ailleurs dans l'application
export default ShoppingList;

/*Ce code définit un composant React appelé "ShoppingList" qui représente la liste des plantes disponibles dans une application de commerce de plantes. Voici un résumé de ce que fait ce code :

Importe le hook d'état "useState" depuis la bibliothèque React.

Importe la liste des plantes depuis un fichier local appelé "./PlantList.js".

Importe le composant "PlantItem" depuis un fichier local appelé "./PlantItem.js".

Importe le composant "Categories" depuis un fichier local appelé "./Categories.js".

Importe les styles CSS spécifiques au composant "ShoppingList" depuis un fichier externe.

Définit un composant React nommé "ShoppingList" qui reçoit deux propriétés : "cart" (le panier des achats) et "updateCart" (une fonction pour mettre à jour le panier).

Initialise une variable d'état "activeCategory" avec la valeur initiale vide ('').

Crée un tableau "categories" en extrayant les catégories uniques de la liste des plantes.

Définit une fonction "addToCart" pour ajouter un article au panier en fonction de son nom et de son prix. Cette fonction vérifie si l'article est déjà dans le panier et met à jour la quantité le cas échéant.

Dans le rendu du composant "ShoppingList", les éléments suivants sont affichés :

Le composant "Categories" est utilisé pour afficher les catégories et permettre de les filtrer.
Une liste <ul> contenant les plantes est affichée. Chaque plante est affichée sous la forme d'un élément <div> comprenant le composant "PlantItem" pour afficher les détails de la plante (image, nom, soins, prix) et un bouton "Ajouter" pour ajouter la plante au panier.
Les plantes sont filtrées en fonction de la catégorie sélectionnée à l'aide de la variable "activeCategory". Si aucune catégorie n'est sélectionnée ou si la catégorie correspond à celle sélectionnée, la plante est affichée ; sinon, elle est masquée.

Le composant "ShoppingList" est exporté pour pouvoir l'utiliser ailleurs dans l'application, notamment pour afficher la liste des plantes et permettre aux utilisateurs de les ajouter au panier.*/


/*Ce commentaire explique chaque ligne du code, détaillant le rôle de chaque élément, la logique globale du composant ShoppingList, la gestion des catégories, l'affichage des plantes, et l'ajout d'articles au panier. Le composant permet d'afficher une liste de plantes, de les filtrer par catégorie et d'ajouter des plantes au panier. */