# Astro SEO Starter Site: Blog / Podcast

The purpose of this "theme" is to provide a starting point and framework to facillitate SEO best practices. This theme is intended for use with cloudflare pages and includes the appropriate packages for deployment with wrangler. 

once cheked out, run
```
npm install
```
to install dependencies

then the following commands are available
```
npm run dev     #runs a development server with live refresh
npm run build   #builds the complete site into /dist
npm run deploy  #deploys the site to cloudflare pages, will open up a browser window to login and provide permissions to write to cloudflare on first run
```

So far we have:
- [x] - all images are run through an optimization function where they are converted to webp
- [x] - blogs and podcasts generate rss feeds
- [x] come up with a set of colors that will vary by theme 
- [x] provide RSS feed for blog
- [x] provide RSS feed for podcast
- [x] add a css framework Tailwind 4.x
- [x] process all images inline and attached in metadata as webp 
- [x] add meta data fields for meta tags keywords and description for all content types
- [x] get all required configuration values to be defined in one location if possible. (consts.ts is the single source of truth)
- [x] eliminate inline css
- [x] eliminate any render blocking resources
- [x] automatic generate xml sitemap
- [x] supply an ads.txt file
- [x] supply a robots.txt file
- [x] link rel=canonical on all pages

TODO: 
## Implement the following 
- [ ] ensure all social tags and social card images are generated 
- [ ] clean up configuration variables/templates
- [ ] Truncate page title length to 65 and raise warning if provided value is longer
- [ ] check formatting of page urls that hypens are used rather than underscores, auto replace if possible or raise warning
- [ ] setup the scripts to auto generate the social media images for each page.
- [ ] generate schema.org microdata where appropriate
- [ ] provide a complete default favicon set, generate them automatically from a single svg or png provided by user
- [ ] meta tags for Google snippet on all pages
- [ ] compare this list against multiple SEO checklist sites. there may be more things to do here.
- [ ] ensure all meta tags are implemented
  - *Implemented meta-tags*: title, language, description,subject, robots, copyright, author, reply-to, keywords, viewport, url, identifier-url,syndication-source, original-source, og:type,og:url,og:title,og:description,og:image,og:site_name, twitter:card, twitter:url, twitter:title, twitter:description, identifier-urltwitter:image
 
## Create the Following Required Documentation Pages
- [ ] SEO Guidelines for articles/pages
- [ ] SEO Configuration for Cloudflare
- [ ] List of all Configuration file edits required for a new site
- [ ] List of all assets that must be generated for a new site

## Additional Things I'd Like to Have
- [ ] A CMS Project CRUD application that validates all markdown metadata fields and creates/edits pages saving them as markdown files and provides git add/rm/mv/commit/push for publishing changes from a demo server. Making editing blogs built with this system and published on cloudflare pages accessible to non-technical people.
- [ ] A script to read new blog entries into chatGPT and get keyword reccommendations / content edits back.     
- [ ] A system to associate with other sites that make up a "content group" where each site is a sort of mirror of the others, but instead of being identical, the sites will be geared towards different audiences. Through the association functionality such as the following might be developed:
- [ ] A script to read new blog entries into chatGPT and generate variations for each of the audiences specified in this group of sites.
- [ ] A script to scan content for opportunities to provide additional affiliate marketing links
- [ ] A script to scan content for links to businesses or opportunities to link to businesses and provide them as a TODO list along with contact information for said businesses, to facillitate obtaining backlinks.

    
- [google doc with my SEO notes and sources]
(https://docs.google.com/document/d/1kmi4EPfOmLoU5PPG3GmhM9F_0B5JbHcPM1oRAMjO8Q0/edit?usp=drivesdk)
