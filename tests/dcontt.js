"use strict"
const assert = require('chai').assert
const DContT = require('../index').trans.dcont
const State = require('../index').state

const run = function (c, s, k) {
    return State.evalState(
        DContT.runDContT(
            c,
            k),
        s)
}

const id = function (x) { return x }

const sqr = function (x) { return x * x }

const M = DContT(State)


describe('DContT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.deepEqual(
            run(c, 's', sqr),
            9)
    })


    it("lift", () => {
        const c = M.of(3)
            .chain(function (x) {
                return M.lift(State.modify(function (s) { return s + x * 2 }))
            })
            .chain(function (x) {
                return M.lift(State.get)
            })

        assert.deepEqual(
            run(c, 1, id),
            7)
    })
})
