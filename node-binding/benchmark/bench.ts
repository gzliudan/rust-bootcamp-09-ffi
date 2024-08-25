import { Bench } from 'tinybench'

import { plus } from '../index.js'

function add(a: number) {
  return a + 100
}

const b = new Bench()

b.add('Native a + 100', () => {
  plus(10, 100)
})

b.add('JavaScript a + 100', () => {
  add(10)
})

await b.run()

console.table(b.table())
