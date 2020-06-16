---
title: Approach
permalink: /approach/
layout: primary
content_wide: true
content_focus: false
gridless: true
---

<section class="nz-section background-gray">
  <div class="nz-grid">
      <div class="nz-width-two-thirds">
        <h2 tabindex="0">Approach</h2>
      </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign approach_list = site | find_collection: 'approach' | weighted_sort: 'approach_weight', 'title' %}
          {% for approach in approach_list %}
            {% include card.html
            image_src=approach.image
            image_alt=approach.image_accessibility
            image_icon=approach.image_icon
            agency=approach.agency
            tagline=approach.title
            description=approach.excerpt
            link=approach.permalink
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
