"use strict";
const assert = require('chai').assert
const Cont = require('../index').cont

const sqr = function (x) { return x * x }

describe("Cont", () => {
    it("simple of", () => {
        const c = Cont.of(3)

        assert.deepEqual(
            Cont.runCont(c, sqr),
            9)
    })

    it("simple chain", () => {
        const c = Cont.of(3).chain(function (x) {
            return Cont.of(x + 5)
        })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            64)
    })

    it("chain", () => {
        const c = Cont.of(3)
            .chain(function (x) {
                return Cont.of(x + 5)
            })
            .chain(function (x) {
                return Cont.of(x / 2)
            })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            16)
    })

    it("many chain", () => {
        let c = Cont.of(0)

        for (let i = 0;  i < 10000;  ++i) {
            c = c.chain(function (x) {
                return Cont.of(x + 1)
            })
        }

        assert.deepEqual(
            Cont.runCont(c, sqr),
            10000 * 10000)
    })

    it("many inner chain", () => {
        const f = function (x) {
            if (x > 10000)
                return Cont.of(x)
            return Cont.of(x + 1).chain(f)
        }

        assert.deepEqual(
            Cont.runCont(f(0), sqr),
            10001 * 10001)
    })

    it("simple callcc", () => {
        const c = Cont.of(3)
            .callcc(function (k) {
                return k(4)
            })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            16)
    })

    it("callcc breaks", () => {
        const c = Cont.of(3)
            .callcc(function (k) {
                return k(4)
                    .chain(function () { return Cont.of(1) })
            })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            16)
    })

    it("callcc chain", () => {
        const c = Cont.of(3)
            .callcc(function (k) {
                return k(5)
            })
            .chain(function (x) {
                return Cont.of(x + 1)
            })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            36)
    })


    it("fmap", () => {
        const c = Cont.of(3)
            .map(function (x) {
                return x * x
            })
            .chain(function (x) {
                return Cont.of(x + 1)
            })

        assert.deepEqual(
            Cont.runCont(c, sqr),
            10 * 10)
    })
}) 