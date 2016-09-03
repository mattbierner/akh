"use strict";
const assert = require('chai').assert
const State = require('../index').State
const StateT = require('../index').StateT

describe("State", () => {
    it("should be imported", () => {
        const c = State.of(3)
        assert.strictEqual(3, State.eval(c, null))
    })
})
