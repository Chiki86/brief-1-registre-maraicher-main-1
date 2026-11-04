# Tableau des tâches

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | J1 | 02/11  |J'ai fait un git initial avec nouveau repository sur GitHub |
| Fiche 2 : lire et écrire le JSON | J1 | 02/11 | J'ai testé les fonctions ChargerJSON, enregistrerJSON npm run test:stockage (3 verts)|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | J2 | 03/11 | J'ai ajouté les fonctions formaterOperation, listerOperations, creerOperation, ajouterOperation npm run test : registre (13 verts) |
| Fiche 4 : rechercher et trier ; choix 3 et 4 | J2 | 03/11 (fin de la partie dans la soirée) | J'ai ajouté les fonctions  filterParParcelle, filterParcCulture|
| Fiche 5 : synthèse ; choix 5 | J2| 03/11 (fin de la partie dans la soirée) | TotalCouts, syntheseParParcelle, coutMinMax |
| app.js : interface de menu | J3 | 04/11 (debut app.js) | app.js
| Tests par un camarade ; mes propres tests | | | |
| Fiche agronomique ; README ; documents | | | |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | | | |
| Bonus |J3 | 04/11|J'ai testé les fonctions supprimerOperation, modifierOperation, trierParCoutDecroissant, parcelleLaPlusCouteuse et test npm run test:bonus (8 test) |


**Blocages** (le message exact, ce que j'ai essayé, la solution) : Plusieurs failing tests après l'ajout de chaque fonction dans tout le travail. Par exemple dans src./bonus.js :

  ** test at test\bonus.test.js:14:1
 ✖ bonus : supprimerOperation retire O03 du registre et la renvoie (1.7662ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  undefined !== 'O03'**

Pour repondre corriger ces erreurs, Javascript etant sensible à la casse, je reverifiais les petits points sensibles (virgule à la fin, orthographe, fermeture d'accolade ou singleton etc.)
