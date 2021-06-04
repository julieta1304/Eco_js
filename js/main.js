
// Variables
let fois = prompt(
    'Est-ce la première fois que vous visitez un website écologique?'
);
let produits = prompt('Avez vous déjà acheté un produit écologique?');
// variables 2
let entrer = prompt(
    "Si vous voulez s'inscrire à notre newsletter, entrer votre addrese email"
);
let sortir = entrer + " " + "vous êtes maintenant abboné";

// Condicionales, prompt, alert
// Pregunta intenté poner console.log () en vez del alert () y no me lo tomaba, nosé si hice algo mal o que onda. 

if (fois && (fois == 'oui' || fois == 'Oui')) {
    // Operadores en js
    if (produits && (produits == 'oui' || produits == 'Oui')) {
        alert(
            `Bienvenue à notre site écolo, nous esperons que vous aimerez nos produits`
        );
    } else {
        alert(
            `Bienvenue à notre site écolo, c'est le moment de votre vie de commencer dans le chemin zéro dechets et de la consommation`
        );
    }
} else if (fois && (fois == 'non' || fois == 'Non')) {
    if (produits && (produits == 'oui' || produits == 'Oui')) {
        alert(
            `Bienvenue à notre site écolo, vous êtes maintenant partie de notre comunity, nous esperons que vous aimerez nos produits et nos informations`
        );
    } else {
        alert(
            `Bienvenue à notre site écolo, nous sommes heureux de que vous s'interesse de nos produits et de commencer a être partie de la community zéro dechets`
        );
    }
};
// Lo unico que no me salio fue si la gente pone enter sin escribir nada, osea deja vacio, pensé que era con la opcion entrer == " " pero no me sale
if (entrer && (entrer == " " || entrer == 'non')) {
    alert("Vous pouvez re-joindre nous quand vous voulez");
} else {
    alert(sortir);
}
