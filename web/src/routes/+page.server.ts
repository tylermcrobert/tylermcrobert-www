export const load = async ({ parent }) => {
	const { contextTitle } = await parent();

	return {
		pageTitle: null,
		metadata: null,
		// Add title for contexts
		titleOverride: contextTitle ? `Tyler McRobert × ${contextTitle}` : null
	} satisfies App.PageReturn;
};
