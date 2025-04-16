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

TODO: 
## Implement the following 

- [ ] ensure all meta tags are implemented
- [ ] ensure all social tags and social card images are generated 
- [ ] add a css framework and clean up markup
- [ ] Truncate page title length to 65 and raise warning if provided value is longer
- [ ] add meta data fields for meta tags keywords and description for all content types
- [ ] check formatting of page urls that hypens are used rather than underscores, auto replace if possible or raise warning
- [ ] setup the scripts to auto generate the social media images for each page.
- [ ] get all required configuration values to be defined in one location if possible.
- [ ] generate schema.org microdata where appropriate
- [ ] eliminate inline css
- [ ] eliminate any render blocking resources
- [ ] automatic generate xml sitemap
- [ ] supply an ads.txt file
- [ ] provide a complete default favicon set
- [ ] link rel=canonical on all pages
- [ ] meta tags for Google snippet on all pages
- [ ] compare this list against multiple SEO checklist sites. there may be more things to do here.

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
