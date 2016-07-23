"use strict"
const assert = require('chai').assert
const StateT = require('../index').trans.state
const List = require('../index').list

const runState = function (c, s) {
    return List.runList(StateT.runStateT(c, s))
}

const evalState = function (c, s) {
    return List.runList(StateT.evalStateT(c, s))
}

const execState = function (c, s) {
    return List.runList(StateT.execStateT(c, s))
}

const M = StateT(List)


describe('StateT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.deepEqual(
            runState(c, 's'),
            [{ 'x': 3, 's': 's' }])
    })

    it("simple_chain", () => {
        const c = M.get
            .chain(function (x) {
                return M.of(x + 1)
            })

        assert.deepEqual(
            runState(c, 3),
            [{ 'x': 4, 's': 3 }])
    })


    it("concat", () => {
        const c = M.of(3)
            .concat(M.of(5))
            .concat(M.put('x').chain(function (x) { return M.of(10) }))
            .concat(M.of(4))

        assert.deepEqual(
            runState(c, 's'),
            [
                { x: 3, s: 's' },
                { x: 5, s: 's' },
                { x: 10, s: 'x' },
                { x: 4, s: 's' }])
    })


    it("concat", () => {
        const c = M.of(3)
            .concat(M.of(5))
            .concat(M.put('x').chain(function (x) { return M.of(10) }))
            .concat(M.of(4))
            .map(function (x) { return x * 10 })

        assert.deepEqual(
            runState(c, 's'),
            [
                { x: 30, s: 's' },
                { x: 50, s: 's' },
                { x: 100, s: 'x' },
                { x: 40, s: 's' }])
    })


    it("many_chain", () => {
        let c = M.of(0)

        for (let i = 0; i < 100000; ++i) {
            c = c.map(function (x) {
                return x + 1
            })
        }

        assert.deepEqual(
            runState(c, 's'),
            [{ 'x': 100000, 's': 's' }])
    })

    it("many_chain_inner", () => {
        const f = function (x) {
            if (x > 10000)
                return M.of(x)
            return M.of(x + 1).chain(f)
        }

        assert.deepEqual(
            runState(f(0), 0),
            [{ 'x': 10001, 's': 0 }])
    })
})
