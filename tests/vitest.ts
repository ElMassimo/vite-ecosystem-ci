import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'vitest-dev/vitest',
		build: 'build',
		test: 'test:run --allowOnly',
	})
}
