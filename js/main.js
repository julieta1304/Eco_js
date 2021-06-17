
// DESAFIO 1 y 2
// Sinceramente dejé estas variables por el hecho de que las rubricas de la 1era entrega piden muchos prompt y no se me ocurrian la verdad con el precio aue pregunar o poner mucho en prompt

// Variables
// Variable veces = Es la primera vez que usted visita un sitio ecologico?
let fois = prompt(
    'Est-ce la première fois que vous visitez un site écologique?'
);
// Variable productoEcologico = Usted ya ha comprado un producto ecologico? 
let produitsEco = prompt('Avez vous déjà acheté un produit écologique?');
// Variable entrada = Si usted quiere inscribirse a nuestro newsletter, ingrese su direccion de email
let entrer = prompt(
    "Si vous voulez vous inscrire à notre newsletter, entrer votre addrese email"
);
// Variable salida = Entrada + usted esta ahora inscripto 
let sortir = entrer + " " + "vous êtes maintenant abonné";

// Condicionales, prompt, alert

// Si veces es si o Si
if (fois && (fois == 'oui' || fois == 'Oui')) {
    // Operadores en js
    // Si productoEcologico es si o Si
    if (produitsEco && (produitsEco == 'oui' || produitsEco == 'Oui')) {
        // Bienvenido a nuestro sitio ecologico, nosotros esperamos que a usted le gustaran nuestros productos
        alert(
            `Bienvenue sur notre site écolo, nous espérons que vous aimerez nos produits`
        );
    } else {
        // Bienvenido a nuestro sitio ecologico, es el momento de su vida para comenzar el camino de una buena consumacion con cero desechos
        alert(
            `Bienvenue sur notre site écolo, c'est le moment de votre vie pour commencer le chemin d'une bonne consommation avec zéro déchets`
        );
    }
    // Si veces es no o No
} else if (fois && (fois == 'non' || fois == 'Non')) {
    // Si productoEcologico es no o Non
    if (produitsEco && (produitsEco == 'oui' || produitsEco == 'Oui')) {
        // Bienvenido a nuestro sitio ecologico, usted es ahora parte de nuestra comunidad, nosotros esperamos que a usted le gustaran nuestros productos y nuestro mensaje
        alert(
            `Bienvenue sur notre site écolo, vous faîtes maintenant partis de notre communauté, nous espérons que vous aimerez nos produits et notre message`
        );
    } else {
        // Bienvenido a nuestro sitio ecologico, nosotros somos felices que usted se haya interesado en nuestros productos y que se una a nuestra comunidad cero desechos.
        alert(
            `Bienvenue sur notre site écolo, nous sommes heureux que vous vous intéréssiez à nos produits et que vous rejoigniez notre communauté zéro dechets`
        );
    }
};
// Si entrada es no
if (entrer && (entrer == 'non')) {
    // Usted puede unirse a nosotros cuando quiera
    alert("Vous pouvez nous rejoindre quand vous voulez");
    // Si es diferente a entrada
} else if(!entrer) {
    // Bienvenido a nuestro sitio ecologico
    alert('Bienvenue sur notre site écolo');
    } 
    else {
        // Salida
    alert(sortir);
}



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

// ------------------------------------------------------------------



// DESAFIO 4 Y 5 = Primer entrega del proyecto final Objetos y Arrays

// carrito de compras
let panier = [];
console.log(panier.length);

// variable de costo de envio
let fraisDenvoi = 5;

// Objeto personalizado de producto
class Produit {

    // distintas propiedas del objeto
    constructor(id, title, prixProduit, stock, fraisDenvoi, categorie) {
        // numero de identificacion del producto
        this.id = id;
        // titulo del producto
        this.title = title
            .toUpperCase()
            .trim();
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
        this.categorie = categorie;
    }

    // distintos tipos de métodos numero de identificacion del producto
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
    // precio total entre el precio sin iva y el porcentaje de iva
    getPrixTotal = function adition() {
        return {
            prixHt: (this.prixProduit + fraisDenvoi),
            pourcentageImpots: (((this.prixProduit + fraisDenvoi) * 20) / 100)
        }
    }
    // precio final del producto con costo de envio e iva incluido
    getPrixFinal = function (qty) {
        return (
            ((this.prixProduit + fraisDenvoi) + (((this.prixProduit + fraisDenvoi) * 20) / 100)) * qty
        )
    }
    // cantidad del producto con el precio final
    getAchats = function (qty) {
        return {produit: this, quantités: qty, montant: this.getPrixFinal(qty)}
    }
    // agregar producto al carrito de compras
    ajouterAuPanier = function (qty) {
        panier.push(this.getAchats(qty));
    }
}

// array de produits
const produits = [
    'produit1',
    'produit2',
    'produit3',
    'produit4',
    'produit5',
    'produit6',
    'produit7',
    'produit8',
    'produit9',
    'produit10',
    'produit11',
    'produit12',
    'produit13',
    'produit14',
    'produit15',
    'produit16',
    'produit17',
    'produit18',
    'produit19',
    'produit20',
    'produit21'
];
// resultados en consola con el uso de métodos comunes como join y length
console.log(produits.join("-"));
console.log(produits.length);

// referencias del objeto personalizado. Lista de todos los productos
// Salle de Bains
const produit1 = new Produit(1, 'Brosse à dents', 7.5, 24, 5, 'Salle de Bains');
const produit2 = new Produit(2, 'Savon de main', 4.80, 10, 5, 'Salle de Bains');
const produit3 = new Produit(3, 'Gel de douche', 9.25, 15, 5, 'Salle de Bains');
const produit4 = new Produit(
    4,
    'Éponge de luffa',
    5.50,
    5,
    5,
    'Salle de Bains'
);
const produit5 = new Produit(5, 'Shampooing', 10.50, 18, 5, 'Salle de Bains');
const produit6 = new Produit(
    6,
    'Àprès shampooing',
    12.80,
    7,
    5,
    'Salle de Bains'
);
// Cuisine
const produit7 = new Produit(7, 'Éponge de coco', 14.35, 9, 5, 'Cuisine');
const produit8 = new Produit(
    8,
    'Brosse vaisselle bois',
    3.25,
    22,
    5,
    'Cuisine'
);
const produit9 = new Produit(
    9,
    'Savon solide vaisselle',
    4.50,
    8,
    5,
    'Cuisine'
);
const produit10 = new Produit(
    10,
    'Pailles réutilisables',
    11.75,
    17,
    5,
    'Cuisine'
);
const produit11 = new Produit(11, 'Capsules à Café', 27.25, 50, 5, 'Cuisine');
const produit12 = new Produit(12, 'Bee Wraps', 22.90, 11, 5, 'Cuisine');
// Maison
const produit13 = new Produit(13, 'Sac réutilisables', 17.40, 38, 5, 'Maison');
const produit14 = new Produit(14, 'Les gargouilles', 35, 14, 5, 'Maison');
const produit15 = new Produit(15, 'Sprays nettoyants', 28.50, 20, 5, 'Maison');
// Bébés et Femmes
const produit16 = new Produit(
    16,
    'Couches bébé lavables',
    12.50,
    16,
    5,
    'Bébés et Femmes'
);
const produit17 = new Produit(
    17,
    'Bavoir en silicone',
    10.65,
    8,
    5,
    'Bébés et Femmes'
);
const produit18 = new Produit(
    18,
    'Vaiselle bébé',
    18.75,
    3,
    5,
    'Bébés et Femmes'
);
const produit19 = new Produit(
    19,
    'Soucette bébé',
    7.25,
    32,
    5,
    'Bébés et Femmes'
);
const produit20 = new Produit(
    20,
    'Cup menstruelle',
    22.50,
    43,
    5,
    'Bébés et Femmes'
);
const produit21 = new Produit(
    21,
    'Serviette menstruelle',
    13.25,
    37,
    5,
    'Bébés et Femmes'
);

// console.log para ver los resultados por consola de los productos producto5
console.log(produit5);
console.log(produit5.getId());
console.log(produit5.getAchats(1));
// producto4
console.log(produit4.getTitle());
console.log(produit4.getAchats(5));
// producto6
console.log(produit6.getPrixTotal());
console.log(produit6.getAchats(3));

// resultados del carrito agregado comienza vacio
console.log(panier);
// se agregan productos
produit4.ajouterAuPanier(1);
produit1.ajouterAuPanier(2);
produit5.ajouterAuPanier(4);
// resultado del carrito final
console.log(panier);



// Nuevos arrays para filtrar productos y eliminarlos Array
let produitAuPanier = [
    {
        title: 'Brosse à dents',
        id: 1,
        categorie: 'Salle de Bains'
    }, {
        title: 'Éponge de luffa',
        id: 4,
        categorie: 'Salle de Bains'
    }, {
        title: 'Shampooing',
        id: 5,
        categorie: 'Salle de Bains'
    }, {
        title: 'Cup menstruelle',
        id: 20,
        categorie: 'Bébés et Femmes'
    }, {
        title: 'Couches bébé lavables',
        id: 16,
        categorie: 'Bébés et Femmes'
    }, {
        title: 'Capsules à Café',
        id: 11,
        categorie: 'Cuisine'
    }, {
        title: 'Brosse vaisselle bois',
        id: 8,
        categorie: 'Cuisine'
    }, {
        title: 'Sprays nettoyants',
        id: 15,
        categorie: 'Maison'
    }
];
// Probé usando el mismo nombre del array ya creado panier(carrito), que al principio esta vacio y despues le agregue 3 productos, pero no me toma el metodo filter con un array ya creado como panier que supuestamente tiene agregado productos. Por eso invente un nuevo array con algunos productos "agregados" por asi decir para hacer la idea de filtro, pero no me queda super clara la idea, partiendo del console.log(panier) de la linea 310 que ya me figuran agregados los productos, para eliminar alguno de ellos. Nose si me explico, jaja 

// método filter
let item_a_supprimer = 1;
let nouveauPanier = produitAuPanier.filter(
    (produit) => produit.id !== item_a_supprimer
);
// console.log para ver el filtro ya hecho
console.log(nouveauPanier);