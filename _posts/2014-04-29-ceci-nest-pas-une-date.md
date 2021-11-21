---
layout: post
title: "Ceci n'est pas une date"
date: "2014-04-29"
categories: 
  - "trucs-de-webmaster"
coverImage: "Ceci-nest-pas-une-date.png"
cover2left: true
---

Un petit billet technique sur une problématique qui a tendance à m'agacer, quand elle est mal pensée (bonjour le <abbr>PMU</abbr>), les champs "date de naissance" des formulaires.

En gros, il existe 4&nbsp;manières pour demander à quelqu'un sa date de naissance&nbsp;:
<ul>
	<li><a href="#I1">Un champs de texte libre</a></li>
	<li><a href="#I2">Un champs de type date</a></li>
	<li><a href="#I3">3 champs de texte libres</a></li>
	<li><a href="#I4">3 listes déroulantes</a></li>
</ul>
Je me propose d'essayer d'évaluer ces 4&nbsp;manières de faire, dans un contexte à la fois <span lang="en">desktop</span> et mobile, sur des sites ou dans des apps.

Si vous êtes pressé, vous pouvez directement consulter <a href="#I5">ma conclusion</a>&nbsp;!

&nbsp;

<h2 id="I1">Un champs de texte libre</h2>

C'est la méthode la plus simple et la plus basique&nbsp;:
<pre><code>&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de  naissance&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>=<span class="property">"text"</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance"</span>&gt;</code></pre>

Pour être le plus complet, on peut ajouter une aide éventuelle pour expliciter le format de date attendu&nbsp;:
<pre><code>&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de  naissance&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>=<span class="property">"text"</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance"</span> <strong><span class="attribute">aria-describedby</span>=<span class="property">"DateDeNaissance_Aide"</span></strong>&gt;
<strong>&lt;<span class="tagName">span</span> <span class="attribute">class</span>=<span class="property">"aide"</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance_Aide"</span>&gt;JJ/MM/AAAA&lt;/<span class="tagName">span</span>&gt;</strong></code></pre>

On peut aussi profiter des nouvelles propriétés <abbr>HTML5</abbr> pour contrôler le format&nbsp;:
<pre><code>&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de  naissance&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>=<span class="property">"text"</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance"</span> <span class="attribute">aria-describedby</span>=<span class="property">"DateDeNaissance_Aide"</span> <strong><span class="attribute">pattern</span>=<span class="property">"\d{1,2}/\d{1,2}/\d{4}"</span></strong>&gt;
&lt;<span class="tagName">span</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance_Aide"</span>&gt;JJ/MM/AAAA&lt;/<span class="tagName">span</span>&gt;</code></pre>

Résultat&nbsp;:
<figure style="width:750px">
	<img src="/images//1_champs-texte.png" alt="Maquette de formulaire utilisant un champs de texte libre" />
	<figcaption>Ceci n'est pas une date, c'est un champs de texte libre (<a href="/ceci-nest-pas-une-date/" target="_blank" title="Voir la page (nouvelle fenêtre)">Voir la page</a>)</figcaption>
</figure>

Exemple d'implémentation&nbsp;:
<figure style="width:583px">
	<img alt="Formulaire d'authentification JOA" src="/images/JOA.png" />
	<figcaption>JOA <small>(pas de lien, le site est moche et bourré de popups *àlacon*)</small></figcaption>
</figure>

<div class="encart"><strong>Pas de soucis particuliers avec cette méthode</strong>, très classique, facile à rendre accessible mais aussi à utiliser, sur <span lang="en">desktop</span> comme sur mobile. Seul bémol&nbsp;: sur mobile, il faut opérer à de multiples changements de type de clavier pour saisir nombres et séparateurs.</div>

&nbsp;

<h2 id="I2">Un champs de type date</h2>

<pre><code>&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de  naissance&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input <span class="attribute">type</span>=<span class="property">"date"</span> <span class="atribute">name</span>=<span class="property">"DateDeNaissance"</span>&gt;</span></code></pre>

Rien de particulier à rajouter pour être accessible, ça marche <em lang="en">"Out of the box"</em>. C'est d'ailleurs l'exemple choisi par moult blogs pour illustrer le nouveau type de champs <em>date</em> (notamment <a href="http://www.alsacreations.com/tuto/lire/1407-formulaire-html5-type-date-time-local.html">Alsacreation</a>).

Résultat&nbsp;:
<figure style="width:750px">
	<img src="/images/2_champs-date.png" alt="Maquettede formulaire utilisant un champs de type date" >
	<figcaption>Ceci n'est pas une date, c'est un champs de type date (<a href="/ceci-nest-pas-une-date-2/" target="_blank" title="Voir la page (nouvelle fenêtre)">Voir la page</a>)</figcaption>
</figure>

Exemple d'implémentation&nbsp;:
<figure style="width:750px">
	<img src="/images/pmu-inscription.png" alt="Inscription | pmu.fr" />
	<figcaption>PMU <small><a href="https://www.pmu.fr/ouverture/2010?clientApi=1&redirectionUrl=https%3A%2F%2Fwww.turf.pmu.fr" target="_blank" title="Formulaire d'inscription (nouvelle fenêtre)">Formulaire d'inscription</a></small>)</figcaption>
</figure>

<div class="encart"><strong>C'est clairement, à mon sens, une solution peu ergonomique</strong> car, quand j'essaie de m'authentifier sur un site web, c'est bien plus compliqué de choisir ma date de naissance dans un sélecteur de date que de la saisir dans un champs texte, <strong>notamment sur téléphone et sur tablette</strong>.</div>

&nbsp;

<h2 id="I3">3 champs de texte libres</h2>

Pas forcément la plus simple à manipuler pour être accessible ET ergonomique (<em>3&nbsp;champs = 3&nbsp;labels</em>) mais on peut s'en sortir&nbsp;:
<ul>
  <li>avec quelques textes cachés mais restitués aux aides techniques</li>
  <li>avec un peu d'<abbr>ARIA</abbr> pour expliciter les relations entre champs</li>
</ul>

<pre><code>&lt;<span class="tagName">span</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de  naissance&lt;/<span class="tagName">span</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"JourDeNaissance"</span> <span class="attribute">id</span>=<span class="property">"JourDeNaissance_label"</span> <span class="attribute">class</span>=<span class="property">"text-hide"</span>&gt;Jour&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>=<span class="property">"number"</span> <span class="attribute">id</span>=<span class="property">"JourDeNaissance"</span> <span class="attribute">aria-labeledby</span>=<span class="property">"DateDeNaissance JourDeNaissance_label"</span> <span class="attribute">placeholder</span>=<span class="property">"JJ"</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"MoisDeNaissance"</span> <span class="attribute">id</span>=<span class="property">"MoisDeNaissance_label" <span class="attribute">class</span>="text-hide"&gt;Mois&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>="number" <span class="attribute">id</span>="MoisDeNaissance"</span> <span class="attribute">aria-labeledby</span>=<span class="property">"DateDeNaissance MoisDeNaissance_label"</span> <span class="attribute">placeholder</span>=<span class="property">"MM"</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">for</span>=<span class="property">"AnneeDeNaissance"</span> <span class="attribute">id</span>=<span class="property">"AnneeDeNaissance_label"</span> <span class="attribute">class</span>=<span class="property">"text-hide"</span>&gt;Année&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">input</span> <span class="attribute">type</span>=<span class="property">"number"</span> <span class="attribute">id</span>=<span class="property">"AnneeDeNaissance"</span> <span class="attribute">aria-labeledby</span>=<span class="property">"DateDeNaissance AnneeDeNaissance_label"</span> <span class="attribute">placeholder</span>=<span class="property">"AAAA"</span>&gt;</code></pre>

Résultat&nbsp;:
<figure style="width:750px">
	<img src="/images/3_3-champs-texte.png" alt="Maquette de formulaire utilisant 3 champs de texte libres" /></a>
	<figcaption>Ceci n'est pas une date, ce sont 3 champs de texte libres (<a href="/ceci-nest-pas-une-date-3/" target="_blank" title="Voir la page (nouvelle fenêtre)">Voir la page</a>)</figcaption>
</figure>

Exemples d'implémentation&nbsp;:
<figure style="width:360px">
	<img src="/images/PMU-Identification.png" alt="Identification | pmu.fr" /><
	<figcaption>PMU (<small><a href="https://www.pmu.fr/ouverture/2010?clientApi=1&redirectionUrl=https%3A%2F%2Fwww.turf.pmu.fr" target="_blank" title="Formulaire d'inscription (nouvelle fenêtre)">Formulaire d'inscription</a></small>)</figcaption>
</figure>
<figure style="width:368px">
	<img src="/images/Connexion-App-LOTO.png" alt="Connexion - App LOTO" />
	<figcaption><abbr title="Française Des Jeux">FDJ</abbr> (<small><a href="http://itunes.apple.com/fr/app/loto/id439643474?mt=8" target="_blank" title="App LOTO (nouvelle fenêtre)">Connexion à l'app</a></small>)</figcaption>
</figure>

<div class="encart"><strong>Pas de soucis particuliers avec cette méthode</strong>, un peu plus complexe cependant à mettre en &oelig;uvre que la méthode du champs de texte unique. Un avantage cependant lors d'une saisie avec un téléphone puisque on passera facilement d'un champs à l'autre sans se poser la question du séparateur à utiliser.</div>

&nbsp;

<h2 id="I4">3 listes déroulantes</h2>

La mise en &oelig;uvre est assez similaire à celle de la solution précédente&nbsp;:
<pre><code>&lt;<span class="tagName">span</span> <span class="attribute">id</span>=<span class="property">"DateDeNaissance"</span>&gt;Date de naissance&lt;/span&gt;
&lt;<span class="tagName">div</span> <span class="attribute">class</span>=<span class="property">"Selects"</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">class</span>=<span class="property">"text-hide"</span> <span class="attribute">id</span>=<span class="property">"JourDeNaissance_label"</span> <span class="attribute">for</span>=<span class="property">"JourDeNaissance"</span>&gt;Jour&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">select</span> <span class="attribute">id</span>=<span class="property">"JourDeNaissance"</span>&gt;&lt;<span class="tagName">option</span>&gt;1&lt;/<span class="tagName">option</span>&gt;...&lt;<span class="tagName">option</span>&gt;31&lt;/<span class="tagName">option</span>&gt;&lt;/<span class="tagName">select</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">class</span>=<span class="property">"text-hide"</span> <span class="attribute">id</span>=<span class="property">"MoisDeNaissance_label"</span> <span class="attribute">for</span>=<span class="property">"MoisDeNaissance"</span>&gt;Mois&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">select</span> <span class="attribute">id</span>=<span class="property">"MoisDeNaissance"</span>&gt;&lt;<span class="tagName">option</span>&gt;1&lt;/<span class="tagName">option</span>&gt;...&lt;<span class="tagName">option</span>&gt;12&lt;/<span class="tagName">option</span>&gt;&lt;/<span class="tagName">select</span>&gt;
&lt;<span class="tagName">label</span> <span class="attribute">class</span>=<span class="property">"text-hide"</span> <span class="attribute">id</span>=<span class="property">"AnneeDeNaissance_label"</span> <span class="attribute">for</span>=<span class="property">"AnneeDeNaissance"</span>&gt;Année&lt;/<span class="tagName">label</span>&gt;
&lt;<span class="tagName">select</span> <span class="attribute">id</span>=<span class="property">"AnneeDeNaissance"</span>&gt;&lt;<span class="tagName">option</span>&gt;1940&lt;/<span class="tagName">option</span>&gt;...&lt;<span class="tagName">option</span>&gt;1994&lt;/<span class="tagName">option</span>&gt;&lt;/<span class="tagName">select</span>&gt;
&lt;/<span class="tagName">div</span>&gt;</code></pre>

Résultat&nbsp;:
<figure style="width:750px">
	<img src="/images/4_3-listes.png" alt="Maquette de formulaire utilisant 3 listes déroulantes" />
	<figcaption>Ceci n'est pas une date, ce sont 3 listes déroulantes (<a href="/ceci-nest-pas-une-date-4/" target="_blank" title="Voir la page (nouvelle fenêtre)">Voir la page</a>)</figcaption>
</figure>

Exemples d'implémentation&nbsp;:
<figure style="width:750px">
	<img src="/images/FDJ-Authentification.png" alt="Authentification | fdj.fr" />
	<figcaption><abbr title="Française Des Jeux">FDJ</abbr> (<small><a href="https://www.fdj.fr/oad/sessions.do?mth=displayLoginForm&service=FDJ_WEB&redirect=https%3A%2F%2Fwww.fdj.fr%2Fpage%2Fmobile%2Ftitre%2Fmobile%23" target="_blank" title="Formulaire d'authentification (nouvelle fenêtre)">Formulaire d'authentification</a></small>)</figcaption>
</figure>
<figure style="width:368px">
	<img src="/images/Connexion-App-PMU.png" alt="Connexion - App PMU" />
	<figcaption><abbr>PMU</abbr> (<small><a href="http://www.pmumobile.fr/index.html" target="_blank" title="App PMU (nouvelle fenêtre)">Connexion à l'app</a></small>)</figcaption>
</figure>

<div class="encart"><strong>C'est une solution que ne parait pas plus adaptée que la solution du champs date</strong>. Pire, elle n'est adaptée ni à la saisie au clavier, ni à la saisie sur téléphone ou sur tablette.</div>

<div class="encart"><strong>Mise à jour du 3 août 2014&nbsp;:</strong> le <abbr>PMU</abbr> vient de mettre à jour son app, notamment pour modifier ces champs de saisie de la date de naissance&nbsp;! Je ne devais pas être le seul à pester ;) Maintenant, ce sont 3 champs de texte libres qui s'enchaînent et c'est bien mieux. <strong>Merci le <abbr>PMU</abbr>&nbsp;!</div>

&nbsp;

<h2 id="I5">En conclusion&nbsp;: <strong>Restons simple</strong></h2>
<ul>
<li><em>Champs texte unique</em>&nbsp;: simple à mettre en &oelig;uvre, accessible, ergonomique</li>
<li><em>Champs date</em>&nbsp;: simple à mettre en &oelig;uvre, accessible, peu ergonomique avec un clavier, pas ergonomique du tout avec un téléphone ou une tablette</li>
<li><em>3 champs textes</em>&nbsp;: un peu plus complexe à mettre en &oelig;uvre et à rendre accessible, ergonomique sur ordinateur et sur mobile</li>
<li><em>3 listes déroulantes</em>&nbsp;: également plus complexe à mettre en &oelig;uvre et à rendre accessible, pas ergonomique, quelque que soit le contexte</li>
</em>

<div class="encart">Les méthodes les plus ergonomiques, <strong>un champs texte unique</strong> et <strong>3 champs textes</strong>, sont aussi les méthodes les plus simple à mettre en &oelig;uvre et à rendre accessible... <strong>alors pourquoi faire compliqué&nbsp;? Globalement, je privilégierai la solution des 3 champs textes, visiblement la plus universelle.</strong></div>

<big>Si quelqu'un du <abbr>PMU</abbr> passe par ici... sachez que je vous maudit tous les dimanches de vos choix ergonomiques hasardeux&nbsp;!</big>

Pour finir, un petit lien vers un site du gouvernement britannique qui s'est posé la même question (et qui réponds sensiblement de la même manière)&nbsp;: <a href="https://designnotes.blog.gov.uk/2013/12/05/asking-for-a-date-of-birth/" hreflang="en" lang="en" target="_blank" title="Asking for a date of birth (nouvelle fenêtre)">Asking for a date of birth</a>
