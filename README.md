#  Portfolio | David Meilleur - Data Scientist & AI Engineer

<div align="center">

![Vercel](https://img.shields.io/badge/Vercel-Deployed-success)
![Status](https://img.shields.io/badge/Status-Online-brightgreen)
![License](https://img.shields.io/badge/License-MIT-green)
![Last Updated](https://img.shields.io/badge/January_2026-Updated-blue)

**Portfolio professionnel présentant mes compétences en Data Science, Machine Learning et Intelligence Artificielle**

[ Site en ligne](https://davidaat.vercel.app/) • 
[ Contact](mailto:meilleurd2001@gmail.com) • 
[ LinkedIn](https://www.linkedin.com/in/david-meilleur-aat-ndongo)

</div>

##  Présentation

Ce portfolio a été développé pour mettre en avant mes projets concrets et compétences techniques dans le domaine de la Data Science. Conçu avec une approche minimaliste et professionnelle, il présente une interface moderne et responsive qui s'adapte à tous les appareils.

##  Caractéristiques Principales

- **Design élégant** : Charte de Gemula : fond sombre, accent orange, animations discrètes
- **Responsive complet** : Optimisé pour mobile, tablette et desktop
- **Performances optimisées** : Site statique Astro, images WebP, polices et icônes hébergées localement
- **Contenu structuré** : Présentation claire des projets et compétences
- **Accès direct** : Liens vers dépôts GitHub et démos en ligne

##  Stack Technique

**Frontend**
- [Astro](https://astro.build) (site statique, zéro JavaScript superflu)
- Charte graphique de Gemula (fond sombre, accent orange #FF5000, police Inter hébergée sur le site)
- Icônes SVG intégrées (aucune dépendance externe)
- TypeScript léger pour les interactions (menu mobile, filtres, apparitions)
- Images optimisées automatiquement en WebP par `astro:assets`

**Déploiement & Outils**
- Hébergement : Vercel, à l'adresse https://davidaat.vercel.app/ (configuration dans `vercel.json`)
- Chaque push sur `main` redéploie le site ; chaque branche obtient un aperçu Vercel
- Sitemap généré automatiquement

##  Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
```

##  Structure

```
src/
  data/cv.ts           ← TOUT le contenu (repris du CV) : modifier ici pour mettre le site à jour
  components/          ← une section du site par fichier
  assets/              ← photo de profil, captures des projets, logo Gemula
  styles/global.css    ← styles globaux
public/documents/      ← CV en PDF (un seul fichier)
```

##  Contenu du site

Tout le contenu est repris du CV et centralisé dans `src/data/cv.ts` : parcours, Gemula, 12 projets techniques, compétences, formations, certifications, engagement.

##  Déploiement

Le site est hébergé sur **Vercel** : https://davidaat.vercel.app/

- `vercel.json` force la configuration Astro (sortie `dist/`) et redirige les anciens liens de CV vers le nouveau.
- Un push sur `main` met le site en ligne ; les autres branches donnent un lien d'aperçu.

##  Contact & Réseaux

- **Email** : [meilleurd2001@gmail.com](mailto:meilleurd2001@gmail.com)
- **LinkedIn** : [david-meilleur-aat-ndongo](https://www.linkedin.com/in/david-meilleur-aat-ndongo)
- **GitHub** : [@aatndongodavid](https://github.com/aatndongodavid)
- **Portfolio** : [davidaat.vercel.app](https://davidaat.vercel.app/)
- **Gemula** : [gemula.org](https://gemula.org)

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser comme base pour votre propre portfolio.


<div align="center">

**"Transformer les données en insights, l'intelligence artificielle en solutions concrètes"**

<sub>Dernière mise à jour : Janvier 2026</sub>

</div>
