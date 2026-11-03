# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | O02 |
| `date` | date de l'opération | texte | format AAAA-MM-JJ, date réelle | - | 2026-10-20 |
| `parcelle`| Parcelle concernée | texte | non vide | - | P2 |
| `culture` | culture de la parcelle | texte | non vide | - | gombo |
| `operation` | Type d'opération | texte | dans la liste autorisée | -  | semis |
| `coutFCFA` | Dépense enregistrée | nombre | positif ou nul | FCFA | 4500 |

**Listes de valeurs autorisées** : Mes operations effecutés dans src/registre.js avec function (formaterOperation, listerOperations, trouverParId )semis, arrosage, désherbage, repiquage, récolte.

**Sources** : SUJET.md, donnees/operations.json
