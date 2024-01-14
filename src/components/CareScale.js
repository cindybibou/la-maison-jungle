// Importe les icônes du soleil (sun.svg) et de l'eau (water.svg) depuis le dossier 'assets'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Définit un objet 'quantityLabel' qui associe des quantités à des descriptions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

// Définit un composant React nommé CareScale qui reçoit les propriétés scaleValue et careType
function CareScale({ scaleValue, careType }) {
	// Crée un tableau 'range' contenant les valeurs [1, 2, 3]
	const range = [1, 2, 3]

	// Détermine l'icône à afficher en fonction du type de soin (lumière ou arrosage)
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	// Rendu du composant CareScale
	return (
		<div
			// L'événement 'onClick' est déclenché lorsqu'un utilisateur clique sur cet élément.
			onClick={() =>
				alert(
					// Une alerte est affichée avec un message dynamique basé sur les valeurs de 'quantityLabel', 'scaleValue', et 'careType'.
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{/* Mappe chaque élément de 'range' et affiche l'icône si 'scaleValue' est supérieur ou égal */}
			{/* Pour chaque élément dans 'range', une icône est affichée si 'scaleValue' est supérieur ou égal à cet élément. */}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					// Chaque icône est encapsulée dans une balise <span> et sa clé (key) est définie comme la version chaîne de l'élément 'range'.
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>

	)
}
//JE ne comprends pas d'où est récupérée la valeur de scaleValue
//Pourquoi a t-on choisi ces valeurs là comme props?

// Exporte le composant CareScale pour pouvoir l'utiliser ailleurs dans l'application
export default CareScale

//D'où viendront les valeurs de scaleValue ?
//Dans le code que vous avez fourni, la valeur de scaleValue est passée en tant que propriété (ou prop) au composant CareScale lorsqu'il est utilisé ailleurs dans l'application. La valeur de scaleValue est donc déterminée dans le composant parent qui utilise le composant CareScale, et elle est passée en tant qu'argument lorsque vous créez une instance du composant CareScale. (détails dans le fichier word question 2)

/*Ce code définit un composant React nommé "CareScale" qui permet d'afficher une échelle de soin pour une plante, que ce soit en termes de lumière ou d'arrosage. Voici un résumé de ce que fait ce code :

Importe les icônes du soleil (sun.svg) et de l'eau (water.svg) depuis le dossier 'assets'.

Définit un objet nommé 'quantityLabel' qui associe des quantités (1, 2, 3) à des descriptions ("peu", "modérément", "beaucoup").

Définit le composant React "CareScale" qui reçoit deux propriétés : "scaleValue" et "careType". "scaleValue" représente le niveau de soin (1, 2 ou 3) et "careType" indique le type de soin (lumière ou arrosage).

À l'intérieur du composant "CareScale", crée un tableau 'range' contenant les valeurs [1, 2, 3].

Détermine l'icône à afficher en fonction du type de soin ("light" pour la lumière ou "water" pour l'arrosage). Cela permet de choisir l'icône du soleil ou de l'eau.

Rendu du composant "CareScale" :

Crée un div qui réagit aux clics. Lorsqu'il est cliqué, une alerte est affichée, indiquant le niveau de soin requis (quantitéLabel) en fonction de la valeur "scaleValue" et du "careType".
Utilise la méthode "map" pour parcourir chaque élément du tableau "range". Si la valeur de "scaleValue" est supérieure ou égale à la valeur actuelle de "rangeElem", l'icône correspondante est affichée sous forme de "span".
Exporte le composant "CareScale" pour qu'il puisse être utilisé ailleurs dans l'application.

En résumé, ce composant "CareScale" permet d'afficher une échelle de soin visuelle en utilisant des icônes (soleil ou eau) en fonction du niveau de soin ("scaleValue") et du type de soin ("careType"). Le composant réagit également aux clics pour afficher des informations sur le soin requis. */