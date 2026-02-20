# Étapes pour faire ton premier commit et push

Le fichier **`.gitignore`** a été créé : `build/` et `node_modules/` ne seront plus versionnés.

## 1. Fermer le flux Git dans Cursor

- Ferme le panneau **Source Control** (ou annule « Publish to GitHub » / « Creating first commit »).
- Si un message demande de continuer, annule pour libérer le verrou.

## 2. (Optionnel) Supprimer le verrou si Git bloque encore

Dans PowerShell, à la racine du projet :

```powershell
Remove-Item "d:\Claude Code\MMa claudio\.git\index.lock" -Force -ErrorAction SilentlyContinue
```

## 3. Premier commit et push

Ouvre un terminal (PowerShell ou CMD) dans le dossier du projet puis exécute :

```powershell
cd "d:\Claude Code\MMa claudio"
git add .
git status
git commit -m "Initial commit"
git push -u origin main
```

Si la branche s’appelle `master` au lieu de `main` :

```powershell
git push -u origin master
```

Si le remote `origin` n’est pas encore configuré (premier push vers GitHub), ajoute-le avant le push :

```powershell
git remote add origin https://github.com/TON_USERNAME/TON_REPO.git
git push -u origin main
```

Après ça, seul le code source sera versionné (plus de 10 000 fichiers de build/node_modules).
