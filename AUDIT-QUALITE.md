# Audit qualité — Plus Ultra MMA Club

**Date :** 4 février 2025  
**Périmètre :** Structure, sécurité, fonctionnel, accessibilité, performance, maintenabilité, SEO

---

## 1. ARCHITECTURE & STRUCTURE

| Aspect | État | Détail |
|--------|------|--------|
| **Structure des dossiers** | ✅ Correct | `src/components` (pages + ui + figma), `src/styles`, entrée `main.tsx` claire. |
| **Point d’entrée** | ✅ Bon | `main.tsx` vérifie `#root` avant rendu, utilise une `ErrorBoundary`. |
| **Composants non utilisés** | ⚠️ À traiter | `LightPillar.tsx`, `animated-shader-hero.tsx`, `animated-shader-background.tsx` ne sont pas importés dans `App.tsx`. Ils alourdissent le bundle si importés ailleurs ou peuvent être déplacés / supprimés pour clarifier le projet. |
| **Doublons de CSS** | ⚠️ À vérifier | `index.css` et `styles/globals.css` sont tous deux importés dans `main.tsx` ; variables et utilitaires (`.holographic`, `.elite-glow`, etc.) présents dans les deux. Risque de conflits et de surcharge. |

---

## 2. SÉCURITÉ

| Point | Fichier | Sévérité | Détail |
|-------|---------|----------|--------|
| **Formulaire Contact** | `Contact.tsx` | ✅ Corrigé | `onSubmit`, champs `name`, validation côté client, messages d’erreur/succès. Pas d’envoi réel (simulation) → prévoir un vrai endpoint sécurisé (HTTPS, CSRF, rate limit) en production. |
| **Liens externes** | `Contact.tsx`, `Footer.tsx` | ✅ Bon | `target="_blank"` avec `rel="noopener noreferrer"`, `aria-label` sur les icônes sociales. |
| **dangerouslySetInnerHTML** | `chart.tsx` (l.83) | 🟡 Faible | Injection de CSS généré à partir de la config de thème (données internes). Si des couleurs ou clés venaient d’une source utilisateur, il faudrait les sanitiser. |
| **CSP** | `index.html` | 🟡 Recommandé | Aucune Content-Security-Policy. En production, ajouter une meta ou en-tête CSP (script-src, style-src, img-src, etc.) pour renforcer la sécurité. |

---

## 3. FONCTIONNEL

| Élément | Fichier | État | Remarque |
|--------|---------|------|----------|
| **Formulaire contact** | `Contact.tsx` | ✅ | Soumission simulée (setTimeout), reset du formulaire, états sending/sent/error. |
| **Liens de navigation** | `Header.tsx`, `Footer.tsx` | ✅ | Ancres `#home`, `#about`, etc. et CTA vers `#contact`. |
| **Bouton « Itinéraire »** | `Contact.tsx` | ✅ | Lien vers Google Maps (URL externe). |
| **Pages légales** | `Footer.tsx` | ⚠️ | Liens vers `/mentions-legales#confidentialite`, `#cgu`, `#cookies`. Ces routes n’existent pas (SPA sans route dédiée) → 404 ou contenu vide. Créer une page/section ou retirer les liens. |
| **Galerie vidéo** | `Gallery.tsx` | 🟡 | Items de type `"video"` avec icône Play mais pas de lecteur ni `src` vidéo. À brancher sur un vrai player ou à traiter comme image uniquement. |

---

## 4. ACCESSIBILITÉ (A11y)

| Point | Fichier | État | Détail |
|-------|---------|------|--------|
| **Langue** | `index.html` | ✅ | `lang="fr"`. |
| **Skip link** | `App.tsx` | ✅ | Lien « Aller au contenu principal » vers `#home`. |
| **Menu mobile** | `Header.tsx` | ✅ | `aria-label` et `aria-expanded` sur le bouton menu. |
| **Formulaire** | `Contact.tsx` | ✅ | Labels avec `htmlFor`/`id`, `aria-invalid`, `aria-describedby` sur les champs en erreur, messages d’erreur reliés par `id`. |
| **Select Program** | `Contact.tsx` | ✅ | `<label htmlFor="contact-program">` et `<select id="contact-program">`. |
| **Réseaux sociaux** | `Contact.tsx`, `Footer.tsx` | ✅ | `aria-label` sur les liens (Instagram, Facebook, etc.). |
| **Contraste** | Global | 🟡 À valider | Textes `text-gray-400`, `text-gray-500` sur fond sombre à vérifier avec un outil (axe DevTools, Contrast Checker) pour WCAG AA. |

---

## 5. PERFORMANCE & DÉPENDANCES

| Point | Détail |
|-------|--------|
| **Dépendances** | `package.json` : `"motion": "*"` → version non figée. `motion` et `three` ne sont plus utilisés dans l’arbre d’entrée actuel (LightPillar et shaders non montés). Figer les versions (ex. `^x.y.z`) pour des builds reproductibles. |
| **Paquets potentiellement inutilisés** | `next-themes` n’est pas utilisé dans `App.tsx` (pas de `ThemeProvider`). À retirer si le thème n’est pas prévu. |
| **Alias Vite** | `vite.config.ts` : nombreux alias du type `'vaul@1.1.2': 'vaul'`. Utile pour déduplication, mais rend la config fragile si les versions changent. Documenter ou simplifier. |
| **Build** | `outDir: 'build'`, cible `esnext`. Pas de config de chunk/split explicite pour le moment. |
| **Images** | Utilisation de `ImageWithFallback` et URLs Unsplash externes ; pas de lazy loading explicite (ni `loading="lazy"` ni composant lazy). À envisager pour la galerie. |

---

## 6. QUALITÉ DE CODE

| Point | Fichier | Sévérité | Recommandation |
|-------|---------|----------|----------------|
| **Clés de liste** | `Trainers.tsx` (l.71) | 🟡 | `key={index}` sur les cartes coach → préférer une clé stable (ex. `key={trainer.name}`). |
| **Clés de liste** | `Trainers.tsx` (l.101) | 🟡 | `key={idx}` sur les Badge de spécialités → préférer `key={specialty}`. |
| **Clés de liste** | `Footer.tsx` (l.74) | 🟡 | `key={link.href}` pour les quick links ; si deux liens partagent le même `href`, utiliser `key={link.label}` ou une combinaison unique. |
| **Clés stables** | Autres composants | ✅ | About, Concept, Programs, Gallery, Schedule, Contact, Hero utilisent des clés stables (id, title, etc.). |
| **TypeScript** | Racine projet | 🟡 | Aucun `tsconfig.json` à la racine (uniquement dans des sous-deps). Ajouter un `tsconfig.json` avec `strict: true` pour renforcer le typage. |
| **Imports UI** | Composants ui | 🟡 | Certains composants shadcn utilisent des alias du type `@radix-ui/...@x.y.z` (ex. dans `vite.config`). Cohérent avec la config actuelle mais à documenter. |

---

## 7. SEO & MÉTADONNÉES

| Élément | État | Détail |
|--------|------|--------|
| **Titre** | ✅ | `index.html` : « Plus Ultra MMA Club — L'élite du MMA ». |
| **Meta description** | ✅ | Présente et en français. |
| **theme-color** | ✅ | Défini (`#1e1b4b`). |
| **Structure sémantique** | ✅ | Sections avec `id` (home, about, programs, etc.), balises `header`, `main`, `footer`, `section`. |
| **Single Page** | 🟡 | Pas de routes (pas de React Router) ; une seule URL. Pour du SEO multi-pages (mentions légales, programmes dédiés), prévoir du routing et des métadonnées par page. |

---

## 8. SYNTHÈSE DES ACTIONS RECOMMANDÉES

### Priorité haute
1. **Pages légales** : Créer une section ou une page pour « Mentions légales / Confidentialité / CGU / Cookies » ou retirer / désactiver les liens du footer vers `/mentions-legales#...`.
2. **Clés React** : Remplacer `key={index}` et `key={idx}` dans `Trainers.tsx` par des clés stables (`trainer.name`, `specialty`).

### Priorité moyenne
3. **tsconfig.json** : Ajouter à la racine un `tsconfig.json` avec `strict: true` et une cible adaptée (ex. ES2020).
4. **Dépendances** : Figer `motion` (ou le retirer si inutilisé), supprimer `next-themes` si pas de thème, et figer les versions critiques pour des builds reproductibles.
5. **CSS** : Clarifier le rôle de `index.css` vs `globals.css` et éviter les doublons de variables ou de classes (ex. `.elite-glow`, `.holographic`).
6. **Composants orphelins** : Décider du sort de `LightPillar`, `animated-shader-hero`, `animated-shader-background` (suppression, déplacement dans un dossier « experiments », ou réintégration documentée).

### Priorité basse
7. **Contraste** : Vérifier les contrastes (WCAG AA) sur les textes gris.
8. **CSP** : Mettre en place une Content-Security-Policy en production.
9. **Lazy loading** : Ajouter `loading="lazy"` ou un mécanisme équivalent pour les images de la galerie.
10. **Galerie vidéo** : Soit connecter un vrai lecteur vidéo, soit retirer le type « video » et garder uniquement des images.

---

## 9. CORRECTIONS APPLIQUÉES (post-audit)

- **Pages légales** : Section `MentionsLegales` avec ancres ; liens footer vers #mentions-legales, #confidentialite, #cgu, #cookies.
- **Clés React** : Trainers (key trainer.name, specialty), Footer (key link.label).
- **tsconfig** : tsconfig.json + tsconfig.node.json à la racine, strict: true.
- **Dépendances** : motion figé ^11.11.17 ; next-themes conservé (sonner).
- **CSS** : Commentaire en tête de globals.css.
- **Composants orphelins** : Commentaires dans les 3 fichiers + _archived/README.md.
- **Contraste, CSP, lazy loading, galerie** : appliqués.

---

*Rapport d’audit qualité — état du projet après corrections (formulaire, a11y, background).*
