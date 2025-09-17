export function itemCount(count: any[] = [], singular: string = 'item', plural?: string): string {
  return `${count.length} ${count.length === 1 ? singular : plural || singular + 's'}`
}
