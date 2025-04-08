/* changer le nom de la fonction (ex: sumNumber)
changer le nom du paramètre (ex: arrayToSum)
changer le nom de la variable (ex: sum)
on peut changer le for en forEach

faire un if avec un instanceof
puis faire un else avec la gestion d'erreur
on peut aussi faire un try and catch
*/

/* 
La fonction f1 permet de calculer la somme des nombres contenus dans un tableau.

Peux-tu faire du refactoring dans ce code pour qu'il soit plus simple à la relecture ?
function f1(arr) {
	let n = 0;
	for (let i = 0; i < arr.length; i++) {
		n += arr[i];
	}
	return n;
}

console.log(f1([1, 2, 3, 4])); // Devrait retourner 10
console.log(f1([1, 2])); // Devrait retourner 3
console.log(f1([0])); // Devrait retourner 0
console.log(f1([1, 0])) // Devrait retourner 1

Implémente la gestion des erreurs dans les cas suivants
console.log(f1([1, "Haha"])) // Devrait retourner 1
console.log(f1()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(f1("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres" 
*/

function sumOfArray(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(sumOfArray([1, 2, 3, 4])); // Devrait retourner 10
console.log(sumOfArray([1, 2])); // Devrait retourner 3
console.log(sumOfArray([0])); // Devrait retourner 0
console.log(sumOfArray([1, 0])) // Devrait retourner 1