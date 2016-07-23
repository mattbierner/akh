"use strict"
const assert = require('chai').assert
const Either = require('../index').either

const l = function (x) { return [false, x] }
const r = function (x) { return [true, x] }

describe('Either', () => {
    it("simple_of", () => {
        const c = Either.of(3)

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 3])

        assert.deepEqual(
            Either.runEither(c),
            { right: true, value: 3 })
    })

    it("left", () => {
        const c = Either.left(3)

        assert.deepEqual(
            Either.either(c, l, r),
            [false, 3])

        assert.deepEqual(
            Either.runEither(c),
            { left: true, value: 3 })
    })

    it("simple_chain", () => {
        const c = Either.of(3)
            .chain(function (x) {
                return Either.of(x * 2)
            })

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 6])
    })

    it('chain_order', () => {
        const c = Either.of(1)
            .chain(function (x) {
                return Either.of(x + 1)
            })
            .chain(function (x) {
                return Either.of(x * 2)
            })

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 4])
    })

    it("chain_many", () => {
        let c = Either.of(0)

        for (let i = 0; i < 100000; ++i) {
            c = c.chain(function (x) {
                return Either.of(x + 1)
            })
        }


        assert.deepEqual(
            Either.either(c, l, r),
            [true, 100000])
    })

    it("chain_left", () => {
        const c = Either.of(1)
            .chain(function (x) {
                return Either.left(x + 1)
            })
            .chain(function (x) {
                return Either.of(x * 2)
            })
            .chain(function (x) {
                return Either.of(x + 10)
            })

        assert.deepEqual(
            Either.either(c, l, r),
            [false, 2])
    })


    it("map_right", () => {
        const c = Either.of(3)
            .map(function (x) { return x * 2 })
            .chain(function (x) {
                return Either.of(x / 3)
            })

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 2])
    })

    it("map_left", () => {
        const c = Either.left(3)
            .map(function (x) { return x * 2 })
            .chain(function (x) {
                return Either.of(x / 3)
            })

        assert.deepEqual(
            Either.either(c, l, r),
            [false, 3])
    })


    it("ac", () => {
        const c = Either.of(function (x, y) { return x / y })
            .ac(Either.of(10))
            .ap(Either.of(5))

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 2])
    })

    it("acn", () => {
        const c = Either.of([].concat.bind([]))
            .ac(Either.of(1))
            .ac(Either.of(2))
            .ac(Either.of(3))
            .ac(Either.of(4))
            .ac(Either.of(5))
            .ap(Either.of(6))

        assert.deepEqual(
            Either.either(c, l, r),
            [true, [1, 2, 3, 4, 5, 6]])
    })

    it("ac_no_apply", () => {
        const c = Either.of([].concat.bind([]))
            .ac(Either.of(1))
            .ac(Either.of(2))
            .ac(Either.of(3))
            .ac(Either.of(4))
            .ac(Either.of(5))
            .ac(Either.of(6))

        const result = Either.either(c, l, r)
        assert.deepEqual(
            result[1](7),
            [1, 2, 3, 4, 5, 6, 7])
    })


    it("ac_too_many", () => {
        const c = Either.of(function (x, y) { return x + y })
            .ac(Either.of(1))
            .ac(Either.of(2))
            .ac(Either.of(3))
            .ac(Either.of(4))
            .ac(Either.of(5))
            .ap(Either.of(6))

        assert.deepEqual(
            Either.either(c, l, r),
            [true, 3])
    })
})
