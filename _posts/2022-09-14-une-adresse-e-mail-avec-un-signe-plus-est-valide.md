---
layout: post
title:  'Message de service aux développeurs&nbsp;: <strong>une adresse <span lang="en">e-mail</span> avec un signe «&nbsp;+&nbsp;» est valide</strong>'
date:   2022-09-14
categories: 
  - trucs-de-webmaster
tags: []
coverImage: 23457159216_bef9ca53bd_c.jpg
cover2left: true
---

<h2>Pourquoi c’est valide&nbsp;?</h2>

<p>Les courriers électroniques obéissent à une structure définie par la <a href="https://www.ietf.org/rfc/rfc2822.txt" lang="en" hreflang="en"><abbr>RFC2822</abbr> Internet Message Format</a>, elle-même étant une mise à jour de la <a href="http://www.faqs.org/rfcs/rfc822.html" lang="en" hreflang="en"><abbr>RFC822</abbr> Standard for the format of <abbr>ARPA</abbr> Internet text messages</a>. La <abbr>RFC2822</abbr> date d’avril 2002, la <abbr>RFC822</abbr> date quand elle du 13 août 1982&nbsp;!</p>

<p><strong>Une adresse <span lang="en">e-mail</span> comprends</strong> 3&nbsp;éléments&nbsp;:</p>
<ul>
	<li><strong>une partie locale</strong> permettant d’identifier une boîte <span lang="en">mail</span> (et donc un utilisateur, ou un service),</li>
	<li><strong>le caractère séparateur @</strong> (arobase) signifiant «&nbsp;chez&nbsp;» (<span lang="en">"at"</span> en anglais),</li>
	<li><strong>l’adresse du serveur</strong>, généralement un nom de domaine suivi de son extension.</li>
</ul>

<figure class="center">
	<p><span title="partie locale">john.doe</span><span title="arobase">@</span><span title="adresse du serveur">domaine.com</span></p>
</figure>

<p><strong>Les caractères spéciaux acceptés</strong> dans la partie locale <strong>sont</strong> les suivants&nbsp;: <mark>! # $ % & ‘ * + – / = ? ^ _ ` . { | } ~</mark>.</p>

<p><i>Notez que le «&nbsp;.&nbsp;» n’est accepté que s’il n’est placé ni en premier, ni en dernier et qu’il ne peut être répété de manière consécutive. Le «&nbsp;-&nbsp;»  non plus ne peut pas être placé en premier ou en dernier.</i></p>

<p><strong>L’usage du caractère «&nbsp;=&nbsp;» au sein de la partie locale est donc parfaitement valide</strong>. Tout ce qui suit ce caractère devra alors être ignoré par le serveur de <span lang="en">mail</span> pour router les messages&nbsp;:</p>

<figure class="center">
	<p><strong>john.doe+bank@domaine.com</strong> sera routé vers <strong>john.doe@domaine.com</strong></p>
</figure>
 
<h2>À quoi ça peut bien servir&nbsp;?</h2>

<p>De nombreux super-utilisateurs utilisent la caractère «&nbsp;+&nbsp;» qui permet de <strong>disposer, virtuellement, d’un nombre infini d’adresses <span lang="en">e-mail</span></strong>.</p>

<p>Son usage permet notamment de&nbsp;:</p>

{% include image.html name="gmail-rule.png" class="right" alt="Règle Gmail" width="300" %}
<ul>
	<li><strong>taguer, ou filtrer</strong>, simplement les messages que vous recevez</li>
	<li><strong>identifier à qui vous donnez cette adresse</strong>. Dans le cas où le site auquel vous l’avez donné la revends à un spammeur, ou s’il se la fait dérobé par un hacker, et que vous recevez des messages non-sollicités, vous pourrez facilement identifier le coupable (et, au besoin, vous pourrez définir une règle pour les supprimer automatiquement).</li>
</ul>
 
<h2>Messieurs les développeurs, à vos claviers</h2>
 
<p>Si on vous demande de tester la validité d’une adresse <span lang="en">e-mail</span> vous savez donc désormais quoi faire.</p>

<p>C’est d’ailleurs <strong>une règle Opquast</strong>&nbsp;: <a href="https://checklists.opquast.com/fr/assurance-qualite-web/le-site-accepte-les-alias-mail-contenant-le-signe">Règle n°&nbsp;23 - Le site accepte les alias <span lang="en">mail</span> contenant le signe +</a> et de nombreux services de messagerie en documente l’usage, dont Google&nbsp;: <a href="https://support.google.com/a/users/answer/9308648?hl=en" lang="en" hreflang="en">Gmail: Intermediate tips - Create task-specific email addresses</a>.</p>
 
<h2 lang="en">Hall of shame</h2>

<p>Ce n’est pas bien compliqué, c’est standard et c’est facile… mais <strong>nombreux sont les sites/développeurs/services clients qui n’en ont rien à faire</strong>. Voici quelques mauvais élèves, et quelques réponses qu’on m’a fait dernièrement (et qui m’ont convaincu de rédiger ce billet)&nbsp;:</p>

<ul>
	<li><figure class="right"><img src="/images/2022/09/hachette.png" alt="Veuillez compléter / contrôler votre e-mail." width="400"></figure>J'aime bien Astérix et j'ai songé à m'abonner à la «&nbsp;boîte des irréductibles&nbsp;» d'<strong>Hachette Collections</strong>... mais en fait, non.</li>
	<li class="nof"><figure class="right"><img src="/images/2022/09/vp.png" alt="J'ai le regret de vous confirmer que le format de votre adresse n'est techniquement pas conforme à celui accepté par notre site" width="400"></figure>Client depuis 17&nbsp;ans de <strong>Veepee, ex Ventes Privées</strong>, j'en avais plutôt une bonne image... mais j'aurais aimé qu'il me permettent de renseigner une adresse valide... bon ben... tant pis (du coup, j'ai aussi regardé les traceurs et ils ne sont pas non plus copains avec le <abbr>CNIL</abbr>...).</li>
	<li class="nof"><figure class="right"><img src="/images/2022/09/petit-bateau.png" alt="Nous sommes désolés mais cette adresse email n'est pas acceptée pouvez-vous nous en fournir une autre s'il vous plait ?" width="400"></figure>Même réponse quand on annonce à <strong>Petit Bateau</strong> qu'on a pu s'inscrire correctement avec, mais qu'on ne peut pas l'utiliser pour s'abonner aux <span lang="en">newsletters</span>. On notera que tout comme Veepee, ils n'en ont aussi rien à faire de mon consentement quand il s'agit de faire fuiter mes données, faut croire que la qualité, c'est un sujet de fonds... mais pas pour eux. D'ailleurs, je vous ai zommé la capture de leur mail de réponse car ils ne savent pas non plus envoyer des messages adaptés à une lecture sur <span lang="en">smartphone</span>...</li> 
	<li>...</li>
</ul>

<p>Chiche, à partir d'aujourd'hui, on continue de lister, et dénoncer, ces développeurs qui ne font pas leur job correctement, et ces réponses de services client qui révèlent un vrai problème de respect du client&nbsp;? <strong>N'hésitez pas à y contribuer en commentaire&nbsp;!</strong></p>

<hr />

<p class="nof">L'<a href="https://www.flickr.com/photos/kenwhytock/23457159216/in/photolist-BJQ5cA-2j13f1-5YLAo9-BMb1mM-b9R1TV-dTSZbT-bvPwwR-amNjyU-4KHpQy-7DBu97-dmn34H-azubXM-9M4XGA-BMdbig-2iEupir-6hYeaz-cue4n3-c9BSq9-7yL2x5-nQmRQ6-awWReS-ZCpzsY-74aF43-aoMB2t-n9TjGy-k5u2Qr-nn9qzF-62h1Ee-n9THaD-2k3geyS-nDEaRT-nn9haA-nnavUX-26hvtTi-T53eDJ-ghitWg-9k4nnG-a19oHg-35j9Eh-5gdjmz-8rB7zM-AwumF7-4L8gb4-viWryr-cmujP1-o9CeQA-9bn4Gw-nFqRVV-nDC7q8-HMzezq">image d'entête</a> est de <a href="https://www.flickr.com/photos/kenwhytock/">Ken Whytock</a>, elle est en licence <a href="https://creativecommons.org/licenses/by-nc/2.0/	">CC BY-NC 2.0</a>.</p>

