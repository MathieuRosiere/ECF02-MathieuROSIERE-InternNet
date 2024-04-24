# Présentation du projet

Le projet est divisé en deux applications, front et back.

- `Front` réalisé avec Vue.js. Pour run la partie front il est nécessaire d'installer les différents packages (axios est utlisé pour gérer les requêtes aux serveurs) avec une cmd `npm install`. On peut ensuite entrer la commande `npm run dev` pour lancer l'app en serveur local.
- `Back` réalisé avec Node.js. Même chose : `npm install` puis `node app.js` pour lancer le serveur Node. Node est ici utlisé en API avec le package Express.

- Pour la base de données, vous pouvez utliser `mysql` ou `MariaDb`. Les commandes sql pour créer la bdd sont dans le projet.

## Features

- L'app permet pour l'instant de créer des entreprises et des stages liés aux entreprises aux travers de deux formulaires.
- Le CRUD fonctionne de manière basique, pas de vérifications.
- Le CSS est à peine entamé.
