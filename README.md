# VanHacks

VanHacks website, built with [Next.js](https://nextjs.org/) and [Netlify CMS](https://www.netlifycms.org/), following this [guide](https://www.netlifycms.org/docs/nextjs/)

This website was originally built as a static HTML/CSS/JS website, but was migrated to static Next.js + Netlify CMS so the CMS could be used to make changes to the content. There are still some remnants of this, mainly being the use of jQuery instead of just written with React javascript.

Production website located at: https://vanhacks.com

Admin panel: https://vanhacks.com/admin/index.html


## Running Locally

* `npm install` 
  
* `npm run dev`


### IMPORTANT

There is only one 'CMS' per site, so even when developing locally if you make changes in the admin panel it will hcange on production as well. 

If you want to test changes made to your config.yml file locally, swap out "git-gateway" with "test-repo" and navigate to localhost:3000/admin/index.html to view Netlify CMS locally (you can't make changes or read actual content from Git this way, but it's great to verify how things will look).


## Publishing Changes

The beauty of Netlify CMS is that it is connected to git, that means any change made to master wil automatically trigger a rebuild of the website. Changes made to the content from the admin panel will also be comitted to git, and then trigger a rebuild of the website. This results in a 'static' website paired with a CMS. This setup gives us the benefits of having a static website (no api calls, less loading time, smaller assets, etc) with the benefits of having an admin panel that allows marketing to go in and make content changes without a developer.


## Changing the website configuration

All configuration for the website (including: defining pages and custom fields) is done in `config.yml`.





