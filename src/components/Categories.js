// Importe les styles CSS spécifiques au composant Categories depuis un fichier externe
import '../styles/Categories.css';

// Définit un composant React nommé Categories qui reçoit setActiveCategory, categories et activeCategory en tant que propriétés
function Categories({ setActiveCategory, categories, activeCategory }) {
	// Rendu du composant Categories
	return (
		<div className='lmj-categories'>
			{/* Sélecteur déroulant (select) pour choisir une catégorie */}
			<select
				// La propriété 'value' est utilisée pour définir la valeur actuelle de la liste déroulante.
				value={activeCategory}
				// La propriété 'onChange' spécifie la fonction à exécuter lorsqu'une option est modifiée.
				// Elle utilise la valeur de l'événement (e.target.value) pour mettre à jour la catégorie active.
				onChange={(e) => setActiveCategory(e.target.value)}
				// La classe CSS 'lmj-categories-select' est ajoutée à la liste déroulante pour appliquer des styles spécifiques.
				className='lmj-categories-select'
			>
				{/* Option vide par défaut */}
				{/* Cette option est utilisée pour afficher un choix par défaut lorsque rien n'est sélectionné. */}
				<option value=''>---</option>

				{/* Mappe chaque catégorie de la liste et affiche des options correspondantes */}
				{/* Pour chaque catégorie dans la liste, une option est créée avec la valeur de la catégorie et son libellé. */}
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>


			{/* Bouton pour réinitialiser la catégorie sélectionnée */}
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

// Exporte le composant Categories pour pouvoir l'utiliser ailleurs dans l'application
export default Categories;


/* Ce code définit un composant React nommé "Categories" qui permet de filtrer des catégories dans une application. Voici un résumé de ce que fait ce code :

Importe les styles CSS spécifiques au composant "Categories" depuis un fichier externe.

Définit le composant "Categories" qui reçoit trois propriétés en tant que paramètres : "setActiveCategory" (une fonction pour mettre à jour la catégorie active), "categories" (un tableau de catégories disponibles) et "activeCategory" (la catégorie actuellement active).

À l'intérieur du composant "Categories", le rendu se compose des éléments suivants :

Un conteneur <div> avec la classe CSS "lmj-categories".
Un sélecteur déroulant (élément <select>) pour choisir une catégorie. Il utilise la valeur de "activeCategory" pour déterminer la catégorie sélectionnée et la fonction "setActiveCategory" est appelée lorsque l'utilisateur change la sélection.
Une option vide par défaut ("---") dans le sélecteur déroulant pour permettre de réinitialiser la sélection.
Une boucle "map" qui parcourt le tableau "categories" et crée une option pour chaque catégorie disponible. Chaque option a une valeur correspondant à la catégorie et son libellé est également défini.
Un bouton "Réinitialiser" qui réinitialise la catégorie sélectionnée en appelant la fonction "setActiveCategory" avec une chaîne vide.
Le composant "Categories" est exporté pour qu'il puisse être utilisé ailleurs dans l'application.

En résumé, ce composant "Categories" permet à l'utilisateur de choisir une catégorie à partir d'un sélecteur déroulant et de réinitialiser la sélection si nécessaire. Il sert généralement à filtrer les éléments en fonction de la catégorie sélectionnée.*/