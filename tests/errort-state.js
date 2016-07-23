"use strict"
const assert = require('chai').assert
const State = require('../index').state
const ErrorT = require('../index').trans.error

const runState = function (c, s) {
    return State.runState(
        ErrorT.runErrorT(c, function (x) {
            return State.of(x)
        },
            function (x) {
                return State.of(null)
            }),
        s)
}

const M = ErrorT(State)


describe('ErrorT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.deepEqual(
            runState(c, 's'),
            { 'x': 3, 's': 's' })
    })

    it("simple_chain", () => {
        const c = M.of(1)
            .chain(function (x) {
                return M.of(x + 1)
            })

        assert.deepEqual(
            runState(c, 3),
            { 'x': 2, 's': 3 })
    })

    /*
    
    it("many_chain", () => {
        const c = M.of(0)
        
        for (const i = 0 i < 10000 ++i) {
            c = c.chain(function(x) {
                return M.of(x + 1)
            })
        }
    
        assert.deepEqual(
            runState(c, 3),
            {'x': 10000, 's': 3})
    })
    
    
    it("lift", () => {
        const c = M.lift(State.get)
            .chain(function(x) {
                return M.of(x + 1)
            })
        
        assert.deepEqual(
            runState(c, 3),
            {'x': 4, 's': 3})
    })
    */
})