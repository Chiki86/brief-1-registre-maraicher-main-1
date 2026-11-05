# Tableau des tâches

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | J1 | 02/11  |J'ai fait un git initial avec nouveau repository sur GitHub |
| Fiche 2 : lire et écrire le JSON | J1 | 02/11 | J'ai testé les fonctions ChargerJSON, enregistrerJSON npm run test:stockage (3 verts)|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | J2 | 03/11 | J'ai ajouté les fonctions formaterOperation, listerOperations, creerOperation, ajouterOperation npm run test : registre (13 verts) |
| Fiche 4 : rechercher et trier ; choix 3 et 4 | J2 | 03/11 (fin de la partie dans la soirée) | J'ai ajouté les fonctions  filterParParcelle, filterParcCulture|
| Fiche 5 : synthèse ; choix 5 | J2| 03/11 (fin de la partie dans la soirée) | TotalCouts, syntheseParParcelle, coutMinMax |
| app.js : interface de menu | J3 | 04/11 (debut app.js) | app.js
| Tests par un camarade ; mes propres tests | J4 | 05/11 | 15 tests par moi, 2 test par Tidiane Cheikh dans releves-test.md |
| Fiche agronomique ; README ; documents | J4 | 04/11 | Mise à jour dans docs|
| Bonus |J3 | 04/11|J'ai testé les fonctions supprimerOperation, modifierOperation, trierParCoutDecroissant, parcelleLaPlusCouteuse et test npm run test:bonus (8 test) |
| app.js : interface de menu | J4 | 05/11 (fin app.js) | app.js


```## Blocages ```

| Message exact | Ce que j'ai essayé | Solution |
| --- | --- | --- |
| `supprimerOperation retire O03 du registre et la renvoie` → `undefined !== 'O03'` | Vérifier la fonction supprimerOperation | Corriger l'orthographe, les virgules et les accolades (JS sensible à la casse) |
| `parcelle.toUppercase is not a function` | Vérifier la conversion en majuscules | Utiliser `toUpperCase()` avec parenthèses |
| `main is not defined` | Lancer `node app.js` | Ajouter la déclaration `async function main()` avant l'appel |
