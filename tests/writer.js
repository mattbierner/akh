"use strict";
const assert = require('chai').assert
const Writer = require('../index').Writer
const WriterT = require('../index').Writer
const List = require('../index').List

describe("Writer", () => {
    it("should be imported", () => {
        const c = Writer.tell(List.of(2))
        assert.deepEqual([2], Writer.run(c, List.mzero).output.run())
    })
})
