import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import generate from 'markdown-it-testgen'

import sub from '../index.mjs'

// TODO: these are parsed incorrectly:
//
// ~~~foo~~~
// ~~~foo~ bar~~

describe('markdown-it-sub', function () {
  const md = markdownit().use(sub)

  generate(fileURLToPath(new URL('fixtures/sub.txt', import.meta.url)), md)
})
