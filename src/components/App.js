// Importe les fonctions useState et useEffect depuis la bibliothèque React
import { useState, useEffect } from 'react';

// Importe le composant Banner depuis un fichier local './Banner.js'
import Banner from './Banner';

// Importe une image du logo depuis le dossier 'assets'
import logo from '../assets/logo.png';

// Importe le composant Cart depuis un fichier local './Cart.js'
import Cart from './Cart';

// Importe le composant Footer depuis un fichier local './Footer.js'
import Footer from './Footer';

// Importe le composant ShoppingList depuis un fichier local './ShoppingList.js'
import ShoppingList from './ShoppingList';

// Importe les styles CSS spécifiques au composant App depuis un fichier externe
import '../styles/Layout.css';



// Définit un composant React nommé App
function App() {
	// Récupère les données du panier depuis le stockage local (localStorage)
	const savedCart = localStorage.getItem('cart');
	//Dans la constante savedCart, est stockée la valeur associée la clé ‘cart’ qui est récupérée dans le stockage local du navigateur.


	// Initialise une variable d'état 'cart' avec les données du panier sauvegardées,
	// ou un tableau vide si aucune donnée n'a été sauvegardée
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
	//savedCart est une variable qui contient une valeur provenant du stockage local.
	//Si savedCart a une valeur (non nulle et non falsy), la convertir depuis une chaîne JSON en un objet JavaScript à l'aide de JSON.parse(savedCart).
	//Si 'savedCart' n'a pas de valeur (ie est null ou undefined, ou une autre valeur falsy), elle renvoie un tableau vide []
	//Cette condition permet d'assurer que je dispose d'une valeur utilisable, soit à partir de 'savedCart' sous forme d'objet, soit sous forme d'un tableau vide si 'savedCart' n'a pas de valeur.



	// Utilise le hook useEffect pour sauvegarder le panier dans le stockage local
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);
	//localStorage.setItem('clé', 'valeur') permet de stocker des données dans le stockage local du navigateur web.Sont stockées sous forme clé valeur et persistent même après la fermeture du navigateur web.
	//'Clé' est la clé sous laquelle est stockée la valeur, est utilisée pour récupérer ultérieurement la valeur.
	//'valeur' que je souhaite stocker.Peut être une chaîne de caractères, un nombre, un objet, ou tout autre type de données JavaScript.
	//On récupère ces données stockées avec : localStorage.getItem('clé')

	//JSON.stringify(cart) : méthode JS qui va convertir l'objet JS 'cart' en une chaîne de caractères JSON. Cette opération permet de sérialiser (ou encoder) l'objet JS, ce qui le rend utilisable pour le stockage, la transmission sur le réseau ou d'autres opérations qui impliquent des données textuelles.
	//Donc JSON.parse() est l'inverse de JSON.stringify().


	//Donc localStorage.setItem('cart', JSON.stringify(cart)) va stocker dans le stockage local du navigateur, sous la clé 'cart', les données contenues dans la variable 'Cart' préalablement converties en JSON pour le stockage.Cela permet de conserver les données du panier même lorsque l'utilisateur actualise ou quitte la page.

	//La fonction passée en premier argument à 'useEffect' sera exécutée à chaque fois que la dépendance spécifiée (dans ce cas '[cart]') change.
	//Dans ce code particulier, le hook 'useEffect' est utilisé pour surveiller les changements dans la variable 'cart'. Lorsque 'cart' change (ie que des éléments sont ajoutés ou supprimés du panier), la fonction anonyme à l'intérieur de 'useEffect' est exécutée.
	//Chaque fois que des modifications sont apportées au panier, les données du panier sont synchronisées dans le stockage local du navigateur (sous la clé cart). Ainsi les données du panier restent persistantes même si l'utilisateur actualise  la page ou quitte le site. 


	// Rendu du composant App
	return (
		<div>
			{/* Composant Banner qui affiche le logo et le titre (img et h1 sont ses children) */}
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			{/* Conteneur principal de l'application */}
			<div className='lmj-layout-inner'>
				{/* Composant Cart qui affiche le panier. En passant cart et updateCart en tant que propriétés, le composant cart peut réagir aux changements dans le panier.Si le contenu du panier change, le composant 'Cart' sera automatiquement mis à jour pour réfléter ces changements, car il est averti via les props cart et updateCart.Les accolades permettent d'extraire directement les propriétés sans avoir à les précéder de props.  */}
				<Cart cart={cart} updateCart={updateCart} />

				{/* Composant ShoppingList qui affiche la liste des produits */}
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			{/* Composant Footer qui affiche le pied de page */}
			<Footer />
		</div>
	);
}

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;

/*Ce code représente le composant principal de l'application React nommée "App". Voici un résumé de ce que fait ce code :

Importe les fonctions useState et useEffect depuis la bibliothèque React.
Importe plusieurs composants React (Banner, Cart, Footer, ShoppingList) depuis des fichiers locaux.
Importe une image de logo depuis le dossier 'assets'.
Définit le composant App, qui représente la structure globale de l'application.
Utilise le hook d'état useState pour gérer l'état du panier de l'application.
Récupère les données du panier depuis le stockage local (localStorage) et initialise la variable d'état cart avec ces données, ou un tableau vide si aucune donnée n'est disponible.
Utilise le hook useEffect pour sauvegarder le panier dans le stockage local à chaque modification de celui-ci.
Rend le contenu de l'application, qui se compose de :
Un composant Banner affichant le logo et le titre de l'application.
Un conteneur principal (lmj-layout-inner) qui englobe le panier (Cart) et la liste des produits (ShoppingList).
Le composant Cart qui affiche le contenu du panier et permet de le mettre à jour.
Le composant ShoppingList qui affiche la liste des produits disponibles à l'achat, permettant également d'ajouter des produits au panier.
Le composant Footer qui affiche le pied de page de l'application.
Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application.
En résumé, ce code constitue la structure de base de l'application, gère l'état du panier, affiche des produits à acheter, et sauvegarde les données du panier dans le stockage local pour une utilisation ultérieure. */