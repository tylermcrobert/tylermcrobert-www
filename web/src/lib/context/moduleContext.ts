import { createContext } from 'svelte';

export type ModuleContext = {
	index: number;
	documentId: string;
	documentType: string;
	path: string;
};

export const [getModuleContext, setModuleContext] =
	createContext<ModuleContext>();
