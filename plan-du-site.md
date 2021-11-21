---
layout: post 
title: "Plan du site"

---

{% for category in site.categories %}
<details>
	<summary id="{{ category | first }}">{{ category | first }}</summary>
	<ul>
    {% for post in category.last %}
    	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
</details>
{% endfor %}
