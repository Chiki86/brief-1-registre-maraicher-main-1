# Journal de recherche

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| operation.some | mdn javascript, expliqué par M.Anglovia membre de la salle 2 | .some verifie si un element dans le tableau satisfait la fonction du test fournie. sinon, il retourne .true/false |  src/registre.js avec la fonction verifierOperation |
| .localeCompare | mdn javascript , KILO AI |   localeCompare est une méthode de chaînes de caractères qui compare deux textes et renvoie un nombre. Renvoie un nombre négatif si a vient avant b. Renvoie un nombre positif si b vient après a. R envoie 0 si a et b arrivent au même moment. | src/recherche.js avec la fonction TrierParDate |
| const FICHIER_DONNEES = 'donnees/operations.json'; | avec mes amis de groupe | difference entre FICHIER_DONNEES = './stockage.js' et FICHIER_DONNEES = 'donnees/operations.json'  | app.js 
| operation.splice(position,1) | mdn javascript , cours, KILO IA | operations.splice(position, 1) supprime 1 élément à la position position et renvoie un tableau contenant l'élément supprimé. | src/bonus.js avec fonction supprimerOperation
