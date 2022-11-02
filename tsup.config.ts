import isCI from 'is-ci'
import { defineConfig, type Options } from 'tsup'

const entry = 'src/index.ts'

const sharedConfig = defineConfig({
  splitting: false,
  sourcemap: true,
  format: ['esm', 'cjs'],
  treeshake: true,
  minify: isCI,
  bundle: true
})

const mainConfig = defineConfig({
  ...sharedConfig,
  entry: [entry],
  dts: false
}) as Options

const dtsConfig = defineConfig({
  ...sharedConfig,
  entry: [entry],
  dts: {
    entry,
    only: true
  }
}) as Options

export default defineConfig([mainConfig, dtsConfig])
