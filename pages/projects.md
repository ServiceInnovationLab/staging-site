---
title: Projects
permalink: /projects/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
content_wide: true
content_focus: false
gridless: true
---

<section class="background-medium project">
  <div class="nz-grid-full nz-flex banner">
    <div class="nz-grid nz-width-one-whole hero-callout-full hero-callout-no_button">
      <h1 class="page-title" style="padding-top: 3rem">
        {{ page.title }}
      </h1>
    </div>
  </div>
</section>

<section class="nz-section">
  <div class="nz-grid">
    <button class="categories-button-clear filter-button active-filter">All</button>
    <button class="categories-button filter-button" data-category="integrated-services">Integrated Services</button>
    <button class="categories-button filter-button" data-category="tech">Tech</button>
    <button class="categories-button filter-button" data-category="ways-of-working">Ways of working</button>
    <button class="categories-button filter-button" data-category="partnerships">Partnerships</button>
  </div>

  <div class="child-page-listing-projects nz-grid-full">
  <!-- <div class="nz-grid"> -->
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="projects-grid">
        <!-- <div class="nz-flex nz-flex-wrap"> -->
          {% assign projects_list = site | find_collection: 'services_projects' | weighted_sort: 'project_weight', 'title' %}
          {% for project in projects_list %}
            {% include card-project.html
            image_src=project.image
            image_alt=project.image_accessibility
            image_icon=project.image_icon
            agency=project.agency
            tagline=project.title
            description=project.excerpt
            link=project.permalink
            categories=project.categories
            %}
          {% endfor %}
          <button id="scrollToTopBtn" title="Go to top">Back to Top</button>
        </div>
      </div>
    </section>
  </div>
</section>
