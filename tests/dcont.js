"use strict"
const assert = require('chai').assert
const DCont = require('../index').dcont
const base = require('../index').base

const sqr = function (x) { return x * x }

describe('DCont', () => {
    it("simple_of", () => {
        const c = DCont.of(3)

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            9)
    })

    it("simple_bind", () => {
        const c = DCont.of(3).chain(function (x) {
            return DCont.of(x + 5)
        })

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            64)
    })

    it("chain", () => {
        const c = DCont.of(3)
            .chain(function (x) {
                return DCont.of(x + 5)
            })
            .chain(function (x) {
                return DCont.of(x / 2)
            })

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            16)
    })

    it("many_chain", () => {
        let c = DCont.of(0)

        for (let i = 0; i < 10000; ++i) {
            c = c.chain(function (x) {
                return DCont.of(x + 1)
            })
        }

        try {
            DCont.runDCont(c, sqr)
        } catch (e) {
            console.log('x', e)
        }

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            10000 * 10000)
    })

    it("many_inner_chain", () => {
        const f = function (x) {
            if (x > 10000) return DCont.of(x)
            return DCont.of(x + 1).chain(f)
        }

        assert.deepEqual(
            DCont.runDCont(f(0), sqr),
            10001 * 10001)
    })


    it("single_shift_reset", () => {
        const c = DCont
            .reset(function (p) {
                return DCont
                    .shift(p, function (k) {
                        return k(k(DCont.of(5)))
                    })
                    .chain(function (x) {
                        return DCont.of(x + 1)
                    })
            })
            .chain(function (x) {
                return DCont.of(x * 2)
            })

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            14 * 14)
    })

    it("multi_shift_abort", () => {
        const c = DCont
            .reset(function (p) {
                return DCont
                    .reset(function (p2) {
                        return DCont
                            .shift(p, function (k) {
                                return DCont.of(5)
                            })
                            .chain(function (x) { return DCont.of(1000) })
                    })
                    .chain(function (x) {
                        return DCont.of(x + 1)
                    })
            })
            .chain(function (x) {
                return DCont.of(x * 2)
            })

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            10 * 10)
    })

    it("multi_shift_in_reset", () => {
        const add = function (x, y) { return x + y }
        const enumeration = base.liftM2.bind(null, function (x, y) { return [x, y] })

        const c = DCont.reset(function (p) {
            return base.liftM2(add,
                DCont.shift(p, function (k) {
                    return enumeration(k(DCont.of(1)), k(DCont.of(2)))
                }),
                DCont.shift(p, function (k) {
                    return enumeration(k(DCont.of(10)), k(DCont.of(20)))
                }))
        })

        assert.deepEqual(
            DCont.runDCont(c, function (x) { return x }),
            [[11, 21], [12, 22]])
    })



    it("fmap", () => {
        const c = DCont.of(3)
            .map(function (x) { return x * x })
            .chain(function (x) {
                return DCont.of(x + 1)
            })

        assert.deepEqual(
            DCont.runDCont(c, sqr),
            10 * 10)
    })

})