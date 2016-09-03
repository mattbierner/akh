"use strict";
const assert = require('chai').assert
const Reader = require('../index').Reader
const ReaderT = require('../index').Reader

describe("Reader", () => {
    it("should be imported", () => {
        const c = Reader.asks(x => x.x)
        assert.strictEqual(2, Reader.run(c, { x: 2 }))
    })
})
