"use strict";
const assert = require('chai').assert
const State = require('../index').State
const StateT = require('../index').StateT

describe("State", () => {
    it("should be imported", () => {
        const c = State.of(3)
        assert.strictEqual(3, State.eval(c, null))
    })

    it("simple_bind", () => {
        const c = State.of(3).chain(x => State.of(x + 5))

        assert.deepEqual(
            { value: 8, state: 's' },
            State.run(c, 's'))

        assert.deepEqual(
            { value: 8, state: 's' },
            c.run('s'))
    })

})
