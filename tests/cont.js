"use strict";
const assert = require('chai').assert
const Cont = require('../index').Cont
const ContT = require('../index').ContT
const State = require('../index').State

const sqr = x => x * x

describe("Cont", () => {
    it("should be imported", () => {
        const c = Cont.of(3)
        assert.strictEqual(9, Cont.run(c, sqr))
    })
})


const M = ContT(State)

const run = function(c, k, s) {
    return State.eval(
        ContT.run(
            c,
            function (x) { return State.of(k(x)) }),
        s)
}

describe("ContT", () => {
    it("should be imported", () => {
        const c = M.of(3)
        assert.strictEqual(9, run(c, sqr, null))
    })
})