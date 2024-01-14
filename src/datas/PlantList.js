import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		bestSale: true,
		light: 2,
		water: 3,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,

		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,

		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 5
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4
	}
]

/*Ce code importe des images de plantes depuis des fichiers dans le répertoire "../assets" et les utilise pour créer une liste de plantes avec différentes caractéristiques. Voici une ligne de commentaire pour chaque ligne de code :

import monstera from '../assets/monstera.jpg': Importe l'image de la plante "monstera" depuis le fichier "monstera.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "monstera".

import lyrata from '../assets/lyrata.jpg': Importe l'image de la plante "ficus lyrata" depuis le fichier "lyrata.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "lyrata".

import pothos from '../assets/pothos.jpg': Importe l'image de la plante "pothos argenté" depuis le fichier "pothos.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "pothos".

import succulent from '../assets/succulent.jpg': Importe l'image de la plante "succulente" depuis le fichier "succulent.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "succulent".

import olivier from '../assets/olivier.jpg': Importe l'image de la plante "olivier" depuis le fichier "olivier.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "olivier".

import basil from '../assets/basil.jpg': Importe l'image de la plante "basilique" depuis le fichier "basil.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "basil".

import mint from '../assets/mint.jpg': Importe l'image de la plante "menthe" depuis le fichier "mint.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "mint".

import calathea from '../assets/calathea.jpg': Importe l'image de la plante "calathea" depuis le fichier "calathea.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "calathea".

import cactus from '../assets/cactus.jpg': Importe l'image de la plante "cactus" depuis le fichier "cactus.jpg" situé dans le répertoire "../assets" et la stocke dans une variable nommée "cactus".

export const plantList = [...]: Exporte une constante "plantList" qui est un tableau d'objets. Chaque objet représente une plante avec des propriétés telles que "name" (nom de la plante), "category" (catégorie de la plante), "id" (identifiant unique), "bestSale" (indication des meilleures ventes), "light" (niveau de lumière requis), "water" (niveau d'arrosage requis), "cover" (image de la plante), et "price" (prix de la plante). Ce tableau contient plusieurs entrées, chacune représentant une plante différente avec ses caractéristiques. Les images importées précédemment sont utilisées comme valeurs pour la propriété "cover" de chaque plante.






 */