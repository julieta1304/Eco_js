
// // Variables
// let fois = prompt(
//     'Est-ce la première fois que vous visitez un site écologique?'
// );
// let produits = prompt('Avez vous déjà acheté un produit écologique?');
// let entrer = prompt(
//     "Si vous voulez vous inscrire à notre newsletter, entrer votre addrese email"
// );
// let sortir = entrer + " " + "vous êtes maintenant abonné";

// // Condicionales, prompt, alert
// if (fois && (fois == 'oui' || fois == 'Oui')) {
//     // Operadores en js
//     if (produits && (produits == 'oui' || produits == 'Oui')) {
//         alert(
//             `Bienvenue sur notre site écolo, nous espérons que vous aimerez nos produits`
//         );
//     } else {
//         alert(
//             `Bienvenue sur notre site écolo, c'est le moment de votre vie pour commencer le chemin d'une bonne consommation avec zéro déchets`
//         );
//     }
// } else if (fois && (fois == 'non' || fois == 'Non')) {
//     if (produits && (produits == 'oui' || produits == 'Oui')) {
//         alert(
//             `Bienvenue sur notre site écolo, vous faîtes maintenant partis de notre communauté, nous espérons que vous aimerez nos produits et notre message`
//         );
//     } else {
//         alert(
//             `Bienvenue sur notre site écolo, nous sommes heureux que vous vous intéréssiez à nos produits et que vous rejoigniez notre communauté zéro dechets`
//         );
//     }
// };

// if (entrer && (entrer == 'non')) {
//     alert("Vous pouvez nous rejoindre quand vous voulez");
// } else if(!entrer) {
//     alert('Bienvenue sur notre site écolo');
//     } 
//     else {
//     alert(sortir);
// }


// Carrito precios
let prixProduit = parseFloat(prompt("Entrer le prix dun produit"));
let fraisDenvoi = 4.5;

function calculerPrixTotal (prixProduit, fraisDenvoi,) {
    let prixHt = prixProduit + fraisDenvoi;
    let pourcentageImpots = ((prixHt * 20) / 100);
    const aditon = (prixHt, pourcentageImpots) => prixHt + pourcentageImpots;
    let prixTotalTtc = aditon (prixHt, pourcentageImpots);
    return prixTotalTtc;
}
let prixTotalTtc = calculerPrixTotal (prixProduit, fraisDenvoi);
console.log(prixTotalTtc);