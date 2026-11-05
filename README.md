
# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)).

## Contexte

Cet outil s'adresse à une maraîchère qui souhaite suivre ses opérations culturales (semis, arrosage, désherbage, repiquage, récolte) sur plusieurs parcelles. Elle saisit l'identifiant, la date, la parcelle, la culture, l'opération et le coût. Le programme enregistre ces données dans un fichier JSON, les liste, les recherche et les trie, puis calcule des synthèses (total, par parcelle, min/max). L'outil ne calcule pas la rentabilité : il enregistre des dépenses, pas des revenus.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/Marcboti/brief-1-registre-maraicher.git
cd brief-1-registre-maraicher
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Structure du registre
```
app.js (menu)
├── saisie.js      → entrée utilisateur
├── stockage.js    → chargerJson / enregistrerJson
├── registre.js    → ajouter, lister, trouver, vérifier, créer
├── recherche.js   → filtrer, trier
├── synthese.js    → total, par parcelle, min/max
└── bonus.js       → supprimer, modifier, trier décroissant, parcelle la plus coûteuse
    └── stockage.js → donnees/operations.json
```
## Fonctionnalités
```
- ✅ Données lues et enregistrées dans `donnees/operations.json`
- ✅ Ajouter une opération, saisies invalides refusées sans arrêter le programme
- ✅ Lister les opérations, message si le registre est vide
- ✅ Rechercher par identifiant ou par parcelle ; filtrer par culture
- ✅ Trier par coût ou par date
- ✅ Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- ✅ Bonus : supprimer et modifier une opération (choix 6 et 7)
- ✅ Bonus : tri par coût décroissant, parcelle la plus coûteuse
```

## Données

Fichier : `donnees/operations.json`. 10 opérations de départ (O01 à O10). Champs : id, date (AAAA-MM-JJ), parcelle (P1, P2, P3), culture (tomate, gombo, aubergine), operation (semis, arrosage, désherbage, repiquage, récolte), coutFCFA (en FCFA). Les données sont fictives.

## Limites

- Pas de format imposé pour l'identifiant : n'importe quel texte non vide est accepté (ex. "KOFFI" est valide).
- Le registre enregistre des dépenses, pas les revenus : il ne mesure pas la rentabilité.
- Pas de contrôle de cohérence entre parcelle et culture (le registre ne vérifie pas que la culture correspond à la parcelle).
- Les opérations sont stockées dans un fichier JSON local, sans sauvegarde cloud.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Prénom et nom : Bi Boti Jules Marc ZAMBLE | Compte GitHub : https://github.com/Marcboti.

Entraide : Cheick Tidiane SOUMAHORO | Objet : Explication des fonctions tableaux (find, filter), fonctions asynchrone (async, await) et opérateur ternaire (condition ? expressionSiVrai : expressionSiFaux) | compte GitHub : https://github.com/Chiki86
