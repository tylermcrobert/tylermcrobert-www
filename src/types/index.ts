export * from './sanityTypes'
export * from './schema'

export type SizeKey = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs'
export type ResponsiveSizes = { [key in SizeKey]: number }
export type ResponsiveImgSizeBlock = { [key in keyof ResponsiveSizes]?: string }
