# Portfolio · David Meilleur AAT NDONGO

<div align="center">

![Astro](https://img.shields.io/badge/Astro-7-FF5000)
![Vercel](https://img.shields.io/badge/Vercel-en_ligne-success)
![Mise à jour](https://img.shields.io/badge/Mise_à_jour-Novembre_2026-blue)
![Licence](https://img.shields.io/badge/Licence-MIT-green)

**Data Scientist & AI Engineer · Fondateur de [Gemula](https://gemula.org)**

[Site en ligne](https://davidaat.vercel.app/) •
[Télécharger le CV](https://davidaat.vercel.app/documents/CV_AAT_NDONGO_David_Meilleur.pdf) •
[LinkedIn](https://www.linkedin.com/in/david-meilleur-aat-ndongo) •
[Contact](mailto:meilleurd2001@gmail.com)

</div>

## Présentation

Portfolio personnel d'un élève-ingénieur en Master Recherche Science des Données & IA à l'ENSP de Douala et fondateur de Gemula, collectif d'élèves ingénieurs et de chercheurs. Le site présente mon parcours, mes projets en data, IA, logiciel et IoT, ainsi que mon CV.

Sections du site : Gemula · Parcours · Projets (12 projets techniques et autres réalisations) · Compétences · Formation et certifications · Engagement et atouts · Contact.

## Stack technique

- [Astro](https://astro.build) : site statique, très peu de JavaScript
- Charte graphique de Gemula : fond sombre, accent orange `#FF5000`, police Inter hébergée sur le site
- Icônes SVG intégrées, aucune dépendance externe (ni Google Fonts, ni Font Awesome)
- Images converties automatiquement en WebP par `astro:assets`
- TypeScript léger : menu mobile, filtres des projets, animations d'apparition
- Sitemap et données structurées pour le référencement

## Mettre le site à jour

Tout le contenu est repris du CV et centralisé dans **`src/data/cv.ts`** : identité, expériences, projets, compétences, formations, certifications, engagement. Il suffit de modifier ce fichier.

- Ajouter un projet : ajouter une entrée dans `projects` (avec une capture dans `src/assets/` si besoin)
- Changer le CV : remplacer `public/documents/CV_AAT_NDONGO_David_Meilleur.pdf` en gardant le même nom

## Développement local

Prérequis : Node.js 22.23.4 ou plus récent.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
npm run preview  # prévisualise le site construit
```

## Structure

```
src/
  data/cv.ts          ← tout le contenu du site
  components/         ← une section du site par fichier
  layouts/Base.astro  ← balises <head>, SEO
  assets/             ← photo de profil, captures des projets, logo Gemula
  styles/global.css   ← charte graphique
public/
  documents/          ← CV en PDF
  fonts/              ← polices Inter et Poppins
vercel.json           ← configuration de l'hébergement
```

## Déploiement

Le site est hébergé sur **Vercel** : https://davidaat.vercel.app/

- Un push sur `main` met le site en ligne ; les autres branches donnent un lien d'aperçu.
- `vercel.json` impose la configuration Astro (dossier de sortie `dist/`) et redirige les anciens liens de CV vers le CV actuel.

## Contact

- **Email** : [meilleurd2001@gmail.com](mailto:meilleurd2001@gmail.com)
- **LinkedIn** : [david-meilleur-aat-ndongo](https://www.linkedin.com/in/david-meilleur-aat-ndongo)
- **GitHub** : [@aatndongodavid](https://github.com/aatndongodavid)
- **Gemula** : [gemula.org](https://gemula.org)

## Licence

Code sous licence MIT. Le contenu (textes, photo, CV) reste personnel.
