"use strict"
const assert = require('chai').assert
const StateT = require('../index').trans.state
const Identity = require('../index').identity

const run = function (c) {
    return Identity.runIdentity(
        StateT.evalStateT(
            StateT.evalStateT(
                StateT.evalStateT(
                    StateT.evalStateT(c, 1),
                    2),
                3),
            4))
}

const M = StateT(StateT(StateT(StateT(Identity))))


describe('Lift Inner', () => {
    it("top_level", () => {
        const c = M.get

        assert.deepEqual(
            run(c),
            1)
    })

    it("liftOne", () => {
        const c = M.lift(M.inner.get)

        assert.deepEqual(
            run(c),
            2)
    })

    it("liftInner", () => {
        const c = M.liftInner(M.inner.inner.get)

        assert.deepEqual(
            run(c),
            3)
    })

    it("liftInner2", () => {
        const c = M.liftInner.liftInner(M.inner.inner.inner.get)

        assert.deepEqual(
            run(c),
            4)
    })
})
