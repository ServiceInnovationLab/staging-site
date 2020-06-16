---
title: Insights
permalink: /insights/
layout: primary
content_wide: true
content_focus: false
gridless: true
---

<section class="nz-section background-gray">
  <div class="nz-grid">
      <div class="nz-width-two-thirds">
        <h2 tabindex="0">Insights</h2>
      </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign insights_list = site | find_collection: 'insights' | weighted_sort: 'insights_weight', 'title' %}
          {% for insights in insights_list %}
            {% include card.html
            image_src=insights.image
            image_alt=insights.image_accessibility
            image_icon=insights.image_icon
            agency=insights.agency
            tagline=insights.title
            description=insights.excerpt
            link=insights.permalink
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
