// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['src/**/*.{js,mjs,cjs,ts}'],
  ignores: ['dist/**/*'],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
})
