
// Bueno intenté descubrir porqué no me toma el produit.id de la linea 260 y creo que es porque apreto el boton de agregar al carrito se pushea como objeto y no me toma el id de adento entonces me lo muestra como null y creo que por eso depues no encuentra el id, nombre, precio y todo. Debe ser un error chiquito pero no me voy cuenta que toquetear



// Se carga primer en la ventana
window.onload = () => {
    renderProduits(produits);
    // boton agregar al carrito con evento
    const btnAjouterAuPanier = document.querySelectorAll(
        '.container__home--button'
    );
    btnAjouterAuPanier.forEach(
        (btn) => btn.addEventListener("click", (e) => ajouterAuPanier(e))
    );
    // boton eliminar del carrito con evento
    const btnSupprimerAuPanier = document.querySelectorAll(
        '.container__home--button'
    );
    btnSupprimerAuPanier.forEach(
        (btn) => btn.addEventListener("click", (id) => supprimerAuPanier(id))
    );
}

// Funciones de LocalStorage
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
function saveInLocalStorage(key, item) {
    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)
}

// Mi base de datos de todos los productos existentes en la boutique Array de productos y cada uno con sus objetos
const produits = [
    // Productos del Baño
    {
        id: 1,
        nom: 'Brosse à dents',
        prix: 7.5,
        stock: 15,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    }, {
        id: 2,
        nom: 'Savon de main',
        prix: 4.80,
        stock: 10,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    }, {
        id: 3,
        nom: 'Gel de douche',
        prix: 9.25,
        stock: 15,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    }, {
        id: 4,
        nom: 'Éponge de luffa',
        prix: 5.50,
        stock: 5,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    }, {
        id: 5,
        nom: 'Shampooing',
        prix: 10.50,
        stock: 18,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    }, {
        id: 6,
        nom: 'Àprès shampooing',
        prix: 12.80,
        stock: 7,
        fraisDenvoi: 5,
        categorie: 'Salle de Bains'
    },
    // Productos de la Cocina
    {
        id: 7,
        nom: 'Éponge de coco',
        prix: 14.35,
        stock: 9,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    }, {
        id: 8,
        nom: 'Brosse vaisselle bois',
        prix: 3.25,
        stock: 22,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    }, {
        id: 9,
        nom: 'Savon solide vaisselle',
        prix: 4.50,
        stock: 8,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    }, {
        id: 10,
        nom: 'Pailles réutilisables',
        prix: 11.75,
        stock: 17,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    }, {
        id: 11,
        nom: 'Capsules à Café',
        prix: 27.25,
        stock: 50,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    }, {
        id: 12,
        nom: 'Bee Wraps',
        prix: 22.90,
        stock: 11,
        fraisDenvoi: 5,
        categorie: 'Cuisine'
    },
    // Productos de la Casa
    {
        id: 13,
        nom: 'Sac réutilisables',
        prix: 17.40,
        stock: 38,
        fraisDenvoi: 5,
        categorie: 'Maison'
    }, {
        id: 14,
        nom: 'Les gargouilles',
        prix: 35,
        stock: 14,
        fraisDenvoi: 5,
        categorie: 'Maison'
    }, {
        id: 15,
        nom: 'Sprays nettoyants',
        prix: 28.50,
        stock: 20,
        fraisDenvoi: 5,
        categorie: 'Maison'
    },
    // Productos de Bebés y Mujeres
    {
        id: 16,
        nom: 'Couches bébé lavables',
        prix: 12.50,
        stock: 16,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }, {
        id: 17,
        nom: 'Bavoir en silicone',
        prix: 10.65,
        stock: 8,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }, {
        id: 18,
        nom: 'Vaiselle bébé',
        prix: 18.75,
        stock: 3,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }, {
        id: 19,
        nom: 'Soucette bébé',
        prix: 7.25,
        stock: 32,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }, {
        id: 20,
        nom: 'Cup menstruelle',
        prix: 22.50,
        stock: 43,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }, {
        id: 21,
        nom: 'Serviette menstruelle',
        prix: 13.25,
        stock: 37,
        fraisDenvoi: 5,
        categorie: 'Bébés et Femmes'
    }
]
console.log(produits);
// Array del carrito vacio inicial y en el localStorage
let panier = getLocalStorage("listeProduitsPanier") || [];
console.log(panier);

// Interaccion con el HTML para renderizar productos
const renderProduits = (produits) => {
    const produitsDiv = document.getElementById("60");
    //Si el parametro está vacio o es undefined
    if (produitsDiv) {
        produitsDiv.innerHTML = "";
        let container = "";
        // En cada producto de productos se le agrega un contenido que se va a repetir en c/u
        produits.forEach((produit) => {
            container = `<div class="container__boutique--card img-prod${produit.id} col-sm-12 col-md-6 col-lg-4">
                            <div class="card-body">
                                <h4 class="container__boutique--card-title">
                                    ${produit.nom}
                                    <span>${produit.prix}€</span>
                                </h4>
                                <button type="button" id="btnAjouterAuPanier" class="container__home--button" required="required">
                                        Ajouter au panier
                                </button>
                                <button type="button" id="btnSupprimerAuPanier" class="container__home--button" required="required">
                                        Supprimer
                                </button>
                            </div>
                        </div> `;
            produitsDiv.innerHTML += container;
        });
    }
};
console.log(panier);
console.log(produits);


// Funcion para agregar productos al carrito de compras
const ajouterAuPanier = (evenement) => {
    const idDuProduitAchercher = evenement.target.id;
    const chercherProduitDB = produits.find(
        (produit) => produit.id == idDuProduitAchercher
    );
    panier.push(chercherProduitDB);
    saveInLocalStorage("listeProduitsPanier", panier);
};
console.log(panier);

// Renderizar los productos cargados al carrito en el HTML
const renderPanier = (produits) => {
    const panierDiv = document.getElementById("80");
    //Si el parametro está vacio o es undefined
    if (panierDiv) {
        panierDiv.innerHTML = "";
        let html = "";
        if (!produits || produits.length === 0) {
            // Esta parte no la veo escrita en ningun lado lo ideal seria que aparezca en el carrito cuando no haya nada 
            panierDiv.innerHTML = `<p> Panier vide - Aucun produit </p>`;
            return;
        }
        // Aca no sé que pasa que me toma como null los valores de mi array productos, nose si es porque dentro de mi array tengo objetos?
        produits.forEach(produit => {
            html = `
            <div class="produitsPanier text-center col-sm-12 col-md-6 col-lg-4">
                <h3>
                ${produit.nom}
                </h3>
                <p>${produit.prix}€</p>
                <button type="button" class="container__home--button btn-supprimer" onclick="supprimerAuPanier('${produit.id}')">Supprimer</button>
            </div>
            `;
            panierDiv.innerHTML += html;
        });
    }
};
console.log(panier);


// Funcion para eliminar productos del carrito de compras
const supprimerAuPanier = (id) => {
    const chercherProduitAuPanier= panier.filter(produit => produit.id !== id);
    //Se modifica el carrito original con el nuevo array;
    panier = chercherProduitAuPanier;
    localStorage.removeItem(chercherProduitAuPanier);
    renderPanier(panier);
}
console.log(panier);


// jQuery, se crean 4 botones para poder filtrar los productos por categorias

// Boton del Baño con selector avanzado
const boutonSalleDeBains = $('form button:first-child');
console.log(boutonSalleDeBains);

// Boton de la Cocina con selector combinacion
const boutonCuisine = $('form #cuisine');
console.log(boutonCuisine);

// Boton de la Casa con selector combinacion
const boutonMaison = $('form #maison');
console.log(boutonMaison);

// Boton Bebés y Mujeres con selector avanzado
const boutonBebesEtFemmes = $('form button:last-child');
console.log(boutonBebesEtFemmes);


// Agregar método on click a los botones utilizando jQuery
$('#bouton').click(function produitsPourCategorie(value) {
    console.log(value.target);
});

// filtrar productos por categoria
    const produitsPourCategorie= (value) => {
    const filterProduitsPourCategorie= produits.filter(produit => produit.categorie !== value);
    produits = filterProduitsPourCategorie;
    renderProduits(filterProduitsPourCategorie);
    console.log(filterProduitsPourCategorie);
}
