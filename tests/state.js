"use strict"
const assert = require('chai').assert
const State = require('../index').state

describe('State', () => {
    it("simple_of", () => {
        const c = State.of(3)

        assert.deepEqual(
            State.evalState(c, 's'),
            3)

        assert.deepEqual(
            State.execState(c, 's'),
            's')
    })

    it("simple_bind", () => {
        const c = State.of(3).chain(function (x) {
            return State.of(x + 5)
        })

        assert.deepEqual(
            State.runState(c, 's'),
            { 'x': 8, 's': 's' })
    })

    it("chain_order", () => {
        const c = State.of(3)
            .chain(function (x) {
                return State.of(x + 5)
            })
            .chain(function (x) {
                return State.of(x / 2)
            })

        assert.deepEqual(
            State.runState(c, 's'),
            { 'x': 4, 's': 's' })
    })

    it("get", () => {
        const c = State.of(3)
            .chain(function (x) {
                return State.get
            })
            .chain(function (x) {
                return State.of(x + 'abc')
            })

        assert.deepEqual(
            State.evalState(c, 's'),
            'sabc')
    })

    it("put", () => {
        const c = State.of(3)
            .chain(function (x) {
                return State.put(x)
            })

        assert.deepEqual(
            State.execState(c, 's'),
            3)
    })

    it("modify", () => {
        const c = State.of(3)
            .chain(function (x) {
                return State.modify(function (y) { return x * y })
            })

        assert.deepEqual(
            State.execState(c, 4),
            12)
    })

    it("many_chain", () => {
        let c = State.of(0)

        for (let i = 0; i < 100000; ++i) {
            c = c.map(function (x) {
                return x + 1
            })
        }

        assert.deepEqual(
            State.runState(c, 's'),
            { 'x': 100000, 's': 's' })
    })

    it("many_chain_inner", () => {
        const f = function (x) {
            if (x > 10000)
                return State.of(x)
            return State.of(x + 1).chain(f)
        }

        assert.deepEqual(
            State.runState(f(0), 0),
            { 'x': 10001, 's': 0 })
    })

})