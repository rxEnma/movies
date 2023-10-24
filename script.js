// Fermeture du popup quand on clique sur la croix ou sur BonChan :D
let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});
let BonChan = document.querySelector('.BonChan');
    BonChan.addEventListener('click', function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});

  // Se montre quand la page se charge
  window.onload = function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    welcome.play();
    //masque la card jusqu'a cliquer sur "Commencer"
    gameContainer.style.visibility ='hidden';
}


class person {
    constructor(id, pseudo, picture, age, gender, search, region, description){
        this.id = id;
        this.pseudo = pseudo;
        this.picture = picture;
        this.age = age;
        this.gender = gender;
        this.search = search;
        this.region = region;
        this.description = description;
    }
}

let profile = document.getElementById("profile");


// Récupérer les informations du profil


const profilElement = document.getElementById("profil"); // Remplacez "profil" par l'ID de votre élément contenant le profil

if (profilElement) {
    const id = profilElement.getAttribute("data-id");
    const pseudo = profilElement.querySelector(".pseudo").textContent;
    const picture = profilElement.querySelector(".picture").getAttribute("src");
    const age = profilElement.querySelector(".age").textContent;
    const gender = profilElement.querySelector(".gender").textContent;
    const search = profilElement.querySelector(".search").textContent;
    const region = profilElement.querySelector(".region").textContent;
    const description = profilElement.querySelector(".description").textContent;

    // Stocker les informations dans des cookies
    document.cookie = `id=${id}`;
    document.cookie = `pseudo=${pseudo}`;
    document.cookie = `picture=${picture}`;
    document.cookie = `age=${age}`;
    document.cookie = `gender=${gender}`;
    document.cookie = `search=${search}`;
    document.cookie = `region=${region}`;
    document.cookie = `description=${description}`;
}

// Fonction pour récupérer une valeur de cookie par son nom
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Exemple d'utilisation pour récupérer une information spécifique
const ageFromCookie = getCookie("age");
console.log("Âge récupéré depuis le cookie : " + ageFromCookie);

let homme1 = new person (
    '97',
    'Kim',
    'assets/homme1.jpg',
    '36',
   'homme',
 'femmes et hommes',
    '76',
    `Optimiste, créatif et avide de nouveaux horizons. Passionné par l'art, les voyages et les conversations profondes. À la recherche d'une connexion authentique et de complicité. Prêt à créer des souvenirs uniques ensemble.`,

    );
let homme2 = new person (
    '98',
    'Patrice',
    'assets/homme2.jpg',
    '43',
    'homme',
'hommes',
    '27',
    `Salut, je m'appelle Patrice. j'aime sortir faire la fete mais aussi les soirées tranquilles à la maison. Je recherche quelqu'un qui partage ma passion pour le tuning afin de construire la voiture de nos rêves ensemble. Découvre plus sur moi en matchant!`,

    );
let homme3 = new person (
    '99',
    'Emmanuel',
    'assets/homme3.jpg',
    '41',
    'homme',
'femmes',
    '75',
    `Moi c'est Emmanuel, un homme passionné par la musique, la nature et les voyages. Je cherche une partenaire de vie pour partager des moments intenses et des conversations profondes. Découvrons-nous si tu es prête à découvrir le monde à mes côtés et à vivre de belles aventures ensemble!`,

    );
let homme4 = new person (
    '100',
    'Ajay',
    'assets/homme4.jpg',
    '32',
    'homme',
'femmes',
    '59',
    `Homme intrépide et aventurier dans l'âme, toujours prêt à relever de nouveaux défis. Passionné de musique et de nature, j'adore jouer de la guitare au coin d'un feu de camp. Mon attitude bienveillante fait de moi un compagnon idéal pour partager des moments authentiques et des rires complices.`,

    );
let homme5 = new person (
    '101',
    'Frédéric',
    'assets/homme5.jpg',
    '54',
    'homme',
'femmes',
    '63',
    `Je suis un homme au cœur tendre et un véritable passionné de la nature. Amoureux des animaux, j'aime passer du temps à explorer les sentiers de randonnée et à observer les étoiles la nuit. Toujours à l'écoute et bienveillant, je cherche une partenaire pour partager des moments de complicité, de douceur et d'aventure.`,
    
    );
let homme6 = new person (
    '102',
    'Gerard',
    'assets/homme6.jpg',
    '59',
    'homme',
'femmes',
    '14',
    `Salut les filles ! Moi c'est Gérard, un véritable homme au grand cœur. Passionné de foot, bière et barbecues, je suis un vrai mec de l'ancienne école. J'aime les soirées entre potes et les blagues un peu grivoises. Si tu cherches un gars simple, qui aime rigoler et prendre la vie comme elle vient, je suis ton homme!`,
    
    );
let homme7 = new person (
    '103',
    'Nadesh',
    'assets/homme7.jpg',
    '27',
    'homme',
'femmes',
    '69',
    `Bonjour à tous ! Je m'appelle Nadesh, une âme créative et passionnée de 27 ans. J'aime explorer le monde de l'art, que ce soit à travers la peinture, la danse ou la musique. J'ai un grand amour pour les voyages et la découverte de nouvelles cultures. Recherche quelqu'un pour partager des aventures et des moments de complicité enrichissants. Au plaisir de vous rencontrer!`,

    );
let homme8 = new person (
    '104',
    'Marc',
    'assets/homme8.jpg',
    '38',
    'homme',
'hommes',
    '31',
    `Hey les gars ! Je suis Marc, un homme de 38 ans, passionné et authentique. J'adore la musique, la danse et les discussions profondes. Toujours partant pour une bonne dose d'aventure, je cherche quelqu'un avec qui partager des moments de complicité, de rires et de tendresse. Prêt à découvrir ensemble ce que la vie nous réserve. `,
    
    );
let homme9 = new person (
    '105',
    'Léo',
    'assets/homme9.jpg',
    '20',
    'homme',
'femmes',
    '33',
    `Salut les filles! Moi c'est Léo: amoureux des voyages, mordu de lecture et passionné d'humour. Je suis la recherche d'une complicité sincère et de moments mémorables. Prêt à explorer le monde avec toi. Like pour en savoir plus.`,
   
    );
let homme10 = new person (
    '106',
    'David',
    'assets/homme10.jpg',
    '26',
    'homme',
'femmes',
    '35',
    `Esprit libre, passionné d'aventure et de découvertes. Toujours prêt à embrasser les surprises que la vie offre. À la recherche d'une connexion authentique et de moments remplis de rires. Match avec moi et créons notre propre aventure ensemble!`,
    
    );
let homme11 = new person (
    '107',
    'Henry',
    'assets/homme11.jpg',
    '51',
    'homme',
'femmes',
    '13',
    `A la fois doux et aventureux, je suis passionné de cuisine. J'aime préparer de délicieux repas pour mes proches. Un esprit créatif et une joie de vivre contagieuse, je saurais te faire rire et t'emporter dans des escapades spontanées. Je recherche une complice pour partager des moments de complicité et d'émerveillement.`,
    
    );
let homme12 = new person (
    '108',
    'Nassim',
    'assets/moi.jpg',
    '24',
    'homme',
    'femmes',
    '76',
    `description`,

    );
let femme1 = new person (
    '109',
    'Laeticia',
    'assets/femme1.jpg',
    '29',
    'femme',
    'homme',
    '35',
    `Salut! Je suis passionnée par les voyages, j'adore explorer de nouveaux horizons et découvrir différentes cultures. Si tu es à la recherche d'une connexion authentique, d'une dose d'humour et d'une personne ouverte d'esprit, alors nous pourrions être des âmes sœurs en devenir. Faisons connaissance, partageons des rires et créons des souvenirs inoubliables ensemble`,
    'femme'
    );
let femme2 = new person (
    '110',
    'Karen',
    'assets/femme2.jpg',
    '38',
    'femme',
'femmes',
    '77',
    `Je me présente: Karen, une femme élégante et mystérieuse. Un regard pétillant et un charme envoûtant, je sais captiver les cœurs. Passionnée de littérature et de voyage, je cherche une compagne cultivée et ouverte d'esprit pour explorer le monde et créer des souvenirs inoubliables.`,
    );
let femme3 = new person (
    '111',
    'Laura',
    'assets/femme3.jpg',
    '32',
    'femme',
'hommes',
    '75',
    `Esprit curieux, aventurière dans l'âme. Passionnée par l'art, la nature et les discussions profondes. À la recherche d'une connexion authentique. Prêt à créer des souvenirs inoubliables. Rejoins-moi dans cette aventure! `,

    );
let femme4 = new person (
    '112',
    'Catherine',
    'assets/femme4.jpg',
    '56',
    'femme',
'hommes',
    '27',
    `Je suis une femme dynamique et authentique. Mon sourire contagieux et ma joie de vivre illumineront tes journées. Passionnée de sport et d'aventure, je recherche un partenaire qui saura partager mes passions et m'accompagner dans de nouvelles expériences.`,

    );
let femme5 = new person (
    '113',
    'Elisabeth',
    'assets/femme5.jpg',
    '58',
    'femme',
    'hommes et femmes',
    '69',
    `Je suis une femme douce et bienveillante. Mon sourire chaleureux illumine chaque pièce et mon optimisme est contagieux. Passionnée par le bien-être et le développement personnel, je recherche un partenaire qui partage ma quête de croissance et d'épanouissement. Toujours prête à soutenir ceux que j'aime, je suis à la recherche d'une relation sincère et équilibrée. Prêt à construire une belle histoire avec ensemble?
    `,

    );
let femme6 = new person (
    '114',
    'Charlotte',
    'assets/femme6.jpg',
    '34',
    'femme',
'hommes et femmes',
    '14',
    `Je me présente: Charlotte, une femme passionnée et créative. Mon esprit libre et mon énergie débordante ne manqueront pas de vous séduire. Amoureuse des arts et de la nature, je trouve mon inspiration dans les paysages enchanteurs et les émotions intenses. À la recherche d'un compagnon de voyage pour explorer le monde et savourer les petits plaisirs de la vie, je souhaite partager une connexion profonde et épanouissante. Embarquons dans une aventure inoubliable ensemble!`,

    );
let femme7 = new person (
    '115',
    'Louise',
    'assets/femme7.jpg',
    '24',
    'femme',
'hommes',
    '80',
    `Jeune femme pétillante, à la recherche d'une connexion authentique. Passionnée de voyages et de découvertes, j'aime explorer de nouveaux horizons et rencontrer des personnes inspirantes. Dynamique et ambitieuse, j'apprécie les conversations profondes autant que les moments de légèreté. À la recherche d'un partenaire attentionné, avec qui je pourrais construire une relation basée sur le respect et la complicité. Prêt à embarquer dans cette aventure?`,
    
    );
let femme8 = new person (
    '116',
    'Léanne',
    'assets/femme8.jpg',
    '19',
    'femme',
'femmes et hommes',
    '95',
    `Moi c'est Léanne, une femme au charme envoûtant et à l'esprit libre. Passionnée d'art et de littérature, j'adore me perdre dans les musées et dévorer des romans captivants. Amoureuse de la nature, j'apprécie les longues balades en forêt et les couchers de soleil sur la plage. À la recherche d'une connexion profonde et d'une complicité authentique, j'attends celui qui saura conquérir mon cœur. Soit pret à vivre un moment passionnant avec moi!`,
   
    );
let femme9 = new person (
    '117',
    'Juhi',
    'assets/femme9.jpg',
    '21',
    'femme',
'hommes',
    '33',
    `Je suis une femme pleine de vie à la recherche de ma moitié. À la fois douce et audacieuse, j'adore les voyages, la cuisine et les longues promenades en nature. Je souhaite trouver quelqu'un avec qui partager des moments de complicité, de rires et de tendresse. Êtes-vous prêt à vivre une belle histoire avec moi?`,
    
    );
let femme10 = new person (
    '118',
    'Karine',
    'assets/femme10.jpg',
    '45',
    'femme',
'hommes',
    '31',
    `Passionnée de musique et d'art, je suis à la recherche d'une connexion authentique avec un partenaire attentionné. Mon esprit curieux et ma joie de vivre sont contagieux. Prêt à partager des aventures imprévisibles et des moments de complicité avec moi? Like maintenant!`,

    );
let femme11 = new person (
    '119',
    'Veronique',
    'assets/femme11.jpg',
    '57',
    'femme',
'hommes',
    '35',
    `Ma passion ? les voyages. Curieuse de découvrir de nouvelles cultures, je suis une femme dynamique qui adore explorer le monde. Je suis dotée d'un sourire chaleureux, d'un esprit ouvert et d'un sens de l'humour contagieux. Adepte d'une vie saine et équilibrée, je recherche un partenaire qui partage mes passions et mes aspirations.`,

    );
let femme12 = new person (
    '120',
    'Piper',
    'assets/femme12.jpg',
    '20',
    'femme',
'hommes',
    '76',
    `Salut, moi c'est Piper! Mon regard profond et mon sourire envoûtant vous captiveront dès le premier instant. Passionnée de musique et d'aventures, j'aime explorer de nouveaux horizons et repousser les limites de ma créativité. À la recherche d'une âme complice qui saura m'accompagner dans mes escapades, je souhaite vivre une histoire passionnée et pleine d'émotions. Sauras-tu satisfaire mes attentes ?`,
    
    );

    const personne= [homme1, homme2, homme3, homme4, homme5, homme6, homme7, homme8, homme9, homme10, homme11, homme12, femme1, femme2, femme3, femme4, femme5, femme6, femme7, femme8, femme9, femme10, femme11, femme12];

    const length = personne.length;

    for (let i = 0; i <= length; i++) {
        profile.innerHTML += `

        <div class="card" style="width: 23rem;">
        <img src="${personne[i].picture}" class="card-img-top m-0" alt="Image de ${personne[i].pseudo}" id= ${personne[i].id}>
        <div class="card-body">
          <p class="card-title text-center">Nom : ${personne[i].pseudo}</p>
          <p class="text-center">Age : ${personne[i].age}</p>
          <p class="text-center">Recherche : ${personne[i].search}</p>
          <p class="text-center">Viens du ${personne[i].region}</p>
          <div class="divButton">
          <a href="#" class="btn btn-primary btn-profile">Ajouter</a>
          <a href="#" class="btn btn-primary btn-profile">A propos</a>
          </div>
          </div>
      </div>

        
          `
    }



//     this.text.style.display = 'none'; // Par défaut, le texte est masqué.

//     this.personElement = document.getElementById();
//     this.personElement.appendChild(this.text);

//     this.personElement.addEventListener('click', () => {
//         this.toggleText();
//     });

//     toggleText() {
//     if (this.text.style.display === 'none') {
//         this.text.style.display = 'block';
//     } else {
//         this.text.style.display = 'none';
//     }
// };
