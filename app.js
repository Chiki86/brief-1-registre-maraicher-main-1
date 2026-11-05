// Registre des opérations maraîchères — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { OPERATIONS, ajouterOperation, formaterOperation, listerOperations, trouverParId } from './src/registre.js';
import { filtrerParCulture, filtrerParParcelle, trierParCout, trierParDate } from './src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/operations.json';
async function afficherAccueil (operations) {
  console.log ('=================================================');
  console.log('   REGISTRE DES OPÉRATIONS MARAÎCHÈRES');
  console.log('   Mon exploitation maraîchère pédagogique');
  console.log('==================================================');
  console.log(`${operations.length} opération(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
  console.log('');
}

function afficherMenu() {
  console.log('--------------------- MENU PRINCIPAL ---------------------');
  console.log('1. Ajouter une opération');
  console.log('2. Lister les opérations');
  console.log('3. Rechercher (identifiant, parcelle, culture)');
  console.log('4. Trier (coût, date, décroissant)');
  console.log('5. Synthèse des dépenses');
  console.log('6. Supprimer une opération');
  console.log('7. Modifier une opération');
  console.log('0. Quitter');
}

async function actionAjouter(operations) {
  console.log ('------ Ajout de nouvelle opération ------');
  const id = await demander ('Identifiant (ex. O01');
  if (id === null) return;
  const date = await demander ('Date (AAAA-MM-JJ) : ');
  if (date === null) return;
  const parcelle = await demander ('Parcelle (ex. P1) : ');
  if (parcelle === null) return;
  const culture = await demander('Culture (ex. tomate) : ');
  if (culture === null) return;
  const operation = await demander(`Opération (${OPERATIONS.join(', ')}) : `);
  if (operation === null) return;
  const coutFCFA = await demander('Coût en FCFA : ');
  if (coutFCFA === null) return;

  const saisie = {
    id: id.toUpperCase(),
    date: date,
    parcelle: parcelle.toUpperCase(),
    culture: culture.toLowerCase(),
    operation: operation.toLowerCase(),
    coutFCFA: coutFCFA,
  };

  const erreurs = ajouterOperation(operations,saisie);
  if (erreurs.length > 0) {
  console.log('Opération refusée :');
    for (const e of erreurs) console.log(`  - ${e}`);
    console.log(`Le registre compte toujours ${operations.length} opération(s).`);
  } else {
    await enregistrerJson(FICHIER_DONNEES, operations);
    console.log(`Opération ${saisie.id} ajoutée. Le registre compte ${operations.length} opération(s).`);
  } 
}

function actionLister(operations) {
  console.log(`--- Liste des opérations (${operations.length}) ---`);
  console.log(listerOperations(operations));
}

async function actionRechercher(operations) {
  console.log('-----Rechercher-----');
  console.log('1. Par identifiant');
  console.log('2. Par parcelle');
  console.log('3. Les opérations d\'une culture');
  const sousMenu = await demander ('Veuillez entrer votre choix');
  if (sousMenu === null) return;
  
  if (sousMenu === '1') {
    const id = await demander('Identifiant : ');
    if (id === null) return;
    const op = trouverParId(operations, id.toUpperCase());
    if (op === undefined) console.log(`Opération ${id.toUpperCase()} introuvable.`);
    else console.log(formaterOperation(op));
  } else if (sousMenu === '2') {
    const parcelle = await demander('Parcelle : ');
    if (parcelle === null) return;
    const liste = filtrerParParcelle(operations, parcelle.toUpperCase());
    console.log(`${liste.length} opération(s) sur la parcelle ${parcelle.toUpperCase()} :`);
    console.log(listerOperations(liste));
  } else if (sousMenu === '3') {
    const culture = await demander('Culture : ');
    if (culture === null) return;
    const liste = filtrerParCulture(operations, culture.toLowerCase());
    console.log(`${liste.length} opération(s) pour la culture ${culture.toLowerCase()} :`);
    console.log(listerOperations(liste));
  } else {
    console.log('Choix invalide. Retour au menu principal.');
  }
}

async function actionTrier(operations) {
  console.log('-----Trier-----');
  console.log('1. Par coût croissant')
  console.log('2. Par coût décroissant');
  console.log('3. Par date, de la plus ancienne à la plus récente');
  const sousMenu = await demander ('Veuillez entrer votre choix');
  if(sousMenu === null) return;

  if (sousMenu === '1') console.log(listerOperations(trierParCout(operations)));
  else if (sousMenu === '2') console.log(listerOperations(trierParCoutDecroissant(operations)));
  else if (sousMenu === '3') console.log(listerOperations(trierParDate(operations)));
  else console.log('Choix invalide. Retour au menu principal.');
}

function actionSynthese(operations){
  console.log('--- Synthèse des dépenses enregistrées ---');
  console.log(`Opérations enregistrées : ${operations.length}`);
   console.log(`Total des coûts : ${totalCouts(operations)} FCFA`);
  console.log('Par parcelle : ');

  const synthese = syntheseParParcelle(operations);
  for (const [parcelle, info] of object.entries(synthese)) {
    console.log(`${parcelle} : ${info.nombre} opération(s), ${info.total} FCFA`);
  }
  const minMax = coutMinMax(operations);
  if (minMax === null) console.log('Coût minimum et maximum : aucune donnée');
  else console.log(`Coût minimum : ${minMax.min} FCFA · Coût maximum : ${minMax.max} FCFA`);
  
  const plusCouteuse = parcelleLaPlusCouteuse(operations);
  if (plusCouteuse !== null) {
    console.log(`Parcelle la plus coûteuse : ${plusCouteuse.parcelle} (${plusCouteuse.total} FCFA)`);
  }
  console.log('Attention: ces chiffres représentent uniquement les dépenses. Sans les revenus, ils ne reflètent pas la rentabilité de votre exploitation.');
}

async function actionSupprimer(operations) {
  const id = await demander ("Veuillez entrer l'identifiant à supprimer : ");
  if (id === null) return;
  const supprimee = supprimersOperation(operations, id.toUpperCase());
  if (supprimee === undefined) console.log(`Opération ${id.toUpperCase()} introuvable.`);
  else { await enregistrerJson(FICHIER_DONNEES, operations); console.log(`Opération ${supprimee.id} supprimée.`); }
}

async function actionModifier(operations) {
  const id = await demander ("Veuillez entrer l'identifiant à modifier : ");
  if (id === null) return;
  const parcelle = await demander('Veuillez entrer la parcelle à modifier : ');
  if (parcelle === null) return;
  const valeur = await demander('Veuillez entrer une nouvelle valeur : ');
  if (valeur === null) return;
  const erreurs = modifierOperation(operations, id.toUpperCase(), parcelle, valeur);
  if (erreurs.length > 0) { for (const e of erreurs) console.log(`  - ${e}`); }
  else { await enregistrerJson(FICHIER_DONNEES, operations); console.log('Opération modifiée.');
 }
}
async function main() {
ouvrirSaisie();
let operations = [];


}