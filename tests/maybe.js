"use strict";
const assert = require('chai').assert
const Maybe = require('../index').Maybe
const MaybeT = require('../index').Maybe

describe("Maybe", () => {
    it("should be imported", () => {
        const c = Maybe.of(3)
        assert.strictEqual(3, Maybe.maybe(c))
    })
})
