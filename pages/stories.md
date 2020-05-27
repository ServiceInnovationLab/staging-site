---
title: Stories
permalink: /stories/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
content_wide: true
content_focus: false
gridless: true
---

<style>
h2 {
  color:#2337CE;
}
</style>

<section class="nz-section background-gray">
  <div class="nz-grid">
      <div class="nz-width-two-thirds">
        <h2 tabindex="0"> Stories </h2>
      </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign stories_list = site | find_collection: 'stories' | weighted_sort: 'story_weight', 'title' %}
          {% for story in stories_list %}
            {% include card.html
              image_src=story.image
              image_alt=story.image_accessibility
              image_icon=story.image_icon
              agency=story.agency
              tagline=story.title
              description=story.excerpt
              link=story.permalink
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
