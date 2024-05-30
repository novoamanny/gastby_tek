# gatsby_tek

WD Jam Theme - Full Site - Tek Roofing


# Multiple Repositories

There are two separate repositories for this project:

- One at digitalthrive/gatsby_tek. This is not a fork, just a separate copy of the site. The [development site](https://compassionate-goldstine-98d45b.netlify.app/) deploys from the master branch of this repo. 
- One that is under the client's Github account at https://github.com/cthiebaud0718/tek_roofing_site, which is the repo connected to Netlify. This is the repo which, if changed, will trigger site rebuilds as outlined below.
- The credentials for cthiebaud0718 on Github are stored in Bitwarden. There may be 2-factor authentication required, which sends an email to iteam@warrendouglas.com.

# CMS / Content Editing Instructions

WARNING: Any change through the CMS or editing of the Github files directly will trigger a site rebuild. These site rebuilds take 5-8 build minutes and will not affect access or viewing the site while it is ongoing. However, for the free tier of Netlify, you are alotted 300 free build minutes.
If you edit the CMS enough to go over the build minutes, you will have to purchase a higher tier.

CMS is loacated at https://tekroofingsystems.com/admin. You will need to login with your Netlify Identity credentials when accessing.

These categories can be edited through the CMS:

- Testimonial Quotes
- Dealer Tools clickable items
  - When adding a dealer tool, only add either a URL or a file. Adding both will create an error.

Gallery Images can be added by going to https://github.com/cthiebaud0718/tek_roofing_site/tree/master/site/data/images/gallery and choosing gallery1 or gallery2 folder. Use the upload files widget - Gallery 1 folder is Metal Shake, Gallery 2 folder is Metal Shake Pro

General content may be edited by editing the file at https://github.com/cthiebaud0718/tek_roofing_site/blob/master/site/data/sections/sections.yml located on Github. This is NOT RECOMMENDED as this can have unintended consequences to the overall design and/or break the site if data is entered incorrectly.

# Development requirements

## Required Tools

node 10.18.1
requires yarn for workspace use
Built using Gatsby / React

Local install process:

git clone https://github.com/digitalthrive/gatsby_tek.git</br>
yarn install</br>
yarn workspace site develop (to develop)</br>
yarn workspace site build (to generate static folder)</br>
Primary content for site stored in /site/data foler

## To Do
Update node to later version and test
