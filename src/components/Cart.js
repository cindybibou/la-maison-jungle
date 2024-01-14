// Importe les fonctions useState et useEffect depuis la bibliothèque React
import { useState, useEffect } from 'react'

// Importe les styles CSS spécifiques au composant Cart depuis un fichier externe
import '../styles/Cart.css'

// Définit un composant React nommé Cart qui reçoit les propriétés cart et updateCart en tant que paramètres
function Cart({ cart, updateCart }) {
	// Initialise une variable d'état 'isOpen' avec la valeur initiale 'true'
	const [isOpen, setIsOpen] = useState(true)

	// Calcule le montant total des achats dans le panier en utilisant la méthode 'reduce'
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	// Utilise le hook useEffect pour effectuer une action lorsque la valeur de 'total' change
	useEffect(() => {
		// Met à jour le titre du document avec le montant total des achats
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	// Rend le contenu conditionnel du composant en fonction de la valeur de 'isOpen'
	return isOpen ? (
		// Si 'isOpen' est vrai, affiche le contenu suivant
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{/* Mappe chaque élément du panier pour l'afficher */}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					{/* Bouton pour vider le panier */}
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		// Si 'isOpen' est faux, affiche le contenu suivant
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

// Exporte le composant Cart pour pouvoir l'utiliser ailleurs dans l'application
export default Cart



/*Ce code définit un composant React nommé "Cart" qui représente un panier d'achats dans une application. Voici un résumé de ce que fait ce code :

Importe les fonctions useState et useEffect depuis la bibliothèque React.

Importe les styles CSS spécifiques au composant "Cart" depuis un fichier externe.

Définit le composant "Cart" qui reçoit deux propriétés en tant que paramètres : "cart" (représentant le contenu du panier) et "updateCart" (une fonction pour mettre à jour le panier).

À l'intérieur du composant "Cart", initialise une variable d'état "isOpen" avec la valeur initiale "true". Cette variable d'état contrôle l'affichage du contenu du panier.

Calcule le montant total des achats dans le panier en utilisant la méthode "reduce" sur le tableau "cart". Il accumule le prix total en multipliant le prix de chaque élément par la quantité correspondante.

Utilise le hook "useEffect" pour effectuer une action lorsque la valeur de "total" change. Plus précisément, il met à jour le titre du document avec le montant total des achats.

Rend le contenu conditionnel du composant en fonction de la valeur de "isOpen". Si "isOpen" est vrai, il affiche le contenu du panier, sinon, il affiche un message indiquant que le panier est fermé.

Si le panier est ouvert, affiche les éléments suivants :

Un bouton "Fermer" pour fermer le panier.
La liste des éléments du panier, avec le nom, le prix et la quantité de chaque élément.
Le montant total des achats.
Un bouton "Vider le panier" pour vider complètement le panier.
Si le panier est fermé, affiche un bouton "Ouvrir le Panier" pour l'ouvrir.

Exporte le composant "Cart" pour qu'il puisse être utilisé ailleurs dans l'application.

En résumé, ce composant "Cart" gère l'affichage et la mise à jour du contenu du panier d'achats de l'application, en permettant aux utilisateurs de voir les articles ajoutés, de calculer le montant total et de vider le panier.


 */