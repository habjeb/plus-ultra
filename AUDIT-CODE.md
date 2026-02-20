# Audit du code – MMA Club Website (Plus Ultra)

**Date :** 4 février 2025  
**Périmètre :** Sécurité, fonctionnel, accessibilité, performance, maintenabilité

---

## 1. SÉCURITÉ

### 1.1 Niveau critique

| Problème | Fichier | Détail |
|----------|---------|--------|
| **Formulaire Contact sans traitement** | `Contact.tsx` | Le formulaire n’a pas d’`onSubmit`, pas d’attributs `name` sur les champs, et le bouton n’a pas `type="submit"`. Les données ne sont jamais envoyées ni validées côté client. Risque : utilisateur croit avoir envoyé un message alors qu’il ne se passe rien. |
| **Liens sociaux `href="#"`** | `Contact.tsx`, `Footer.tsx` | Liens factices. Comportement incohérent (recharge / scroll) et mauvaise UX. À remplacer par de vrais URLs ou `role="button"` + gestion clic si non implémenté. |

### 1.2 Niveau moyen

| Problème | Fichier | Détail |
|----------|---------|--------|
| **`dangerouslySetInnerHTML`** | `chart.tsx` (l.83) | Injection de CSS généré à partir de `config` et `id`. Si un jour `config` ou des couleurs viennent d’une source utilisateur, risque d’injection CSS. Actuellement les données sont internes → risque faible. **Recommandation :** échapper/sanitiser toute valeur utilisateur (ex. couleurs hex) avant de les injecter. |
| **ImageWithFallback – spread `...rest`** | `ImageWithFallback.tsx` | Les `...rest` sont passés à `<img>`. Un `src` ou `onError` malveillant pourrait théoriquement être injecté si les props viennent d’une source non fiable. Ici les `src` sont en dur → risque faible. |
| **Pas de Content-Security-Policy** | `index.html` | Aucune meta CSP. En production, une CSP (script-src, style-src, img-src, etc.) renforcerait la sécurité. |

### 1.3 Bonnes pratiques déjà en place

- Pas d’`eval`, `innerHTML` direct ou `document.write`.
- Les `href` et `src` utilisés sont des chaînes statiques ou des données contrôlées (pas de concaténation utilisateur non échappée).
- React échappe le contenu par défaut → pas de XSS via le texte affiché.

---

## 2. FONCTIONNEL

### 2.1 Bugs avérés

| Bug | Fichier | Correction recommandée |
|-----|---------|-------------------------|
| **Double prop `transition`** | `Header.tsx` (motion.div desktop CTA, ~l.98–109) | Deux props `transition` sur le même élément ; la seconde écrase la première. Supprimer la duplication et ne garder qu’une seule `transition` (ex. combiner `duration` + `delay`). |
| **Formulaire Contact inopérant** | `Contact.tsx` | Ajouter `onSubmit` (e.g. `preventDefault` + fetch ou state), attributs `name` sur les inputs, `type="submit"` sur le bouton, et validation basique (email, champs requis). |
| **`getElementById("root")!`** | `main.tsx` | L’assertion non-null peut masquer l’absence du nœud `#root` (ex. HTML modifié). Vérifier l’élément avant de rendre : `const root = document.getElementById("root"); if (root) createRoot(root).render(<App />);` et éventuellement `console.error` ou fallback. |
| **Accumulation de `moves` dans le shader Hero** | `animated-shader-hero.tsx` (PointerHandler) | `this.moves` est incrémenté à chaque `pointermove` et jamais réinitialisé → valeurs qui divergent au fil du temps. Réinitialiser `moves` chaque frame dans la boucle de rendu (après `updateMove`) ou utiliser des deltas par frame. |

### 2.2 Comportements à clarifier

| Élément | Fichier | Remarque |
|--------|---------|----------|
| **Bouton "Get Directions"** | `Contact.tsx` | Aucun `href` ni `onClick` → aucun comportement. À lier à une URL (Google Maps / Apple Maps) ou à une action. |
| **Boutons "Join Now" / "Rejoindre l’Élite"** | `Header.tsx`, `Hero.tsx` | Pas de navigation ni d’action (modal, scroll vers formulaire, etc.). Définir la cible (lien ou handler). |
| **Vidéos dans la galerie** | `Gallery.tsx` | Type `"video"` avec icône Play mais pas de `src` vidéo ni lecteur. Soit brancher un vrai player, soit traiter comme image uniquement. |

---

## 3. ACCESSIBILITÉ (A11y)

| Problème | Fichier | Sévérité |
|----------|---------|----------|
| **Bouton menu mobile sans label** | `Header.tsx` (l.124–129) | Le bouton n’a pas d’`aria-label` (ex. "Ouvrir le menu" / "Fermer le menu"). Les lecteurs d’écran ne savent pas à quoi il sert. |
| **`lang="en"` dans `index.html`** | `index.html` | Une grande partie du contenu est en français (Hero, About, etc.). Mieux vaut `lang="fr"` ou `lang="fr"` sur les sections en français. |
| **Select natif sans label associé** | `Contact.tsx` (Program Interest) | Le `<select>` n’est pas associé via `htmlFor`/`id` ou `aria-labelledby`. À corriger pour un meilleur support a11y. |
| **Contraste** | Divers | À valider avec un outil (ex. axe DevTools) sur textes gris sur fond sombre (ex. `text-gray-400`, `text-gray-500`) pour respecter WCAG AA. |

---

## 4. PERFORMANCE & TECHNIQUE

| Point | Fichier / Config | Détail |
|-------|-------------------|--------|
| **Dépendances avec version `*`** | `package.json` | `clsx`, `tailwind-merge`, `motion`, `three` en `"*"` → builds non reproductibles et risque de régressions. **Recommandation :** figer les versions (ex. `^x.y.z`). |
| **Nettoyage WebGL** | `animated-shader-background.tsx` | `geometry.dispose()`, `material.dispose()`, `renderer.dispose()` et retrait du canvas dans le cleanup → bon. |
| **Nettoyage WebGL Hero** | `animated-shader-hero.tsx` | `cancelAnimationFrame` et `reset()` appelés au démontage. Vérifier que `reset()` libère bien buffers et programmes. |
| **Deux contextes WebGL** | `App` | Hero utilise un canvas (shader hero) et la page un autre (animated-shader-background). Cohérent mais deux pipelines GPU ; acceptable si voulu. |

---

## 5. QUALITÉ DE CODE & MAINTENABILITÉ

| Point | Fichier | Détail |
|-------|---------|--------|
| **Imports avec alias de version** | `button.tsx` | `@radix-ui/react-slot@1.1.2` – alias Vite. Peut casser en dehors de ce projet ou si la config change. Préférer `@radix-ui/react-slot`. |
| **Clés de liste avec `index`** | `Contact.tsx`, `Footer.tsx`, `About.tsx`, etc. | Utilisation de `key={index}`. Préférer des clés stables (id ou combinaison unique) pour éviter les bugs de réconciliation et d’état. |
| **Composant Hero du fichier hero** | `animated-shader-hero.tsx` | Le fichier exporte à la fois `useShaderBackground` et un composant `Hero` (avec `<style jsx>`) alors que le Hero utilisé dans l’app est `components/Hero.tsx`. Risque de confusion et `style jsx` non supporté nativement en Vite. Vérifier que le Hero de l’app n’utilise pas ce bloc. |
| **Pas de tsconfig visible** | Racine | Aucun `tsconfig.json` listé. Sans config TypeScript stricte, les erreurs de typage peuvent passer. Ajouter un `tsconfig.json` avec `strict: true`. |

---

## 6. SYNTHÈSE DES ACTIONS RECOMMANDÉES

### Priorité haute (à faire en premier)
1. Rendre le formulaire Contact fonctionnel : `onSubmit`, `name`, `type="submit"`, validation minimale.
2. Corriger la double prop `transition` dans `Header.tsx`.
3. Sécuriser le point d’entrée dans `main.tsx` (vérification de `#root`).
4. Ajouter `aria-label` au bouton du menu mobile.

### Priorité moyenne
5. Réinitialiser `moves` dans le PointerHandler du shader Hero (ou utiliser des deltas par frame).
6. Mettre `lang="fr"` (ou approprié) dans `index.html`.
7. Associer le `<select>` Program Interest à un label (id + `htmlFor` ou `aria-labelledby`).
8. Donner une action ou un lien aux CTA (Join Now, Get Directions, etc.).

### Priorité basse
9. Figer les versions des dépendances (`package.json`).
10. Remplacer les `key={index}` par des clés stables.
11. Vérifier le contraste des textes (WCAG).
12. Prévoir une CSP en production.

---

*Rapport généré dans le cadre d’un audit de type beta-test / revue de code.*
