import { createContext } from 'svelte';

/**
 * Per-module identity for Visual Editing overlays and image priority.
 * Set once around each module; children read it via {@link getModuleContext}.
 */
export type ModuleContext = {
	/** Zero-based index in the modules array (used for early-image priority). */
	index: number;

	/**
	 * Sanity document `_id` that owns this module.
	 * Passed to `createDataAttribute` so Presentation knows which document to open.
	 */
	documentId: string;

	/**
	 * Sanity document `_type` (e.g. `page`, `homepage`).
	 * Passed to `createDataAttribute` with `documentId` for Visual Editing overlays.
	 */
	documentType: string;

	/**
	 * Absolute GROQ/path to this module within the document
	 * (e.g. `modules[_key=="abc"]`). Nested overlays append relative paths.
	 */
	path: string;
};

export const [getModuleContext, setModuleContext] =
	createContext<ModuleContext>();
