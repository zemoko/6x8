#!/bin/bash

echo "INSTAGRAM TO JEKYLL IMPORTER"

echo "[?] Which Instagram post would you like to import?"
read post

# echo "[?] What is the title of your new post?"
# read title
title=$(curl -s "https://api.instagram.com/oembed/?url=http://instagr.am/p/$post" | jq -r '.title')

echo "titre : $title"

echo "[?] What should the publish date of the post be? (y-m-d)"
read date

#echo "[?] Where should the post be saved?"
#read postDir
postDir = "_posts"

#echo "[?] Where should the images be saved?"
#read imgDir
imgDir = "images"

# Format filename
fileName=$(echo "$date-$title" | iconv -t ascii//TRANSLIT | sed -E s/[^a-zA-Z0-9]+/-/g | sed -E s/^-+\|-+$//g | tr A-Z a-z)
path="_posts/$fileName.md"

# Show confirmation on screen
echo "Starting import"
echo "--> importing post with id '$post'"
echo "--> output file: $fileName.md"

# Download the images
echo "--> import images"
wget --output-document="images/$fileName.jpg" "https://www.instagram.com/p/$post/media"
wget --output-document="images/${fileName}_large.jpg" "https://www.instagram.com/p/$post/media?size=l"
wget --output-document="images/${fileName}_thumbnail.jpg" "https://www.instagram.com/p/$post/media?size=t"

# Output markdown file
content="---
layout: instagram
title:  '$title'
date:   $date
categories: 
  - "trucs-instagrammes"
tags: []
coverImage: $fileName.jpg
instagram: $post
post_image: $fileName.jpg
post_image_large: ${fileName}_large.jpg
post_image_small: ${fileName}_thumbnail.jpg
---

"
echo "$content" >> "$path"
