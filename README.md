# Svelte + Sanity Starter

A starter template integrating [SvelteKit](https://kit.svelte.dev/) with [Sanity.io](https://www.sanity.io/) for building modern, fast, and dynamic web applications with a robust CMS backend.

## Getting started

Do the following checklist before getting started

1. Change the name of your project in `web/package.json` and `studio/package.json`
2. Create a new project in Sanity [here](https://www.sanity.io/manage?new-project).
3. Update environment variables in `studio` and `web`.

## Best Practices

### GROQ Queries

GROQ queries are Sanity's way of grabbing data from the content lake. See the documentation [here](https://www.sanity.io/docs/content-lake/how-queries-work) for more information.

#### Queries File

When creating queries, you should always be considering type safety. Use `pnpm typegen` to generate types from the queries and Sanity Studio.

`queries.ts` is grouped by _projections_, _modules_, _pages_, _global data_, and _utils_. Module projections are also further broken down by module type.

#### Module Queries

```typescript
/**
 * Page Hero
 */

const MODULE_PAGE_HERO = `// groq
  _type == 'pageHero' => {
    eyebrow,
    theme,
    background${MEDIA_PROJECTION}
    headline[]${RICH_TEXT_PROJECTION}
  }
`;
```

You will notice a few things:

1. The query includes a comment to separate the module query and make it more readable.
2. It uses a comment `//groq` to enable syntax highlighting.
3. It is defined as a constant rather than writing it in one long projection. This allows us to add typescript types nearby as we build the query.
4. It is using reusable projections defined earlier in the file.

You will need to manually type each module projection but you can use types created from `pnpm typegen` to help out. For example take this example module:

```typescript
export type ModulePageHero = Pick<PageHero, "eyebrow" | "theme"> &
  Nullable<{
    _type: "pageHero";
    headline: RichTextProjection;
    cta: LinkProjection;
    background: MediaProjection;
  }>;
```

Some things to note about the above type definition.

1. It is importing the module type from `typegen`. This is generated from the schema itself. We take what we can from here because it will always be up-to-date and if it is removed or changed, the changes will come with it.
2. There is a "Nullable" generic utility type that easily marks all keys as potentially null. This is because everything from the CMS at one point is null even if it is required in the schema.
3. Projections like `RichTextProjection`, `LinkProjection`, and `MediaProjection` must be cast manually. This is because these projections are created within this file and not from `typegen`.

You can use the project vscode snippet `modquery` to save some time when writing these manually.

## Before Launch

1. Update Favicon
2. Verify sitemap.xml
3. Verify schema.org

```

```
