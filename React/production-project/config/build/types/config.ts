export type BuilMode = 'development' | 'production'

export interface BuildPaths {
    entry: string, 
    build: string,
    html: string,
}

export interface BuildOptions {
	mode: BuilMode,
    paths: BuildPaths,
}
