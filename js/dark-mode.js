function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
    document.getElementById("darkmode-toggle").checked = true;
}
document.getElementById("darkmode-toggle").addEventListener('change', (event) => {
	document.body.classList.toggle("dark-mode");
	document.cookie = 'darkmode='+(document.getElementById("darkmode-toggle").checked)+'; path=/; max-age=${60 * 60 * 24 * 14}; samesite';
});
if (getCookie("darkmode") !== undefined) {
	if (getCookie("darkmode") === "true") {
		document.getElementById("darkmode-toggle").checked = true;
		document.body.classList.add("dark-mode");
	}
} else {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.getElementById("darkmode-toggle").checked = true;
		document.body.classList.add("dark-mode");
		document.cookie = 'darkmode=true; path=/; max-age=${60 * 60 * 24 * 14};';
	}
}