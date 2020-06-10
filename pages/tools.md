---
title: Process and Tools
permalink: /tools/
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
      <h2 tabindex="0">Process</h2>
      <p>As a design and development lab working across government agencies the Lab’s overarching approach focuses on:
        <ul>
          <li>Shared problems requiring cross-agency collaboration</li>
          <li>A focus on discovery and experiment</li>
          <li>Commitment to implement and deliver results</li>
          <li>Capturing and sharing learning</li>
        </ul>
      The team have developed a process that supports early engagement and exploration before committing to in depth project work. We have found it an effective way to create the conditions for collaboration and understand the authorising environment.</p>
    </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign process_list = site | find_collection: 'process' | weighted_sort: 'process_weight', 'title' %}
          {% for process in process_list %}
            {% include card-process.html
            image_src=process.image
            image_alt=process.image_accessibility
            image_icon=process.image_icon
            agency=process.agency
            tagline=process.title
            description=process.excerpt
            link=process.permalink
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
    <div class="nz-grid">
      <div class="nz-width-two-thirds">
        <h2> Tools </h2>
        <a href="/staging-site/sil-glossary">Glossary of Terms</a>
    </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign projects_list = site | find_collection: 'products_projects' | weighted_sort: 'project_weight', 'title' %}
          {% for project in projects_list %}
            {% include card_tools.html
            image_src=project.image
            image_alt=project.image_accessibility
            image_icon=project.image_icon
            agency=project.agency
            tagline=project.title
            description=project.excerpt
            link=project.permalink
            external_url=project.external_url
            external_link_title=project.external_link_title
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
