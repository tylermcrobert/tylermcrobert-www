import { Filter } from 'bad-words';

export const censor = (text: string) => {
	const filter = new Filter();

	// Split text into words using word boundaries, preserving the structure
	return text.replace(/\b\w+\b/g, (word) => {
		// Check if the word is profane
		if (!filter.isProfane(word)) {
			return word;
		}

		// If word is 1-2 characters, return asterisks
		if (word.length <= 2) {
			return '*'.repeat(word.length);
		}

		// Keep first and last letters, replace middle with asterisks
		const first = word[0];
		const last = word[word.length - 1];
		const middle = '*'.repeat(word.length - 2);

		return first + middle + last;
	});
};
