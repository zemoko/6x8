---
layout: post
title: "Le Yams Super Ultimate Pro, Elite Version"
date: "2020-05-05"
categories: 
  - "trucs"
  - "trucs-de-geek"
tags: 
  - "jeux-de-societe"
coverImage: "IMG_4479-scaled.jpg"
cover2left: true
---

Ça fait bien 20 ans que je suis étonné de ne pas trouver plus de gens qui, comme nous (ma famille, quelques amis), jouent au **Yams (certains disent Yahzee) dans sa version 4 colonnes**.

Ça doit bien faire 10 ans que je suis étonné de ne pas trouver d'applications pour jouer au Yams (ou au Yahtzee, je n'ai pas de religion) en utilisant ces 4 colonnes.

Comme je suis resté, au fonds de moi, un dinosaure du web, **quand je ne trouve pas quelque chose, j'ai à cœur de l'y mettre à disposition**. Longtemps, c'était juste **la feuille de score** mais aujourd'hui, je me propose de vous la fournir en version web (mais imprimable quand même, hein !) avec la règle du jeu qui va bien.

## Attends, c'est quoi ça, le Yam 4 colonnes ?

Le Yams, c'est un "classique", **le premier "Roll and Write"** (si vous ne savez pas de quoi je parle, allez regarder la vidéo ["Jargon Ludique : Roll and write"](https://www.philibertnet.com/fr/13843-le-roll-write) de chez Philibert).

En gros, **on lance 5 dés pour obtenir des combinaisons et marquer des points**.

Normalement, on joue sur une seule colonne. C'est rapide mais malheur aux malchanceux.

Quand on joue **sur 4 colonnes**, il reste un facteur "chance" évident... mais c'est déjà **plus stratégique**. Quelle colonne privillégier ? Quelles cases, voire quelle colonne, sacrifier ?

## La règle du jeu

- **Matériel**
    - Une feuille de score par joueur
    - 5 dés
    - Une piste de dés (recommandé)
    - Un gobelet (recommandé)
- **Chacun son tour**
    - Le joueur lance les dés une _première_ fois
    - Il peut décider de relancer tout ou partie des dés une _deuxième_ fois
    - Et encore une _troisième_ fois
    - Puis, il doit remplir l'une des cases de sa feuille de score. S'il n'a aucune combinaison, il peut barrer une des cases vides.
- **Les combinaisons**
    - En haut :
        - On score en sommant les dés d'une seule sorte. _ex. Vous avez 3 dés sur la face 6, vous scorez 3x6=18 points_.
        - Une fois que vous avez rempli les 6 lignes, vous additionnez les 6 scores et vous pouvez éventuellement avoir une prime de 35 points si votre score est au minimum de 63. _63, c'est le score que vous ferez si vous notez 3 dés pour chaque valeur_.
    - En bas :
        - Une **Brelan**, c'est une combinaison contenant au minimum 3 chiffres identiques. On score alors la somme des valeurs de tous les dés. _ex. vous avez 3 dés sur 5, 1 dé sur 3 et 1 dé sur 2, vous scorez (3x5)+3+2=20 points_.
        - Une **Petite suite**, ce sont 4 dés qui se suivent. Vous scorez 15 points.
        - Une **Grande suite**, ce sont 5 dés qui se suivent. Vous scorez 20 points.
        - Un **Full**, ce sont 3 dés identiques d'un côté, et 2 autres, identiques également, pour compléter. Vous scorez 30 points.
        - Un **Carré**, ce sont 4 dés identiques. Vous scorez 40 points.
        - Un **Yams**, ce sont 5 dés identiques. Vous scorez 50 points.
- **Les 4 colonnes**
    - Dans **la première colonne, celle qui descends**, vous notez du haut vers le bas : vous ne pourrez noter les 2 que si vous avez noté les 1, vous ne pourrez noter les 3 que si vous avez noté les 2, et ainsi de suite.
    - Dans **la 2e colonne, celle qui monte**, c'est la même chose mais du bas vers le haut : vous ne pourrez noter le carré que si vous avez noté le yam !
    - La **3e colonne est classique**, vous notez comme vous voulez
    - La **dernière colonne est appelée colonne "sèche"**, vous ne pouvez l'utiliser qu'après le premier lancer. Attendez, si vous avez relancé les dés, vous ne pouvez plus (même pour noter ce que vous aviez au premier lancer).
    - Si vous n'avez rien à noter, ou rien que vous souhaitiez noter, vous pouvez barrer mais en respectant les règles : on barre en descendant dans la première colonne et en montant dans la seconde. Vous pouvez barrer comme vous le voulez dans les 2 autres colonnes.

## La feuille de score

Voici une feuille de score que vous pouvez utiliser directement en ligne, ou que vous pouvez imprimer (auquel cas, vous obtiendrez une feuille A4 permettant de noter 4 parties - pour peu que vous pensiez à imprimer au format paysage).

<div class="yamTable">
    <div>
<table>
    <caption>Yams</caption>
    <thead>
        <tr>
            <th id="combinaison">Combinaison</th>
            <th id="marque">Marque</th>
            <th id="down"   ><span role="img" arial-label="En descendant">⬇️</span></th>
            <th id="up"     ><span role="img" arial-label="En montant">⬆️</span></th>
            <th id="classic"><span role="img" arial-label="Libre">↕️</span></th>
            <th id="dry"    ><span role="img" arial-label="Sec">1️⃣</span></th>
            <th class="impr"><span role="img" arial-label="En descendant">⬇️</span></th>
            <th class="impr"><span role="img" arial-label="En montant">⬆️</span></th>
            <th class="impr"><span role="img" arial-label="Libre">↕️</span></th>
            <th class="impr"><span role="img" arial-label="Sec">1️⃣</span></th>
        </tr>
    </thead>
    <tfoot>
        <tr class="total">
            <th colspan="2" id="grandtotal">Grand Total</th>
            <td colspan="4" headers="grandtotal"><output type="number" id="inptGrandtotal" aria-labelledby="grandtotal" /></td>
            <td colspan="4" class="impr">&nbsp;</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th id="aces"><span role="img">🎲</span> 1</th>
            <th id="pts1">Total des 1</th>
            <td headers="down aces pts1"   ><input type="number" id="inptCol1Pts1" aria-labelledby="pts1 down"    step="1" max="5" min="0" /></td>
            <td headers="up aces pts1"     ><input type="number" id="inptCol2Pts1" aria-labelledby="pts1 up"      step="1" max="5" min="0" /></td>
            <td headers="classic aces pts1"><input type="number" id="inptCol3Pts1" aria-labelledby="pts1 classic" step="1" max="5" min="0" /></td>
            <td headers="dry aces pts1"    ><input type="number" id="inptCol4Pts1" aria-labelledby="pts1 dry"     step="1" max="5" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="twos"><span role="img">🎲</span> 2</th>
            <th id="pts2">Total des 2</th>
            <td headers="down twos pts2"   ><input type="number" id="inptCol1Pts2" aria-labelledby="pts2 down"    step="2" max="10" min="0" /></td>
            <td headers="up twos pts2"     ><input type="number" id="inptCol2Pts2" aria-labelledby="pts2 up"      step="2" max="10" min="0" /></td>
            <td headers="classic twos pts2"><input type="number" id="inptCol3Pts2" aria-labelledby="pts2 classic" step="2" max="10" min="0" /></td>
            <td headers="dry twos pts2"    ><input type="number" id="inptColPts2" aria-labelledby="pts2 dry"      step="2" max="10" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="threes"><span role="img">🎲</span> 3</th>
            <th id="pts3">Total des 3</th>
            <td headers="down threes pts3"   ><input type="number" id="inptCol1Pts3" aria-labelledby="pts3 down"    step="3" max="15" min="0" /></td>
            <td headers="up threes pts3"     ><input type="number" id="inptCol2Pts3" aria-labelledby="pts3 up"      step="3" max="15" min="0" /></td>
            <td headers="classic threes pts3"><input type="number" id="inptCol3Pts3" aria-labelledby="pts3 classic" step="3" max="15" min="0" /></td>
            <td headers="dry threes pts3"    ><input type="number" id="inptCol4Pts3" aria-labelledby="pts3 dry"     step="3" max="15" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="fours"><span role="img">🎲</span> 4</th>
            <th id="pts4">Total des 4</th>
            <td headers="down fours pts4"   ><input type="number" id="inptCol1Pts4" aria-labelledby="pts4 down"    step="4" max="20" min="0" /></td>
            <td headers="up fours pts4"     ><input type="number" id="inptCol2Pts4" aria-labelledby="pts4 up"      step="4" max="20" min="0" /></td>
            <td headers="classic fours pts4"><input type="number" id="inptCol3Pts4" aria-labelledby="pts4 classic" step="4" max="20" min="0" /></td>
            <td headers="dry fours pts4"    ><input type="number" id="inptCol4Pts4" aria-labelledby="pts4 dry"     step="4" max="20" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="fives"><span role="img">🎲</span> 5</th>
            <th id="pts5">Total des 5</th>
            <td headers="down fives pts5"   ><input type="number" id="inptCol1Pts5" aria-labelledby="pts5 down"    step="5" max="25" min="0" /></td>
            <td headers="up fives pts5"     ><input type="number" id="inptCol2Pts5" aria-labelledby="pts5 up"      step="5" max="25" min="0" /></td>
            <td headers="classic fives pts5"><input type="number" id="inptCol3Pts5" aria-labelledby="pts5 classic" step="5" max="25" min="0" /></td>
            <td headers="dry fives pts5"    ><input type="number" id="inptCol4Pts5" aria-labelledby="pts5 dry"     step="5" max="25" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="sixes"><span role="img">🎲</span> 6</th>
            <th id="pts6">Total des 6</th>
            <td headers="down sixes pts6"   ><input type="number" id="inptCol1Pts6" aria-labelledby="pts6 down"    step="6" max="30" min="0" /></td>
            <td headers="up sixes pts6"     ><input type="number" id="inptCol2Pts6" aria-labelledby="pts6 up"      step="6" max="30" min="0" /></td>
            <td headers="classic sixes pts6"><input type="number" id="inptCol3Pts6" aria-labelledby="pts6 classic" step="6" max="30" min="0" /></td>
            <td headers="dry sixes pts6"    ><input type="number" id="inptCol4Pts6" aria-labelledby="pts6 dry"     step="6" max="30" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="totalup">Total haut</th>
            <td headers="down totalup"   ><output type="number" id="ouptCol1Pts" aria-labelledby="totalup down"    min="0" /></td>
            <td headers="up totalup"     ><output type="number" id="ouptCol2Pts" aria-labelledby="totalup up"      min="0" /></td>
            <td headers="classic totalup"><output type="number" id="ouptCol3Pts" aria-labelledby="totalup classic" min="0" /></td>
            <td headers="dry totalup"    ><output type="number" id="ouptCol4Pts" aria-labelledby="totalup dry"     min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="prime">35 si Total ⩾ 63</th>
            <td headers="down prime"   ><output type="number" id="ouptCol1PtsPrime" aria-labelledby="prime down"    step="35" max="35" /></td>
            <td headers="up prime"     ><output type="number" id="ouptCol2PtsPrime" aria-labelledby="prime up"      step="35" max="35" /></td>
            <td headers="classic prime"><output type="number" id="ouptCol3PtsPrime" aria-labelledby="prime classic" step="35" max="35" /></td>
            <td headers="dry prime"    ><output type="number" id="ouptCol4PtsPrime" aria-labelledby="prime dry"     step="35" max="35" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="total1">Total 1</th>
            <td headers="down total1"   ><output type="number" id="ouptCol1PtsTotal" aria-labelledby="total1 down"    /></td>
            <td headers="up total1"     ><output type="number" id="ouptCol2PtsTotal" aria-labelledby="total1 up"      /></td>
            <td headers="classic total1"><output type="number" id="ouptCol3PtsTotal" aria-labelledby="total1 classic" /></td>
            <td headers="dry total1"    ><output type="number" id="ouptCol4PtsTotal" aria-labelledby="total1 dry"     /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="threeOfAKind">Brelan</th>
            <th id="ptsThreeOfAKind">Total des pts</th>
            <td headers="down threeOfAKind ptsThreeOfAKind"   ><input type="number" id="inptCol1Lig1" aria-labelledby="threeOfAKind down"    max="36" min="0" /></td>
            <td headers="up threeOfAKind ptsThreeOfAKind"     ><input type="number" id="inptCol2Lig1" aria-labelledby="threeOfAKind up"      max="36" min="0" /></td>
            <td headers="classic threeOfAKind ptsThreeOfAKind"><input type="number" id="inptCol3Lig1" aria-labelledby="threeOfAKind classic" max="36" min="0" /></td>
            <td headers="dry threeOfAKind ptsThreeOfAKind"    ><input type="number" id="inptCol4Lig1" aria-labelledby="threeOfAKind dry"     max="36" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="smallStraight">Petite suite</th>
            <th id="ptsSmallStraight">15</th>
            <td headers="down smallStraight ptsSmallStraight"   ><input type="number" id="inptCol1Lig2" aria-labelledby="smallStraight down"    step="15" max="15" min="0" /></td>
            <td headers="up smallStraight ptsSmallStraight"     ><input type="number" id="inptCol2Lig2" aria-labelledby="smallStraight up"      step="15" max="15" min="0" /></td>
            <td headers="classic smallStraight ptsSmallStraight"><input type="number" id="inptCol3Lig2" aria-labelledby="smallStraight classic" step="15" max="15" min="0" /></td>
            <td headers="dry smallStraight ptsSmallStraight"    ><input type="number" id="inptCol4Lig2" aria-labelledby="smallStraight dry"     step="15" max="15" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="largeStraight">Grande suite</th>
            <th id="ptsLargeStraight">20</th>
            <td headers="down largeStraight ptsLargeStraight"   ><input type="number" id="inptCol1Lig3" aria-labelledby="largeStraight down"    step="20" max="20" min="0" /></td>
            <td headers="up largeStraight ptsLargeStraight"     ><input type="number" id="inptCol2Lig3" aria-labelledby="largeStraight up"      step="20" max="20" min="0" /></td>
            <td headers="classic largeStraight ptsLargeStraight"><input type="number" id="inptCol3Lig3" aria-labelledby="largeStraight classic" step="20" max="20" min="0" /></td>
            <td headers="dry largeStraight ptsLargeStraight"    ><input type="number" id="inptCol4Lig3" aria-labelledby="largeStraight dry"     step="20" max="20" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="fullHouse">Full</th>
            <th id="ptsFullHouse">30</th>
            <td headers="down fullHouse ptsFullHouse"   ><input type="number" id="inptCol1Lig4" aria-labelledby="fullHouse down"    step="30" max="30" min="0" /></td>
            <td headers="up fullHouse ptsFullHouse"     ><input type="number" id="inptCol2Lig4" aria-labelledby="fullHouse up"      step="30" max="30" min="0" /></td>
            <td headers="classic fullHouse ptsFullHouse"><input type="number" id="inptCol3Lig4" aria-labelledby="fullHouse classic" step="30" max="30" min="0" /></td>
            <td headers="dry fullHouse ptsFullHouse"    ><input type="number" id="inptCol4Lig4" aria-labelledby="fullHouse dry"     step="30" max="30" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="fourOfAKind">Carré</th>
            <th id="ptsFourOfAKind">40</th>
            <td headers="down fourOfAKind ptsFourOfAKind"   ><input type="number" id="inptCol1Lig5" aria-labelledby="fourOfAKind down"    step="40" max="40" min="0" /></td>
            <td headers="up fourOfAKind ptsFourOfAKind"     ><input type="number" id="inptCol2Lig5" aria-labelledby="fourOfAKind up"      step="40" max="40" min="0" /></td>
            <td headers="classic fourOfAKind ptsFourOfAKind"><input type="number" id="inptCol3Lig5" aria-labelledby="fourOfAKind classic" step="40" max="40" min="0" /></td>
            <td headers="dry fourOfAKind ptsFourOfAKind"    ><input type="number" id="inptCol4Lig5" aria-labelledby="fourOfAKind dry"     step="40" max="40" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr>
            <th id="yam">Yams</th>
            <th id="ptsYam">50</th>
            <td headers="down yam ptsYam"   ><input type="number" id="inptCol1Lig6" aria-labelledby="yam down"    step="50" max="50" min="0" /></td>
            <td headers="up yam ptsYam"     ><input type="number" id="inptCol2Lig6" aria-labelledby="yam up"      step="50" max="50" min="0" /></td>
            <td headers="classic yam ptsYam"><input type="number" id="inptCol3Lig6" aria-labelledby="yam classic" step="50" max="50" min="0" /></td>
            <td headers="dry yam ptsYam"    ><input type="number" id="inptCol4Lig6" aria-labelledby="yam dry"     step="50" max="50" min="0" /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="total2">Total 2</th>
            <td headers="down total2"   ><output type="number" id="ouptCol1LigTotal" aria-labelledby="total2 down"    /></td>
            <td headers="up total2"     ><output type="number" id="ouptCol2LigTotal" aria-labelledby="total2 up"      /></td>
            <td headers="classic total2"><output type="number" id="ouptCol3LigTotal" aria-labelledby="total2 classic" /></td>
            <td headers="dry total2"    ><output type="number" id="ouptCol4LigTotal" aria-labelledby="total2 dry"     /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="total1again">Report Total 1</th>
            <td headers="down total1again"   ><output type="number" id="ouptCol1PtsTotalRep" aria-labelledby="total1again down"    /></td>
            <td headers="up total1again"     ><output type="number" id="ouptCol2PtsTotalRep" aria-labelledby="total1again up"      /></td>
            <td headers="classic total1again"><output type="number" id="ouptCol3PtsTotalRep" aria-labelledby="total1again classic" /></td>
            <td headers="dry total1again"    ><output type="number" id="ouptCol4PtsTotalRep" aria-labelledby="total1again dry"     /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2" id="total12">Total 1+2</th>
            <td headers="down total12"   ><output type="number" id="ouptCol1Total" aria-labelledby="total12 down"    /></td>
            <td headers="up total12"     ><output type="number" id="ouptCol2Total" aria-labelledby="total12 up"      /></td>
            <td headers="classic total12"><output type="number" id="ouptCol3Total" aria-labelledby="total12 classic" /></td>
            <td headers="dry total12"    ><output type="number" id="ouptCol4Total" aria-labelledby="total12 dery"    /></td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
            <td class="impr">&nbsp;</td>
        </tr>
    </tbody>
</table>
    </div>
    <div class="impr">
<table>
    <caption>Yams</caption>
    <thead>
        <tr>
            <th>Combinaison</th>
            <th>Marque</th>
            <th><span role="img" arial-label="En descendant">⬇️</span></th>
            <th><span role="img" arial-label="En montant">⬆️</span></th>
            <th><span role="img" arial-label="Libre">↕️</span></th>
            <th><span role="img" arial-label="Sec">1️⃣</span></th>
            <th><span role="img" arial-label="En descendant">⬇️</span></th>
            <th><span role="img" arial-label="En montant">⬆️</span></th>
            <th><span role="img" arial-label="Libre">↕️</span></th>
            <th><span role="img" arial-label="Sec">1️⃣</span></th>
        </tr>
    </thead>
    <tfoot>
        <tr class="total">
            <th colspan="2">Grand Total</th>
            <td colspan="4">&nbsp;</td>
            <td colspan="4">&nbsp;</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <th><span role="img">🎲</span> 1</th>
            <th>Total des 1</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th><span role="img">🎲</span> 2</th>
            <th>Total des 2</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        <tr>
            <th><span role="img">🎲</span> 3</th>
            <th>Total des 3</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th><span role="img">🎲</span> 4</th>
            <th>Total des 4</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th><span role="img">🎲</span> 5</th>
            <th>Total des 5</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th><span role="img">🎲</span> 6</th>
            <th>Total des 6</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">Total haut</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">35 si Total ⩾ 63</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">Total 1</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Brelan</th>
            <th>Total des pts</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Petite suite</th>
            <th>15</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Grande suite</th>
            <th>20</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Full</th>
            <th>30</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Carré</th>
            <th>40</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <th>Yams</th>
            <th>50</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">Total 2</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">Report Total 1</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr class="total">
            <th colspan="2">Total 1+2</th>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>
    </div>
</div>

<style>
.impr {
    display: none;
}

.yamTable table {
    font-family: 'Brush Script MT', cursive;
    border-collapse: collapse;
    border: 3px solid black;
}
.yamTable caption {
    font-size: 2.8rem;
}
.yamTable thead th, .yamTable .total th {
    font-size: 1.2rem;
    background: lightgrey;
}
.yamTable output {
    font-size: 1.2rem;
    color: black;
}
.yamTable tfoot output {
    font-size: 1.4rem;
}
.yamTable thead th:first-child, .yamTable .total th {
    font-size: 1.5rem;
}
.yamTable .total td {
    background: lightgrey !important;
}
.yamTable tfoot .total > * {
    background: darkgray;
    font-size: 2rem;
}
.yamTable td {
    text-align: center;
}
.yamTable input  {
    width: 4rem;
    text-align: center;
}
.yamTable th, .yamTable td {
    border: 1px solid darkgray;
    background: white;
}
.yamTable thead tr, .yamTable tr.total {
    border: 3px solid black;
}
.yamTable tbody tr:not(.total) th:nth-child(4n + 2), .yamTable tbody tr:not(.total) td:nth-child(4n + 2) {
    border-right-width: 3px;
    border-right-color: black;
}
.yamTable tbody .total th:nth-child(4n + 1), .yamTable tbody .total td:nth-child(4n + 1) {
    border-right-width: 3px;
    border-right-color: black;
}
.yamTable tfoot th, .yamTable tfoot td {
    border-right-width: 2px;
}
</style>
<script>
function calculs(col) {
    //console.log("Bouge pas, je calcule la calonne " + col);
    var total = 0;
    var haut = document.querySelectorAll("[id^='inpt"+col+"']");
    for (const score of haut) {
        if(score.value.length != 0) total = total + parseInt(score.value);
    }
    //console.log("total: " + total);
    if ( total > 0 ) {
        if ( col.substr(4) == "Pts" ) {
            // En haut
          //console.log("En haut");
            document.querySelector("#oupt"+col).value = total;
            if ( total >= 63 ) {
                document.querySelector("#oupt"+col+"Prime").value = 35;
                total += 35;
            }
            document.querySelector("#oupt"+col+"Total").value = total;
            document.querySelector("#oupt"+col+"TotalRep").value = total;
            total2 = parseInt(document.querySelector("#oupt"+col.replace("Pts","Lig")+"Total").value);
            if (!isNaN(total2)) {
                //console.log("L'autre total: " + total2);
                document.querySelector("#oupt"+col.replace("Pts","Total")).value = total + total2;
                grandTotal()
            }
        } else {
            // En bas
          //console.log("En bas");
            document.querySelector("#oupt"+col+"Total").value = total;          
            total2 = parseInt(document.querySelector("#oupt"+col.replace("Lig","Pts")+"Total").value);
            if (!isNaN(total2)) {
                //console.log("L'autre total: " + total2);
                document.querySelector("#oupt"+col.replace("Lig","Total")).value = total + total2;
                grandTotal()
            }
        }
    }
};

function grandTotal() {
    total = 0;
    for (let c = 1; c <= 4; c++) {
        total12 = parseInt(document.querySelector("#ouptCol" + c + "Total").value);
        if (!isNaN(total12)) {
            total += total12;
        }           
    }
    document.querySelector("#inptGrandtotal").value = total;
};

function printYam() {
var prtContent = document.querySelector(".yamTable");
var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
  
WinPrint.document.write('<html><head>');
WinPrint.document.write('<link rel="stylesheet" href="https://www.6x8.org/wp-content/uploads/custom-css-js/6049.css?v=5205" type="text/css" />');
WinPrint.document.write('</head><body onload="window.print();">');
WinPrint.document.write(prtContent.outerHTML);
WinPrint.document.write('</body></html>');
WinPrint.document.close();
WinPrint.focus();
//WinPrint.print();
//WinPrint.close();
};

window.onload = (event) => {
    //console.log("Bonjour le monde");
    document.querySelector("#btnImpr").addEventListener('click', (event) => {
        window.print();
      //printYam();
    });
    for (let c = 1; c <= 4; c++) {
        calculs("Col"+c+"Pts");
        calculs("Col"+c+"Lig");
    }
    var inputs = document.querySelectorAll("input")
    for (const elt of inputs) {
        //console.log(elt);
        elt.addEventListener('blur', (event) => {
            //console.log( event.target.id.substring(4,8) );
            calculs( event.target.id.substring(4,11) );
        });
    }
};
</script>
