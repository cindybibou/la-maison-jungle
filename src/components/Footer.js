import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    // J'utilise le hook d'état 'useState' pour créer une variable d'état appelée 'inputValue'
    // Au départ, 'inputValue' est initialisée avec une chaîne de caractères vide ('')
    const [inputValue, setInputValue] = useState('')

    // 'setInputValue' est une fonction qui me permettra de mettre à jour la valeur de 'inputValue'
    // Elle sera utilisée pour changer la valeur de 'inputValue' plus tard dans le composant

    // En résumé, dans cette partie, j'initialise une variable 'inputValue' à une chaîne de caractères vide,
    // et je crée également une fonction 'setInputValue' qui me permettra de mettre à jour cette variable par la suite.



	function handleInput(e) {
		setInputValue(e.target.value)
	}
	// Cette fonction est appelée chaque fois que le texte dans le formulaire change. Elle prend l'événement 'e' en paramètre, qui représente le changement, et extrait la nouvelle valeur du champ de texte avec 'e.target.value'. Ensuite, elle utilise 'setInputValue' pour mettre à jour une variable ou un état dans le composant avec cette nouvelle valeur. En résumé, cette fonction permet de réagir aux changements dans le formulaire en mettant à jour la valeur stockée dans 'setInputValue'.




	function handleBlur() {
    // Cette fonction 'handleBlur' est appelée lorsque l'utilisateur déplace le focus en dehors de l'élément HTML associé
    // Elle est généralement utilisée dans le contexte d'un champ de saisie, comme un champ d'adresse e-mail

    // La condition suivante est évaluée : si 'inputValue' ne contient pas le caractère '@'
    if (!inputValue.includes('@')) {
        // Alors, une boîte de dialogue de type alert est affichée à l'utilisateur
        // Cette alerte lui signale que l'adresse e-mail qu'il a saisie ne contient pas le caractère '@'
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }

    // En résumé, la fonction 'handleBlur' est utilisée pour vérifier si l'adresse e-mail saisie dans un champ de saisie
    // contient le caractère '@'. Si ce n'est pas le cas, une alerte est affichée pour avertir l'utilisateur que l'adresse
    // n'est pas valide.
	}


	return (
		<footer className='lmj-footer'>
			{/* Ce composant 'footer' contient trois éléments : deux phrases et un champ de saisie ('input') */}
			
			<div className='lmj-footer-elem'>
				{/* Le premier élément est une phrase qui indique que ce composant s'adresse aux passionnés de plantes */}
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			
			<div className='lmj-footer-elem'>
				{/* Le deuxième élément est une phrase qui invite l'utilisateur à laisser son adresse e-mail */}
				Laissez-nous votre mail :
			</div>
			
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
			{/* Le troisième élément est un champ de saisie ('input') pour que l'utilisateur entre son adresse e-mail.
			Il a plusieurs attributs :
			- 'placeholder' qui affiche un texte indicatif dans le champ de saisie
			- 'onChange' qui est une fonction 'handleInput' qui réagit lorsque le contenu du champ de saisie change
			- 'value' qui est associé à la variable 'inputValue' pour afficher le contenu actuel du champ
			- 'onBlur' qui est une fonction 'handleBlur' qui réagit lorsque l'utilisateur déplace le focus en dehors du champ de saisie
			*/}
		</footer>
	)
	
}

export default Footer

/*En résumé: Ce code est un composant React nommé Footer qui représente le pied de page d'une application web. Voici un résumé de ce que fait ce code :

Il importe la fonction useState de la bibliothèque React et des styles CSS depuis un fichier externe.

Dans le composant Footer, il utilise le hook useState pour créer une variable d'état appelée inputValue et l'initialise avec une chaîne de caractères vide ''. Cette variable d'état est utilisée pour stocker la valeur d'un champ de saisie.

Le composant définit également deux fonctions :

handleInput(e): Cette fonction est appelée chaque fois que le texte dans un formulaire change. Elle extrait la nouvelle valeur du champ de texte à partir de l'événement e et utilise la fonction setInputValue pour mettre à jour la variable d'état inputValue avec cette nouvelle valeur.
handleBlur(): Cette fonction est généralement appelée lorsque l'utilisateur déplace le focus en dehors du champ de saisie. Elle vérifie si la valeur actuelle de inputValue contient le caractère '@' (typiquement pour valider une adresse e-mail) et affiche une alerte si ce n'est pas le cas.
Dans la partie de rendu du composant, il crée un élément de pied de page (<footer>) avec trois éléments enfants :

Deux éléments <div> qui affichent des phrases.
Un champ de saisie (<input>) où l'utilisateur peut entrer une adresse e-mail. Il est configuré avec des attributs tels que placeholder, onChange, value, et onBlur pour gérer la saisie de l'utilisateur et les réactions aux événements.
En résumé, ce composant React représente le pied de page d'une application web et permet aux utilisateurs d'entrer leur adresse e-mail tout en fournissant une vérification simple pour s'assurer que l'adresse e-mail contient le caractère '@'.
*/






