
// DESAFIO 1 y 2

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



// ---------------------------

// DESAFIO 3

// // Carrito precios
// let prixProduit = parseFloat(prompt("Entrer le prix dun produit"));
// let fraisDenvoi = 4.5;

// function calculerPrixTotal (prixProduit, fraisDenvoi,) {
//     let prixHt = prixProduit + fraisDenvoi;
//     let pourcentageImpots = ((prixHt * 20) / 100);
//     const aditon = (prixHt, pourcentageImpots) => prixHt + pourcentageImpots;
//     let prixTotalTtc = aditon (prixHt, pourcentageImpots);
//     return prixTotalTtc;
// }
// let prixTotalTtc = calculerPrixTotal (prixProduit, fraisDenvoi);
// console.log(prixTotalTtc);

// ---------------------------

// DESAFIO 4

// Objetos y Arrays

// array, carrito de compras
let panier = [];
console.log(panier.length);
// variable de costo de envio
let fraisDenvoi = 5; 

// Objeto personalizado de producto
class Produit {
    // distintas propiedas del objeto
    constructor(id, title, prixProduit, stock, fraisDenvoi) {
        // numero de identificacion del producto
        this.id = id;
        // titulo del producto
        this.title = title.toUpperCase().trim();
        // precio base del producto
        this.prixProduit = parseFloat(prixProduit);
        // numero de stock 
        this.stock = parseInt(stock);
        // costo de envio
        this.fraisDenvoi = Number(fraisDenvoi);
        // precio sin iva = precio del producto + costo de envio
        this.prixHt = prixProduit + fraisDenvoi;
        // precio con iva = (precio del producto + costo de envio) *1.20 del iva
        this.pourcentageImpots = (((prixProduit + fraisDenvoi) * 20) / 100);
    }

    // distintos tipos de métodos

    // numero de identificacion del producto
    getId = function () {
        return this.id;
    }
    // titulo del producto
    getTitle = function () {
        return this.title;
    }
    // precio sin iva = precio del producto + costo de envio
    getprixHt = function () { 
        return this.prixProduit + fraisDenvoi;
    }
    // precio con iva = (precio del producto + costo de envio) * 1.20 del iva
    getpourcentageImpots = function () {
        return (((this.prixProduit + fraisDenvoi) * 20) / 100);
    }
    // precio total del precio sin iva con el porcentaje de iva
    getPrixTotal = function adition () {
        return {
            prixHt: (this.prixProduit + fraisDenvoi),
            pourcentageImpots: (((this.prixProduit + fraisDenvoi) * 20) /100)
        }
    }
    // precio final del producto con costo de envio e iva incluido
    getPrixFinal = function (qty) {
        return (((this.prixProduit + fraisDenvoi) + (((this.prixProduit + fraisDenvoi) * 20) /100)) * qty)
    }
    // cantidad del producto con el precio final
    getAchats = function (qty) {
        return {produit: this, 
                quantités: qty, 
                montant: this.getPrixFinal(qty)}
    }
    // agregar al carrito de compras
    ajouterAuPanier = function (qty) {
        panier.push(this.getAchats (qty));
    }
}

// array de produits
const produits = ['produit1', 'produit2', 'produit3', 'produit4', 'produit5', 'produit6'];
// resultados en consola con el uso de métodos comunes como join y length
console.log(produits.join("-"));
console.log(produits.length);


// referencias del objeto personalizado 
const produit1 = new Produit (1, 'Brosse à dents', 7.5, 24, 5);
const produit2 = new Produit (2, 'Savon de main', 4.80, 10, 5);
const produit3 = new Produit (3, 'Gel de douche', 9.25, 15, 5);
const produit4 = new Produit (4, 'Éponge de luffa', 5.50, 5, 5);
const produit5 = new Produit (5, 'Shampooing', 10.50, 18, 5);
const produit6 = new Produit (6, 'Àprès shampooing', 12.80, 7, 5);

// console.log para ver los resultados por consola de los productos
// producto5
console.log(produit5);
console.log(produit5.getId());
console.log(produit5.getAchats(1));
// producto4
console.log(produit4.getTitle());
console.log(produit4.getAchats(5));
// producto6
console.log(produit6.getPrixTotal());
console.log(produit6.getAchats(3));

// resultados del carrito agregado
// comienza vacio
console.log(panier);
// se agregan productos
produit4.ajouterAuPanier(1);
produit1.ajouterAuPanier(2);
produit5.ajouterAuPanier(4);
// resultado del carrito final
console.log(panier);

