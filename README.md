# Apollon

Apollon est une application de lecteur audio desktop conçue pour gérer une bibliothèque musicale locale, organiser des playlists et exposer une interface utilisateur simple et moderne.

La base du projet est une architecture Electron + React + SQLite, avec une séparation claire entre :
- le processus principal Electron,
- le preload bridge entre le renderer et Electron,
- la couche de données SQLite,
- l’interface utilisateur React.

---

## Stack technique

- Electron : application desktop
- React : interface utilisateur
- Webpack : build et serveur de développement
- SQLite : stockage local des données
- music-metadata : lecture des métadonnées des fichiers audio
- chokidar : surveillance des fichiers (si utilisée dans les flux de scan)

---

## Architecture du projet

```text
apollon/
├── app/
│   └── model/
│       ├── Music.js
│       ├── Playlist.js
│       ├── Readinglist.js
│       ├── Music_Playlist.js
│       └── Setting.js
├── database/
│   ├── database.js
│   └── model.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       ├── index.js
│       └── App.css
├── main/
│   ├── index.js
│   ├── ipcEmitters.js
│   ├── ipcListeners.js
│   ├── utils/
│   └── windows.js
├── preload/
│   └── index.js
├── babel.config.json
├── package.json
├── webpack.config.js
└── README.md
```

### 1. Le processus principal (`main/`)

Le dossier `main/` contient le cœur Electron :
- ouverture de la fenêtre principale,
- enregistrement des IPC listeners/emitters,
- gestion de l’application au niveau système.

Fichiers importants :
- `main/index.js` : point d’entrée principal Electron
- `main/windows.js` : création et configuration de la fenêtre
- `main/ipcListeners.js` : écoute des événements envoyés par le renderer
- `main/ipcEmitters.js` : émission d’événements côté main

### 2. Le bridge sécurisé (`preload/`)

Le fichier `preload/index.js` expose des APIs au renderer via `contextBridge` et `ipcRenderer`.

Cela permet de garder une séparation propre entre :
- le code UI React,
- le code système Electron,
- les accès aux ressources de l’OS et à SQLite.

### 3. La couche données (`database/`)

Le dossier `database/` contient la gestion SQLite :
- `database.js` : connexion Mongo-like à SQLite (en réalité SQLite3)
- `model.js` : classe de base `Model` qui encapsule les opérations CRUD :
  - `createTable()`
  - `insert()`
  - `findAll()`
  - `findById()`
  - `findWhere()`
  - `deleteById()`
  - `UpdateById()`

Cette couche est la base commune à tous les modèles de l’application.

### 4. Les modèles applicatifs (`app/model/`)

Les classes du dossier `app/model/` représentent les tables de données de l’application.

Exemples :
- `Music.js` : bibliothèque musicale
- `Playlist.js` : playlists
- `Readinglist.js` : liste de lecture
- `Music_Playlist.js` : relation entre musiques et playlists
- `Setting.js` : paramètres utilisateur

Chaque modèle hérite de `Model` et définit la structure SQL de la table associée.

### 5. Le frontend React (`frontend/src/`)

Le front est construit avec React et regroupe :
- composants UI (`components/`),
- pages musicales (`myMusicPages/`),
- barre de lecture,
- sidebar, filtres, modales, tableaux, etc.

Le point d’entrée est :
- `frontend/src/index.js`
- `frontend/src/App.js`

Le projet a aussi un dossier `frontend/public/` servant de base HTML pour l’application web ainsi que des assets statiques.

---

## Flux applicatif typique

1. Le frontend React déclenche une action utilisateur.
2. Le renderer envoie un message IPC via le preload.
3. Le processus principal écoute l’événement dans `main/ipcListeners.js`.
4. Le bon modèle applicatif est invoqué.
5. La requête est exécutée sur SQLite via `database/model.js`.
6. Le résultat est renvoyé au renderer.
7. L’UI React met à jour l’affichage.

Ce modèle permet de garder la logique métier côté Electron et la logique d’affichage côté React.

---

## Démarrage du projet

### Prérequis

- Node.js
- npm

### Installation

```bash
npm install
```

### Lancer l’application

```bash
npm start
```

Cette commande démarre :
- le serveur de développement webpack,
- l’application Electron principale.

---

## Fichiers importants

- `package.json` : scripts du projet principal
- `webpack.config.js` : configuration Webpack
- `main/index.js` : démarrage de l’application Electron
- `database/model.js` : abstractions SQL
- `app/model/*.js` : modèles de données
- `frontend/src/App.js` : point d’entrée UI

---

## Bonnes pratiques du projet

- Garder la logique métier côté Electron / main process.
- Limiter les accès directs à Node côté renderer.
- Passer par IPC et le preload pour communiquer entre UI et backend.
- Utiliser les modèles de données pour centraliser les opérations SQL.
- Préférer des modifications cohérentes avec la structure actuelle avant d’introduire des frameworks supplémentaires.

---

## Points d’attention

- Le projet semble utiliser une architecture hybride : des fichiers root Electron et un dossier `frontend/` contenant une app React indépendante.
- Le lancement principal est piloté par le `package.json` racine, qui démarre Electron et le bundle Webpack.
- La base de données est locale et stockée en SQLite, ce qui la rend adaptée à une application desktop simple et autonome.

---

## À venir / améliorations possibles

- ajout d’un système de scan automatique de fichiers audio,
- gestion d’un vrai moteur de lecture avancé,
- amélioration de la gestion des erreurs et de la robustesse SQLite,
- séparation plus nette entre logique UI et logique métier,
- ajout de tests automatisés.

---

## Licence

Le projet est actuellement déclaré sous licence ISC dans le fichier `package.json`.
