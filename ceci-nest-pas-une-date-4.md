---
layout: post 
title:  "Ceci n'est pas une date"

---

<form role="form" id="date">
	<h2>Ce sont 3 listes déroulantes</h2>
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
			<label class="sr-only" id="JourDeNaissance_label" for="JourDeNaissance">Jour</label>
			<select id="JourDeNaissance"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select>
			<label class="sr-only" id="MoisDeNaissance_label" for="MoisDeNaissance">Mois</label>
			<select id="MoisDeNaissance"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option></select>
			<label class="sr-only" id="AnneeDeNaissance_label" for="AnneeDeNaissance">Année</label>
			<select id="AnneeDeNaissance"><option>1940</option><option>1941</option><option>1942</option><option>1943</option><option>1944</option><option>1945</option><option>1946</option><option>1947</option><option>1948</option><option>1949</option><option>1950</option><option>1951</option><option>1952</option><option>1953</option><option>1954</option><option>1955</option><option>1956</option><option>1957</option><option>1958</option><option>1959</option><option>1960</option><option>1961</option><option>1962</option><option>1963</option><option>1964</option><option>1965</option><option>1966</option><option>1967</option><option>1968</option><option>1969</option><option>1970</option><option>1971</option><option>1972</option><option>1973</option><option>1974</option><option>1975</option><option>1976</option><option>1977</option><option>1978</option><option>1979</option><option>1980</option><option>1981</option><option>1982</option><option>1983</option><option>1984</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option><option>1989</option><option>1990</option><option>1991</option><option>1992</option><option>1993</option><option>1994</option></select>
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
	form#date > div > div > select {width:4.2rem;margin-right:.5rem}
</style>