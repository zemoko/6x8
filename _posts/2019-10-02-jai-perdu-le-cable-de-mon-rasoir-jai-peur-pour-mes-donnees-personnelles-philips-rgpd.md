---
layout: post
title: "J'ai perdu le câble de mon rasoir, j'ai peur pour mes données personnelles #Philips #RGPD"
date: "2019-10-02"
categories: 
  - "trucs-de-webmaster"
tags: 
  - "accessibilite"
coverImage: "16745360354_38993b2589_c.jpg"
cover2left: true
---

Je suis bien embêté car **j'ai perdu le câble pour recharger mon rasoir à barbe** et, du coup, **j'ai peur pour mes données personnelles**. Comment ça, le lien n'est pas clair ? Mais si, c'est évident, laissez-moi vous expliquer :

Mon rasoir, qui fonctionne parfaitement, et dont je suis très satisfait par ailleurs, est un **Philips Oneblade**. Me voici donc sur le site de Philips pour y trouver une solution... pas facile, le site est mal fichu et voudrait clairement plutôt me pousser à acheter un nouveau rasoir ou, à défaut, de nouvelles lames.

Oui, mais non, **je voudrais juste pouvoir recharger mon rasoir**.

Je cherche alors des revendeurs pour aller voir IRL (dans la vraie vie quoi) si je peux trouver une solution... sauf que non, car j'ai la fâcheuse habitude de protéger ma vie privée et donc d'être fidèle à Firefox (on peut aussi appeler cela une saine hygiène personnelle).

![Votre niveau de consentement des cookies ne nous permet pas d'afficher le contenu de cette section. Le minimum requis est "cookies publicitaires ciblés"](/images/IMG_3132-300x220.jpg)
Sauf que, quand on refuse les dispositifs de pistage, que se passe-t'il [sur le site de Philips](https://www.philips.fr/c-p/NT5180_15/-/store-locator#location=67000) ? Un message vous informe que **pour obtenir une liste de revendeurs, en réponse à votre code postal, il faut consentir à être tracké pour de la publicité ciblée**.

Deux hypothèses : **soit les développeurs du site sont des brêles**, **soit les juristes de la boîte sont des buses** (voire les deux en fait) car :

1. Il n'est nul besoin de faire appel à des cookies pour fournir ce service
2. Forcer mon consentement est illégal (coucou la CNIL)

## Que dit la RGPD ?

Le **Règlement relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données** (des fois, les acronymes, c'est bien  : RGPD) parle de consentement.

Ce consentement, pour être valide doit être :

> **Libre** : le consentement ne doit pas être contraint ni influencé. La personne doit se voir offrir un choix réel, sans avoir à subir de conséquences négatives en cas de refus. **Spécifique** : un consentement doit correspondre à un seul traitement, pour une finalité déterminée. **Éclairé** : pour qu’il soit valide, le consentement doit être accompagné d’un certain nombre d’informations communiquées à la personne avant qu’elle ne consente. **Univoque** : le consentement doit être donné par une déclaration ou tout autre acte positif clairs. Aucune ambiguïté quant à l’expression du consentement ne peut demeurer.

## Que fait Philips ?

Le message d'erreur est cliquable (qui l'aurait deviné ? Les liens ne sont pas indiqués visuellement et seul le curseur change au survol. D'ailleurs ce ne sont pas de "vrais" liens, j'ai donc de la chance d'être valide puisque Philips n'en a visiblement rien à faire, non plus, de l'accessibilité numérique) et affiche une fenêtre modale pour exprimer son consentement en matière de cookies :

![Vos choix en matière de cookies sur ce site](/images/Capture-d’écran-2019-10-02-à-11.11.52-1024x727.png)

- Au minimum, et c'est normal, vous acceptez les **Cookies de fonctionnement** (mais, houlala, tu ne leurs permet pas d'_améliorer_ ton expérience utilisateur)
- Ensuite, si vous êtes sympa, vous pouvez accepter les **Cookies de mesure d’audience** (ce serait d'autant plus sympa qu'ils précisent que cela pourrait leurs permettre d'améliorer leur efficacité et que, visiblement, ils en ont bien besoin)
- Viennent alors les **Cookies des réseaux sociaux** sans lequel vous ne pouvez évidemment pas publier de commentaires (enfin il parait parce qu'avant les réseaux sociaux, on arrivait quand même à s'exprimer si je me rappelle bien)
- Enfin, les **Cookies publicitaires** pour afficher des _publicités et offres adaptés à vos centres d'intérêts_

## Qu'est-ce qui ne va pas ?

Dans mon cas, **le consentement n'est pas libre** puisque je n'ai pas à accès à la liste des revendeurs si je n'accepte pas la publicité ciblée.

**Il n'est pas non plus spécifique** puisque je ne peux pas accepter la publicité ciblée mais continuer de refuser les cookies de mesure d'audience et de réseaux sociaux.

Il est **faiblement éclairé** pas le blabla de la fenêtre modale, et il est **bien univoque**.

## Pour aller plus loin...

Si quelqu'un de chez Philips cherche des infos, qu'il sache que :

- le site de la CNIL bien que parfois compliqué et pas toujours complétement à jour, contient un article très clair sur le sujet : [Conformité RGPD : comment recueillir le consentement des personnes ?](https://www.cnil.fr/fr/conformite-rgpd-comment-recueillir-le-consentement-des-personnes).
- des tas de ressources et des gens très biens peuvent l'aider, que ce soit pour respecter ses clients ou pour améliorer l'accessibilité de son site. Je citerais pêle-même [Koena](https://koena.net/), [Temesis](https://temesis.com/), [Access42](https://access42.net/) ou [Atalan](https://www.atalan.fr/)...

Moi je continue ma quête, je n’achèterais pas de nouveau rasoir, et je continuerais à protéger ma vie privée, et donc à défendre mes droits.

* * *

L'[image d'entête](https://flic.kr/p/rvJmey) est de [Song Shen](https://www.flickr.com/photos/songzhen/), elle est en [licence CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/).
