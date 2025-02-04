/**
 * Get time from total miliseconds
 * @param ms Total milesoncds
 * @returns object with hours, minutes, seconds
 */

function msToTime(ms: number) {
	const totalSeconds = Math.floor(ms / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;
	return { hours, minutes, seconds };
}

/**
 * Get date format from Miliseconds
 * @param ms Number of miliseconds
 * @param format Time format
 * @returns String of formatted date
 */

export function formatTime(ms: number, format: TimeFormat) {
	const { hours, minutes, seconds } = msToTime(ms);

	function formatTime(items: number[]) {
		return items.map((item) => item.toString().padStart(2, '0')).join(':');
	}

	if (format === 'hh:mm:ss') return formatTime([hours, minutes, seconds]);
	if (format === 'hh:mm') return formatTime([minutes, seconds]);
	return formatTime([minutes, seconds]);
}

type TimeFormat = 'hh:mm:ss' | 'hh:mm' | 'mm:ss';
