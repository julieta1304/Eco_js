// Lo que se carga primero en la pagina
window.onload = () => {
    renderProduits(produits);
}
// Método ajax
$
    .ajax({
        method: 'GET',
        // Mi array de productos como base de datos en JSON
        url: '../js/produits.json'
    })
    .done((produits) => {
        console.log(produits);
    })
    .fail((erreur) => {
        console.log(erreur);
    });

// Funciones de LocalStorage
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
function saveInLocalStorage(key, item) {
    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)
}

// Mi base de datos de todos los productos existentes en la boutique Array de
// productos y cada uno con sus objetos
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
// Array del carrito vacio inicial y en el localStorage
let panier = getLocalStorage("listeProduitsPanier") || [];
console.log(panier);

// Interaccion con el HTML para renderizar productos
let renderProduits = (produits) => {
    const produitsDiv = document.getElementById("60");
    //Si el parametro está vacio o es undefined
    if (produitsDiv) {
        produitsDiv.innerHTML = "";
        let container = "";
        // En cada producto de productos se le agrega un contenido que se va a repetir
        // en c/u
        produits.forEach((produit) => {
            container = `<div class="container__boutique--card img-prod${produit.id} col-sm-12 col-md-6 col-lg-4">
                            <div class="card-body">
                                <h4 class="container__boutique--card-title">
                                    ${produit.nom}
                                    <span>${produit.prix}€</span>
                                </h4>
                                <button type="button" id="btnAjouterAuPanier" value=${produit.id} class="btnAjouterPanier container__home--button" required="required">
                                        Ajouter au panier
                                </button>
                                <button type="button" id="btnSupprimerAuPanier" value=${produit.id}class="btnSupprimerPanier container__home--button" required="required">
                                        Supprimer
                                </button>
                            </div>
                        </div> `;
            produitsDiv.innerHTML += container;
        });
    }
};
// Funcion para agregar productos al carrito de compras
const ajouterAuPanier = (id) => {
    const idDuProduitAchercher = id.target.value;
    const chercherProduitDB = produits.find(
        (produit) => produit.id == idDuProduitAchercher
    );
    console.log(id.target.value);
    panier.push(chercherProduitDB);
    saveInLocalStorage("listeProduitsPanier", panier);
    renderPanier(panier)
};
// Renderizar los productos cargados al carrito en el HTML
const renderPanier = (panier) => {
    const panierDiv = document.getElementById("90");
    //Si el parametro está vacio o es undefined
    if (panierDiv) {
        panierDiv.innerHTML = "";
        let html = "";
        if (!panier || panier.length === 0) {
            // carrito cuando no haya nada
            panierDiv.innerHTML = `<p class="container__boutique--card-title text-center"> Panier vide - Aucun produit </p>`;
            return;
        }
        panier.forEach(produit => {
            html = `
            <div class="table-responsive" id="90">
            <table class="table table-bordered cart">
                <thead class="cart__header">
                    <tr>
                        <th colspan="2">PRODUIT</th>
                        <th colspan="1">PRIX</th>
                        <th colspan="1">SUPPRIMER</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="cart__body">
                        <td colspan="2" class="cart__meta">
                        <h4 class="container__boutique--card-title">${produit.nom}</h4>
                        </td>
                        <td colspan="1" class="cart__price">
                        <h4 class="container__boutique--card-title">${produit.prix}€</h4>
                        </td>

                        <td colspan="1" class="cart__price">
                        <button type="button" class="btnSupprimer container__home--button" id="supprimerPanier" value="${produit.id}">X</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
            `;
            panierDiv.innerHTML += html;
        });
        console.log(panier);
        // Calcular el total de los productos en el carrito 
    let total = 0; for (let i =
        0; i < panier.length; i++) {     total += panier[i].prix }
        panierDiv.innerHTML += ` 
        <div class="table-responsive" id="90">
        <table class="table table-bordered cart">
            <thead class="cart__header">
                <tr>
                    <th colspan="1">TOTAL</th>
                    <th colspan="1">VIDER PANIER</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="1">
                        <div class="cart__total">
                            <h4 class="container__boutique--card-title">${total}€</h4>
                        </div>
                    </td> 
                    <td colspan="1">
                        <div class="cart__total">
                            <button type="button" id="btnViderPanier" class="container__home--button btnViderPanier">
                                Vider
                            </button>
                        </div>
                    </td> 
                </tr>
            </tbody>
            </table>
        </div>
        `; 
        console.log(total);
    }
    // Boton de eliminar producto del carrito en el carrito
    const btnSupprimer = document.querySelectorAll('.btnSupprimer');
    btnSupprimer.forEach(
        (btn) => btn.addEventListener('click', (id) => supprimerAuPanier(id)),
    );
    // boton vaciar carrito de compras
    const btnVider = document.querySelectorAll(".btnViderPanier");
    btnVider.forEach(
        (btn) => btn.addEventListener("click", () => viderPanier())
    );
}
// Funcion para eliminar productos del carrito de compras
const supprimerAuPanier = (id) => {
    const chercherProduitAuPanier = panier.filter(
        produit => produit.id != id.target.value
    );
    console.log(chercherProduitAuPanier);
    //Se modifica el carrito original con el nuevo array;
    panier = chercherProduitAuPanier;
    console.log(panier);
    localStorage.removeItem(chercherProduitAuPanier);
    renderPanier(panier);
    console.log(id.target.value);
}
// Funcion para vaciar el carrito de compras
function viderPanier() {
   // Limpiamos los productos guardados
    panier = [];
   // Renderizamos los cambios
    renderPanier(panier);
    console.log(panier);
}


// jQuery, se crean 4 botones para poder filtrar los productos por categorias
// Boton del Baño con selector avanzado
const boutonSalleDeBains = $('form button:first-child');
// Boton de la Cocina con selector combinacion
const boutonCuisine = $('form #cuisine');
// Boton de la Casa con selector combinacion
const boutonMaison = $('form #maison');
// Boton Bebés y Mujeres con selector avanzado
const boutonBebesEtFemmes = $('form #bebesEtFemmes');
// Boton de todos los productos
const boutonTousLesProduits = $('form button:last-child');

// Agregar método on click a los botones utilizando jQuery
$('#bouton').click(function renderProduits(produits) {
    produits.preventDefault();
})
// Filtrado de los productos por categorias
$('#bouton').click(function produitsPourCategorie(value) {
    value.preventDefault();
    filterCategories = produits.filter(
        (produit) => produit.categorie == value.target.value
    );
    renderProduits();
});
// Renderizar los productos por categorias
let filterCategories = [];
renderProduits = () => {
    const produitsDiv = document.getElementById("60");
    if (produitsDiv) {
        produitsDiv.innerHTML = "";
        let container = "";
        if (filterCategories.length === 0) {
            produits.forEach((produit) => {
                container = `<div class="container__boutique--card img-prod${produit.id} col-sm-12 col-md-6 col-lg-4">
                <div class="card-body">
                    <h4 class="container__boutique--card-title">
                        ${produit.nom}
                        <span>${produit.prix}€</span>
                    </h4>
                    <button type="button" id="btnAjouterAuPanier" value=${produit.id} class="container__home--button btnAjouterPanier" required="required">
                            Ajouter au panier
                    </button>
                    <button type="button" id="btnSupprimerAuPanier" value=${produit.id} class="container__home--button btnSupprimerPanier" required="required">
                            Supprimer
                    </button>
                </div>
            </div> `;
                produitsDiv.innerHTML += container;
            });
        } else {
            filterCategories.forEach((produit) => {
                container = `<div class="container__boutique--card img-prod${produit.id} col-sm-12 col-md-6 col-lg-4">
                                <div class="card-body">
                                    <h4 class="container__boutique--card-title">
                                        ${produit.nom}
                                        <span>${produit.prix}€</span>
                                    </h4>
                                    <button type="button" id="btnAjouterAuPanier" value=${produit.id} class="container__home--button btnAjouterPanier" required="required">
                                            Ajouter au panier
                                    </button>
                                    <button type="button" id="btnSupprimerAuPanier" value=${produit.id} class="container__home--button btnSupprimerPanier" required="required">
                                            Supprimer
                                    </button>
                                </div>
                            </div> `;
                produitsDiv.innerHTML += container;
            });
        }
        // boton agregar producto al carrito de compras
        const btnAjouterAuPanier = document.querySelectorAll(".btnAjouterPanier");
        btnAjouterAuPanier.forEach(
            (btn) => btn.addEventListener("click", (id) => ajouterAuPanier(id))
        );
        // boton eliminar producto del carrito de compras
        const btnSupprimerAuPanier = document.querySelectorAll(".btnSupprimerPanier");
        btnSupprimerAuPanier.forEach(
            (btn) => btn.addEventListener("click", (id) => supprimerAuPanier(id))
        );
    }
};
