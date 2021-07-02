// Se carga primer en la ventana
window.onload = () => {
    renderProduits(produits);
    renderPanier(panier);
    const btnAjouterAuPanier = document.querySelectorAll('.container__home--button');
    btnAjouterAuPanier.forEach(btn => btn.addEventListener('click', AjouterAuPanier));
}

// Funciones de LocalStorage
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key, item) {
    let stringifiedItem = JSON.stringify(item)
    localStorage.setItem(key, stringifiedItem)
}

// Mi base de datos de todos los productos existentes en la boutique
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
// array donde se guardan los productos que vamos seleccionando
let panier = [];
// Arrow function, interaccion con el HTML
const renderProduits = produits => {
    const produitsDiv = document.querySelector('div');
    //Si el parametro está vacio o es undefined
    if (!produits || produits.length === 0) {
        produitsDiv.innerHTML = `<p> Panier vide - Aucun produits </p>`
        return;
    }
    produitsDiv.innerHTML = '';
    let container = '';
    // En cada producto del parametro productos se le agrega un contenido que se va a repetir en c/u
    produits.forEach(produit => {
        container += `
                    <div class="container__boutique--card img-${produit.id} col-sm-12 col-md-6 col-lg-4">
                        <div class="card-body">
                            <h4 class="container__boutique--card-title">
                                ${produit.nom}
                                <span>${produit.prix}</span>
                            </h4>
                            <button type="button" class="container__home--button" required="required">
                                <a class="card-btn" id='${produit.id}' href="../pages/panier.html">
                                    Ajouter au panier
                                </a>
                            </button>
                        </div>
                    </div>
        `;
    });
    // Ahora se puede observar que quedo cargado el contenido en la variable creada
    produitsDiv.innerHTML = container;
}

// Arrow function para agregar productos al carrito de compras
const AjouterAuPanier = evenement => {
    const idDuProduitAchercher = evenement.target.value;
    const chercherProduitDB = produits.find(
        element => element.id === idDuProduitAchercher
    );
    panier = getLocalStorage('panier') || [];
    console.log(panier);
    panier.push(chercherProduitDB);
    saveInLocalStorage('listeProduitsPanier', panier);
    console.log(panier);
    renderPanier(panier);
}
// Se muestran los productos en el HTML
const renderPanier = produits => {
    const panierDiv = document.querySelector('.panier');
    //Si el parametro está vacio o es undefined
    if (!produits || produits.length === 0) {
        panierDiv.innerHTML = '<p> Panier vide - Aucun produits </p>'
        return;
    }
    panierDiv.innerHTML = '';
    let html = '';
    produits.forEach(produit => {
        html += `
        <div class="produitsBoutique">
            <h2>${produit.nom}</h2>
            <button class="btn-supprimer" onclick="supprimerAuPanier('${produit.id}')">X</button>
        </div>
        `;
    });
    panierDiv.innerHTML = html;
}
// Eliminar productos del carrito de compras
const supprimerAuPanier = id => {
    console.log(panier)
    const chercherProduitAuPanier = panier.filter(
        produit => produit.id !== id
    );
    console.log(
        'Carrito sin el producto que eliminaste: ',
        chercherProduitAuPanier
    );
    //Se modifica el carrito original con el nuevo array;
    panier = chercherProduitAuPanier;
    localStorage.removeItem(chercherProduitAuPanier);
    renderPanier(panier);
}