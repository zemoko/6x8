---
layout: post
title: "Mon côté sombre"
date: "2019-06-18"
categories: 
  - "trucs-de-webmaster"
coverImage: "dark-toy-computer-black.jpg"
imgWidth: 360
imgHeight: 270
cover2left: true
---

Apple a ouvert le bal l'an dernier avec [MacOS Mojave](https://www.apple.com/fr/macos/mojave/) en proposant un thème sombre (et une media-query permettant aux concepteurs de sites web d'adapter leur affichage).

Depuis le 21 mai, [Firefox 67](https://hacks.mozilla.org/2019/05/firefox-67-dark-mode-css-webrender/) le permet également. [Chrome 76](https://blog.chromium.org/2019/06/chrome-76-beta-dark-mode-payments-new.html) le permettra bientôt (actuellement en beta, elle devrait sortir fin juillet) , tout comme [iOS 13](https://www.apple.com/ios/ios-13-preview/), le prochain OS pour iPhone, qui sortira cet automne.

Bref, le [support avance bien](https://caniuse.com/#search=prefers-color-scheme) :)

Du coup, il était temps de s'amuser avec proposer **un mode sombre pour ce blog**. C'est désormais chose faite.

\[metaslider id="5069"\]

## C'est du noir et blanc, c'est ça ?

Alors oui... mais non. J'ai essayé de faire un peu plus compliqué et de me poser au moins la question des images (en plus des changements de couleurs évidemment).

Le truc, c'est que je publie pas mal de photos, qui ne peuvent que être affichées telles quelles... Enfin, surtout sur les billets car, finalement, pour les autres pages, j'avais quand même envie de tester quelques règles pour permettre de naviguer en profitant d'un affichage **vraiment** adapté.

J'ai donc décidé de modifier les images des tuiles associées aux billets en utilisant **un filtre d'inversion puis une rotation de teinte** (mais elles se réaffichent "normalement" au survol ou au focus, avec une petite transition).

Pour le reste, c'est essentiellement un switch pour **passer les couleurs blanches, et gris clair, à des couleurs sombres** (mais plutôt des gris, j'ai fait le choix de ne pas utiliser de noir).

## Comment ça marche ?

**C'est tout simple**, il faut _(et il suffit)_ d'utiliser [la media-query prefers-color-scheme](https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme) de la manière suivante :

```
@media screen and (prefers-color-scheme: dark) {
...
}
```

(oui, elle est couplée à _screen_ car ça n'aurait pas de sens d'impacter les autres canaux, non ?)

## Et on peut tester ?

Si vous utilisez un système d'exploitation proposant un mode sombre, et un navigateur compatible : **yaka, yapluka**.

Sinon, il y a toujours une extension Firefox pour vous aider : vous pouvez utiliser [Dark Mode Website Switcher](https://github.com/rugk/website-dark-mode-switcher/).

* * *

[L'image d'entête](https://www.pexels.com/photo/dark-lego-miniature-star-wars-16485/) est de [Tookapic](https://www.pexels.com/@tookapic). Elle est en [licence Creative Commons CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/).
