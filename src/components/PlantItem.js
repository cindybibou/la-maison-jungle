// Importe le composant CareScale depuis un fichier local './CareScale.js'
import CareScale from './CareScale';

// Importe les styles CSS spécifiques au composant PlantItem depuis un fichier externe
import '../styles/PlantItem.css';

// Définit une fonction handleClick qui affiche une alerte lorsqu'un élément de la liste est cliqué
//Ici plantName est le paramètre qui représente le nom de la plante,et il est utilisé à l'intérieur de la fonction pour générer un message d'alerte 
function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

// Définit un composant React nommé PlantItem qui reçoit les propriétés cover, name, water, light, et price
function PlantItem({ cover, name, water, light, price }) {
	// Rendu du composant PlantItem
	return (
		// Élément de liste avec une classe 'lmj-plant-item' et un gestionnaire d'événement onClick
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			{/* Affiche le prix de la plante */}
			<span className='lmj-plant-item-price'>{price}€</span>

			{/* Affiche l'image de la plante avec une classe 'lmj-plant-item-cover' */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />

			{/* Affiche le nom de la plante */}
			{name}

			{/* Affiche les échelles de soin pour l'arrosage et la lumière en utilisant le composant CareScale */}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	);
}

// Exporte le composant PlantItem pour pouvoir l'utiliser ailleurs dans l'application
export default PlantItem;


/*Ce code définit un composant React appelé "PlantItem" qui représente un élément de la liste des plantes dans une application. Voici un résumé de ce que fait ce code :

Importe le composant "CareScale" depuis un fichier local appelé "./CareScale.js". "CareScale" est utilisé pour afficher des échelles de soin pour l'arrosage et la lumière.

Importe les styles CSS spécifiques au composant "PlantItem" depuis un fichier externe.

Définit une fonction nommée "handleClick" qui affiche une alerte lorsque l'utilisateur clique sur un élément de la liste des plantes. L'alerte indique que l'utilisateur souhaite acheter une unité de la plante sélectionnée.

Définit le composant "PlantItem" qui reçoit plusieurs propriétés en tant que paramètres : "cover" (image de la plante), "name" (nom de la plante), "water" (niveau de soin de l'arrosage), "light" (niveau de soin de la lumière) et "price" (prix de la plante).

À l'intérieur du composant "PlantItem", le rendu se compose des éléments suivants :

Un élément de liste <li> avec la classe CSS "lmj-plant-item" et un gestionnaire d'événement onClick qui appelle la fonction "handleClick" avec le nom de la plante.
Un élément <span> qui affiche le prix de la plante avec la classe CSS "lmj-plant-item-price".
Une image <img> qui affiche la couverture de la plante avec la classe CSS "lmj-plant-item-cover". L'attribut "alt" est utilisé pour décrire l'image.
Le nom de la plante est affiché.
Un conteneur <div> qui affiche deux composants "CareScale" pour l'arrosage et la lumière, en passant les propriétés nécessaires pour déterminer les échelles de soin.
Le composant "PlantItem" est exporté pour qu'il puisse être utilisé ailleurs dans l'application, notamment pour afficher des éléments de la liste des plantes avec leurs détails. */

/* Ce commentaire détaille chaque ligne du code, expliquant le rôle de chaque élément, la logique globale du composant PlantItem, l'utilisation de la fonction handleClick pour gérer les clics sur les éléments de la liste, et l'utilisation du composant CareScale pour afficher les échelles de soin pour l'arrosage et la lumière. Le composant permet d'afficher les informations d'une plante, y compris son nom, son prix, une image, et les échelles de soin.*/

//rend une représentation visuelle d'une plante dans une liste
//Ce composant prend plusieurs props en entrée: id, cover, name, water, light. Qui contiennent les informations nécesaires pour afficher une plante spécifique.
//La prop id est utilisée comme clé pour l'élément li.ce qui est important pour la performance et la mise à jour des composants React
//La prop cover pour afficher une image représentant la plante.L'attribit src de l'image est défini sur la valeur de la prop cover et l'attribut alt est configuré pour une meilleure accessibilité en utilisant le nom de plante extrait de la prop name
//Le nom d ela plante 'name' est affiché directement après l'image.
//En-dessous du nom de la plante, j'utilise deux composants CareScale pour afficher l'échelle de soin de la plante pour l'eau (water) et la lumière (light) à ces composants via les props 'scaleValue'. Le type de soin ('careType') est également spécifié pour chaque composant 'CareScale')
//En fin de compte, tout cela est encapsulé dans un élément <li> avec la classe CSS 'lmj-plant-item'.

//Ce composant 'PlantItem' est conçu pour être utilisé dans une liste de plantes, et chaque entrée de la liste sera rendue avec cet agencement, affichant les informations de la plante (nom, image, échelle de soin) en fonction des props passées.