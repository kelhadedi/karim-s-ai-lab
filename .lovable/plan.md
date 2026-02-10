

## Intégration de l'animation Spline en arrière-plan du Hero

### Ce qui va changer

L'orbe iridescent statique (image PNG) sera remplacé par ta scène 3D Spline interactive, affichée en plein fond de la section Hero.

### Etapes techniques

**1. Charger le script Spline dans `index.html`**
- Ajouter la balise `<script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.51/build/spline-viewer.js"></script>` dans le `<head>`.

**2. Declarer le type TypeScript pour `<spline-viewer>`**
- Ajouter une declaration dans `src/vite-env.d.ts` pour que TypeScript accepte la balise custom `<spline-viewer>` sans erreur.

**3. Modifier `HeroSection.tsx`**
- Supprimer l'orbe PNG (le `<motion.div>` avec l'image et le suivi du curseur).
- Supprimer les imports devenus inutiles (`iridescentOrb`, `useRef`, `useState`, `useEffect`, `mousePos`).
- Ajouter un conteneur `<div className="absolute inset-0 z-0">` contenant `<spline-viewer url="https://prod.spline.design/F0G-nefQlu24wJYa/scene.splinecode">` en plein ecran derriere le contenu texte.
- Le contenu (titre, boutons) reste au-dessus avec `z-10`.

### Resultat attendu

La scene 3D Spline s'affichera en arriere-plan interactif de toute la section Hero, avec le texte et les boutons parfaitement lisibles par-dessus.

