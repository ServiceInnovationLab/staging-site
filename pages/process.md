---
title: Process
permalink: /process/
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
        
* Shared problems requiring cross-agency collaboration
* A focus on discovery and experiment
* Commitment to implement and deliver results 
* Capturing and sharing learning. 

The team have developed a process that supports early engagement and exploration before committing to in depth project work.  We have found it an effective way to create the conditions for collaboration and understand the authorising environment. 
</p>
    </div>
</div>

<div class="nz-grid">
  <section class="nz-section">
    <div class="nz-section-bottom">
      <div class="nz-flex nz-flex-wrap">
        {% assign process_list = site | find_collection: 'process' | weighted_sort: 'process_weight', 'title' %}
        {% for process in process_list %}
          {% include card.html
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
</section>
