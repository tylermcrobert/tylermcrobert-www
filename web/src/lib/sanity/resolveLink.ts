import type { LinkProjection } from './queries';

type Link = {
	slug: string | null;
	type: string | null;
};

export function resolveLink({ slug, type }: Link) {
	if (type === 'page' || type == 'caseStudy') {
		return `/${slug}`;
	}

	if (type === 'homepage') {
		return `/`;
	}

	if (type === 'context') {
		return `/x/${slug}`;
	}

	console.error('Could not resolve link', { slug, type });

	return null;
}

export function resolveLinkProjection(link: LinkProjection) {
	if (link.href) return link.href;

	const resolvedLink = resolveLink({
		type: link.reference?._type || null,
		slug: link.reference?.slug || null
	});

	if (resolvedLink) return resolvedLink;

	return null;
}
