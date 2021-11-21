---
layout: post 
title:  "Ceci n'est pas une date"

---

<form role="form" id="date">
	<h2>C'est un champs de texte libre</h2>
	<div>
		<label for="Identifiant">Identifiant</label>
		<input type="text" id="Identifiant">
	</div>
	<div>
		<label for="Password">Phrase de passe</label>
		<input type="password" id="Password">
	</div>
	<div>
    	<label for="DateDeNaissance">Date de  naissance</label>
		<input type="text" id="DateDeNaissance" aria-describedby="DateDeNaissance_Aide" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="JJ/MM/AAAA">
		<span class="text-hide" id="DateDeNaissance_Aide" >JJ/MM/AAAA</span>
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
</style>