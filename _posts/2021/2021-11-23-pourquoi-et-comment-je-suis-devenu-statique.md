---
layout: post
title: "Pourquoi, et comment, je suis devenu statique"
date: "2021-11-23"
categories: 
  - "trucs-de-webmaster"
coverImage: 7588800922_b7abff2da3_c.jpg
imgWidth: 360
imgHeight: 240
cover2left: true
---

## Pourquoi ?

<ol>
	<li>Ça fait déjà quelques temps que j'avais des bugs qui m'embettait sur <strong>mon blog sous Wordpress</strong>strong> (les codes couleurs <abbr>CSS</abbr> qu'il remplaçait par des tags et/ou des liens-ancres, les doubles-quotes qu'il remplaçait par des guillemets alors que c'était du code <abbr>HTML</abbr>, etc.). Je ne maitrise pas assez Wordpress pour réparer tout cela efficacement et, surtout, je n'en ai vraiment ni le temps, ni l'envie.</li>
	<li>J'aime intégré mes pages, et je sais le faire, donc les évolutions autour de l'<strong>éditeur Gutenberg</strong> ne m'intéressent pas, voire m'embêtent... or je sens bien que c'est, sans doute pour de bonnes raisons, l'orientation que prends le projet. Bref, je suis de moins en moins dans le coeur de cible...</li>
	<li><span lang="en">Last but not least</span>, ça fait déjà quelques années que je m'efforce de reprendre en main ma vie numérique&nbsp;:
		<ul>
			<li>Dans mes <a href="/2020/01/resolutions/">résolutions pour 2020</a>, quelqu'unes concernant bien l'émancipation des grandes plateformes du web.</li>li>
			<li>Queles mois avant, je (re)lancais d'ailleurs le <a href="/2019/10/hes-back/">SiToFoToS</a> pour que mes photos soient de nouveau ma propriété propre (sous licence <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/" lang="en">Creative Commons</a> quand-même, faut par déconner) et plus hébergés chez <span lang="en">Flickr/Google Photo/Picasa</span>/etc.</li>
			<li>Au début de 2019, <a href="/2019/01/bonne-annee-4/">mes bonnes résolutions</a> concernaient l'hébergement de mes notes, de mes mails... de mes données en général et <a href="/2019/01/et-si-on-reprenait-le-controle/">je me proposais de reprendre en main mes interactions</a>.</li>
			<li>En 2018, je donnais <a href="/2018/06/manifeste-pour-un-web-ethique/">ma première conférence</a> pour rappeler aux professionnels du web que l'éthique du web, c'était d'abord l'éthique de ceux qui font le web. Moi, je voudrais que le web soit <strong>accessible, inclusif, universel, pérenne, digne de confiance, performant et éco-responsable</strong>.</li>
		</ul>
	</li>
</ol>
<p>Bref, vous comprendrez bien que je me devais de reprendre ce blog en main... et quoi de plus adapté pour cela de revenir aux fondamentaux du web en utilisant un générateur de site statique, et en repensant son architecture pour <strong>faire mieux avec moins</strong>.</p>

## Comment ?

### Un générateur de site statique

Assez rapidement, le choix d'utiliser le générateur de site statique <a href="https://jekyllrb.com/">Jekyll</a> s'est imposé. J'avais déjà joué avec en décembre pour préparer ma <a href="/2021/01/bonne-annee-5/">carte de voeux</a> et j'avais été séduit par sa simplicité et sa capacité à me rendre la maîtrise sur mon site.

De plus, de nombreuses ressources existent sur le web pour guider une migration de Wordpress à Jekyll (<a href="https://blog.webjeda.com/wordpress-to-jekyll-migration/#step-3-export-comments">par exemple</a>).

Et pour l'hébergement d'un site Jekyll, <a href="https://docs.github.com/en/enterprise-cloud@latest/pages/setting-up-a-github-pages-site-with-jekyll">Github est ton ami</a>.

### Un script pour générer les posts issus d'Instagram

Migrer de Wordpress à Jekyll, <abbr>OK</abbr>, c'est fait... mais sur mon blog, j'avais un plugin Wordpress qui me permettait d'automatiser la publication de mes photos postées sur Instagram... Ça ne me dérange pas que ce soit plus totalement automatisé, mais je ne voulais pas non plus que ce soit totalement manuel (et je ne voulais pas juste utiliser la capacité d'intégration d'Instagram. Je veux les photos chez moi, et à ma sauce, en en maitrisant le rendu.

J'ai rapidement trouvé, toujours sur github, <a href="https://github.com/wouterbulten/jekyll-instagram-importer">un super petit outil</a> qui m'a inspiré pour créer un petit script que je peux lancer en indiquant l'identifiant d'une publication Instagram et qui va générer le fichier du post dédié (j'ai fait un <span lang="en">layout</span> Instagram, merci <span lang="en">Jekyll</span>&nbsp;!) mais aussi sauvegarder les images chez moi. Rapide, facile, efficace.

### Quelques composants

Une fois les posts récupérés, je me suis quand même rendu compte qu'il manquait quelques fonctionnalités que j'avais sous Wordpress grâce à des <span lang="en">plugins</span>. Là aussi, quelques recherches m'ont permis de retrouver mes petits, voire d'en profiter pour améliorer et uniformiser le rendu.

<ul>
	<li>Pour les <strong lang="en">sliders</strong>, j'avais au fil des années utiliser les fonctions natives de Wordpress mais aussi tester quelques plugins pour soit disposer de meilleurs carrousels, soit de carrousels permettant d'intégrer plus facilement, pas exemple, une galerie <span lang="en">Flickr</span>. Je n'avais ni l'envie ni vraiment le temps de développer ma propre solutionnde carrousel, je me suis donc contente d'utiliser <a href="https://splidejs.com/" lang="en">Splider</a> (en faciliant son usage via une intégration dans <span lang="en">Jekyll</span>). <a href="/2021/04/lomoinstant-automat-x-parc-de-pourtales/" title="Carrousel de photos du Parc de Pourtalés">exemple</a></li>
	<li>Pour les <strong>Panorama à 360&deg;</strong>, j'ai eu un peu plus de mal (je ne savais trop comment prendre le truc et je voulais surtout éviter les solutions Google) mais j'ai fini par trouver <a href="https://pannellum.org/documentation/examples/auto-load/">une petite librairie qui fait exactement ce que je voulais</a>. <a href="/2019/02/de-retour-de-chatel-avec-plein-de-bons-souvenirs-et-quelques-panoramas/" title="Panorams de Châtel">exemple</a></li>
</ul>

### Un moteur de recherche

Je pensais avoir du mal pour intégrer un moteur de recherche (ben oui, une fonctionnalité dynamique sur un site statique, je pensais que ce serait compliqué) mais en fait un plugin super simple existe, <a href="https://github.com/christian-fei/Simple-Jekyll-Search">Simple Jekyll Search</a>, et j'ai passé plus de temps à penser à l'intégration de la fonctionnalité de recherche qu'à la faire effectivement fonctionner.

### Des commentaires

Même chose pour les commentaires. Je voulais quelque chose de simple, pas trop cher et pas bourrés de traqueurs. J'ai choisi d'intégrer <a href="https://hyvor.com/">Hyvor</a> qui réponds à tout ces critères et, surtout, permet de récupérer assez facilement les commentaires issus du <span lang="en">Wordpress</span>.

### Des statistiques, juste ce qu'il faut

Je mentionne les statistiques parce qu'il le faut bien mais là c'était évident et rapide car cela fait déjà un moment que les stats du blog Wordpress étaient fournies par <a href="https://matomo.org/">Matomo</a>... et que son intégration via <span lang="en">Jekyll</span> était vraiment un jeu d'enfant.

## Alors, heureux&nbsp;?

Oui, j'y ai passé un peu de temps mais j'ai repris le contrôle de ce blog et ça j'aime.
 - Je maîtrise complètement la structure et le rendu du blog (plus à magouiller un thème pour en faire ce que je veux). C'est mon code <abbr>HTML</abbr> et mon <abbr>CSS</abbr>.
 - La migration s'est fait en douceur&nbsp;: c'est statique mais les <abbr>URLs</abbr> n'ont pas bougées (ni pour les posts, ni pour les catégories ou les tags)
 - Publier un nouveau billet n'est pas plus compliqué qu'avant.

* * *

[L'image d'entête](https://www.pexels.com/photo/dark-lego-miniature-star-wars-16485/) est de [Tookapic](https://www.pexels.com/@tookapic). Elle est en [licence Creative Commons CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
