---
title: search
layout: none
search: exclude
permalink: /search-results-test/
---

<!-- [
{% for page in site.pages %}
{% unless page.search == "exclude" %}
{
"title": "{{ page.title | escape }}",
"tags": "{{ page.tags }}",
"media": "{{ page.media }}",
"keywords": "{{page.keywords}}",
"url": "{{ page.url }}",
"summary": "{{ page.summary | strip }}"
},
{% endunless %}
{% endfor %}

{% for post in site.posts %}

{
"title": "{{ post.title | escape }}",
"tags": "{{ post.tags }}",
"media": "{{ page.media }}",
"keywords": "{{post.keywords}}",
"url": "{{ post.url }}",
"summary": "{{ post.summary | strip }}"
}
{% unless forloop.last %},{% endunless %}
{% endfor %}

] -->
<!-- [
{% for post in site.documents %}
  {
    "title" : "{{ post.title | escape }}",
    "category" : "{{ post.category }}",
    "tags" : "{{ post.tags | array_to_sentence_string }}",
    "url" : "{{ site.baseurl }}{{ post.url }}",
    "date" : "{{ post.date }}"
  } {% unless forloop.last %},{% endunless %}
{% endfor %},

{% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date }}",
      "content"  : "{{ post.content | strip_html | strip_newlines }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ,
  {% for page in site.pages %}
   {
     {% if page.title != nil %}
        "title"    : "{{ page.title | escape }}",
        "category" : "{{ page.category }}",
        "tags"     : "{{ page.tags | join: ', ' }}",
        "url"      : "{{ site.baseurl }}{{ page.url }}",
        "date"     : "{{ page.date }}",
        "content"  : "{{ page.content | strip_html | strip_newlines }}"
     {% endif %}
   } {% unless forloop.last %},{% endunless %}
  {% endfor %}
] -->
