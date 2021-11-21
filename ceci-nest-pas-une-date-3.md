---
layout: post 
title:  "Ceci n'est pas une date"

---

<form role="form" id="date">
	<h2>Ce sont 3 champs de texte</h2>
	<div>
		<label for="Identifiant">Identifiant</label>
		<input type="text" id="Identifiant">
	</div>
	<div>
		<label for="Password">Phrase de passe</label>
		<input type="password" id="Password">
	</div>
	<div>
    	<span id="DateDeNaissance">Date de  naissance</span>
    	<div>
			<label for="JourDeNaissance" id="JourDeNaissance_label" class="sr-only">Jour</label>
			<input type="number" id="JourDeNaissance" aria-labeledby="DateDeNaissance JourDeNaissance_label" placeholder="JJ">
			<label for="MoisDeNaissance" id="MoisDeNaissance_label" class="sr-only">Mois</label>
			<input type="number" id="MoisDeNaissance" aria-labeledby="DateDeNaissance MoisDeNaissance_label" placeholder="MM">
			<label for="AnneeDeNaissance" id="AnneeDeNaissance_label" class="sr-only">Année</label>
			<input type="number" id="AnneeDeNaissance" aria-labeledby="DateDeNaissance AnneeDeNaissance_label" placeholder="AAAA">
		</div>
	</div>
	<div>
		<div></div>
		<input type="submit" value="S'authentifier">
	</div>
</form>

<style>
	form#date {display:table}
	form#date > h2 {display:table-caption;text-align:center;padding:.4rem}
	form#date > div {display:table-row}
	form#date > div > * {display:table-cell;padding:.4rem}
	form#date label {text-align: right}
	form#date input[type=submit] {margin-top:.4rem;width:100%;}
	form#date > div > div > input {width:4.2rem;margin-right:.5rem}
</style>