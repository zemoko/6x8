---

---

<script type="text/javascript">

  var postsURL = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];

  var postsTitle = [{% for post in site.posts %}{{ post.title | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}];


  {% comment %}
  // randomize posts from a specific category
  //
  // var postsURL = [{% for post in site.posts %}{% if post.category contains 'reviews' %}{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}];
  // var postsTitle = [{% for post in site.posts %}{% if post.category contains 'reviews' %}"{{ post.title }}"{% unless forloop.last %},{% endunless %}{% endif %}{% endfor %}];
  {% endcomment %}
</script>


<script type="text/javascript">

  var randomIndexUsed = [];
  var counter = 0;
  var numberOfPosts = 1;

  while (counter < numberOfPosts) {
    var randomIndex;
    var postURL;
    var postTitle;

    randomIndex = Math.floor(Math.random() * postsURL.length);

    if (randomIndexUsed.indexOf(randomIndex) == "-1") {
      postURL = postsURL[randomIndex];
      postTitle = postsTitle[randomIndex];

      if (counter == (numberOfPosts - 1)) {
        document.write('<a id="li' + counter + '" href="' + postURL + '">' + postTitle + '</a>');
      } else {
        document.write('<a id="li' + counter + '" href="' + postURL + '">' + postTitle + '</a><hr />');
      }

      randomIndexUsed.push(randomIndex);

      counter++;
    }
  }

  if (numberOfPosts == 1) {
	setTimeout(function(){ document.getElementById('li0').click(); }, 1000);
  }

</script>
<style>
body { display: flex;align-items: center;justify-content: center;flex-direction: column; width: 100%; max-wdith: 100vw; text-align: center; margin: 10% 0; min-height: 200px; background-color: rgba(33, 33, 33, .3); align-items: center; font-size: 3rem}
</style>
