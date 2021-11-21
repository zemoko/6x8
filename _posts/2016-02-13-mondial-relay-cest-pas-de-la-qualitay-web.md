---
layout: post
title: "Mondial Relay, c'est (pas) de la qualitäy (web)"
date: "2016-02-13"
categories: 
  - "trucs-de-webmaster"
---

Ce soir, j'ai du me rendre sur le site **Mondial Relay** pour choisir un point relais. Ça n'a l'air de rien, comme ça... mais ce site est tellement mal foutu que ça m'a donné envie d'en faire un billet !

Je me suis donc retrouvé là : [http://www.mondialrelay.fr/trouver-le-point-relais-le-plus-proche-de-chez-moi/](http://www.mondialrelay.fr/trouver-le-point-relais-le-plus-proche-de-chez-moi/)

Déjà, c'est mal barré pour la Qualité web (coucou [opquast](http://opquast.com/fr/)) puisque la page n'a pas de title... bref... je ne suis pas là pour faire un audit, je suis là pour chercher un point relais. Ce pour quoi on trouve le formulaire rapidement, c'est cool...

<figure style="width:1030px">
	<img src="/images/Capture-décran-2016-02-13-22.38.23.png" alt="">
	<figcaption>Mondial Relay</figcaption>
</figure>

... mais pour les labels sur les champs du formulaire, faudra repasser :( (je suis chiant avec ça, c'est une déformation professionnelle). J'ai mis un petit moment à comprendre que la phrase "Saisissez un code postal, une ville et un pays", en dessous du formulaire, était là pour que je sache que je devais rentrer mon code postal dans le premier champ et ma ville dans le second... ce que je me suis alors empressé de faire.

Après avoir renseigné ces deux infos, j'ai essayé de valider le formulaire avec ma touche "Entrée", bêtement... et, évidemment, ça n'a pas fonctionné. Qu'à cela ne tienne, utilisons le bouton "Rechercher" (grrrr).

Là, le site m'a trouvé 20 points relais à proximité. C'pas mal, non ? Enfin, sauf que...

<figure style="width:650px">
	<img src="/images/Capture-décran-2016-02-13-22.43.26.png" alt="">
	<figcaption>Carte des points relais</figcaption>
</figure>

Je sais pas vous... mais, moi, ce point relais au nord d'Arras (en zoomant, c'est Hazebrouck en fait), ça m'étonne un peu quand même... Je clique sur le picto pour comprendre en quoi "Hazebrouck" est proche de "Paris 19".

<figure style="width:1030px">
	<img src="/images/Capture-décran-2016-02-13-22.46.06.png" alt="">
	<figcaption>Hazebrouck</figcaption>
</figure>

Ah d'accord ! C'est donc une boutique sur l'avenue de Flandres... ça doit être la Flandres qui l'a perdu. Trop complexe, ça, avenue _de Flandres_. Heureusement que je n'ai pas demandé les points relais du quartier de St Lazare, il aurait fallu vachement zoomé pour pouvoir placer les rue _de Londres_, _de Liège_, _de Bucarest_, _de Moscou_, etc.

Bref. De toute manière, celui de la rue de Meaux me parait le plus pratique pour moi. Mais j'aime pas les copier/coller alors, comme je suis un utilisateur super avancé, je me suis dit que ce serait aussi simple de récupérer une URL pointant sur le point relais choisi....

...sauf que ce détail s'ouvre en lightbox (sans changement de l'URL de la page évidemment). Tant pis.

Mais, je le répète, je suis un utilisateur super avancé, alors je ne m'avoue pas vaincu aussi facilement, j'essaie d'être plus futé que les machines : plutôt que de cliquer sur le lien pour ouvrir la lightbox, je fais un clic droit pour l'ouvrir dans une nouvelle fenêtre. Hé ben, en fait, non. [Ça marche](http://www.mondialrelay.fr/_mvc/fr-FR/PointCollecteLivraison/DetailJson?codePays=FR&numero=15881)... mais je ne suis pas sur que ça aide beaucoup :

<figure style="width:1030px">
	<img src="/images/Capture-décran-2016-02-13-22.54.46.png" alt="">
	<figcaption>Détails du point relais</figcaption>
</figure>

Du coup, j'ai fait un copier/coller et basta. Que je puisse fermer ce p\*\*\*n de site et, surtout, **ne plus jamais y revenir**.
