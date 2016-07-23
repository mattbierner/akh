"use strict"
const assert = require('chai').assert
const Unique = require('../index').unique

describe('Unique', () => {
    it("simple_of", () => {
        const c = Unique.of(3)

        assert.deepEqual(
            Unique.runUnique(c),
            3)
    })

    it("simple_bind", () => {
        const c = Unique.of(3)
            .chain(function (x) {
                return Unique.of(x + 5)
            })

        assert.deepEqual(
            Unique.runUnique(c),
            8)
    })

    it("getting_uniques", () => {
        const c = Unique.unique
            .chain(function (x) {
                return Unique.unique
                    .map(function (y) {
                        return [x, y]
                    })
            })

        const r = Unique.runUnique(c)

        assert.ok(r[0] !== r[1])
    })
})
