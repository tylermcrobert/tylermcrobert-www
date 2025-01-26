# Svelte + Sanity Starter

A starter template integrating [SvelteKit](https://kit.svelte.dev/) with [Sanity.io](https://www.sanity.io/) for building modern, fast, and dynamic web applications with a robust CMS backend.

## Getting started

Do the following checklist before getting started

1. Change the name of your project in `web/package.js` and `studio/package.js`
2. Create a new project in Sanity [here](https://www.sanity.io/manage?new-project).
3. Update environment variables:

`/studio/.env`:

```env
SANITY_STUDIO_PROJECT_ID="xxx"
SANITY_STUDIO_TITLE="Example Name"
SANITY_STUDIO_PREVIEW_LINK="https://yourdomain.com"
```

`/web/.env`:

```env
SANITY_TOKEN="xxx"
PUBLIC_SANITY_PROJECT_ID="xxx"
PUBLIC_SITE_URL="https://yourdomain.com"
```

## Before Launch

1. Update Favicon
2. Verify sitemap.xml
3. Verify schema.org
