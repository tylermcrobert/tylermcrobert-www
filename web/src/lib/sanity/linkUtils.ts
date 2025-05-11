import type { LinkProjection } from './queries';

type Link = {
	slug: string | null;
	type: string | null;
};

export function resolveLink({ slug, type }: Link) {
	if (type === 'page') {
		return `/${slug}`;
	}

	if (type === 'project') {
		return `/work/${slug}`;
	}

	if (type === 'info') {
		return `/info`;
	}

	if (type === 'homepage') {
		return `/`;
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

export function getLinkProjectionLabel(linkProjection: LinkProjection) {
	return linkProjection.label || linkProjection.reference?.title || null;
}
