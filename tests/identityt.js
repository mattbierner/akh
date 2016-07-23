"use strict"
const assert = require('chai').assert
const IdentityT = require('../index').trans.identity
const List = require('../index').list

const M = IdentityT(List)

const run = function (m) {
    return List.runList(
        IdentityT.runIdentityT(m))
}


describe('IdentityT', () => {
    it("simple_of", () => {
        const c = M.of(3)

        assert.deepEqual(
            run(c),
            [3])
    })

    it("of_array", () => {
        const c = M.of([3])

        assert.deepEqual(
            run(c),
            [[3]])
    })

    it("chain_simple", () => {
        const c = M.of(3)
            .chain(function (x) {
                return M.of(x * 2)
            })
            .chain(function (x) {
                return M.of(x + 1)
            })

        assert.deepEqual(
            run(c),
            [7])
    })


    it("chain_flatten", () => {
        const c = M.of(3).chain(function (x) {
            return M.of([x, x * 2])
        })

        assert.deepEqual(
            run(c),
            [3, 6])
    })


    it('chain_order', () => {
        const c = M.of(1)
            .chain(function (x) {
                return M.of([x, x + 1])
            })
            .chain(function (x) {
                return M.of([x, x * 2])
            })

        assert.deepEqual(
            run(c),
            [1, 2, 2, 4])
    })

    it('chain_empty', () => {
        const c = M.of(1)
            .chain(function (x) {
                return M.of([])
            })
            .chain(function (x) {
                return M.of([x, x * 2])
            })

        assert.deepEqual(
            run(c),
            [])
    })

    it("chain_list", () => {
        const c = M.of(1)
            .chain(function (x) {
                return M.of([[x], [x * 2]])
            })
            .chain(function (x) {
                return M.of([x.concat(x[0] + 1)])
            })

        assert.deepEqual(
            run(c),
            [[1, 2], [2, 3]])
    })


    it("list_concat", () => {
        const c = M.zero
            .concat(M.of(1))
            .concat(M.of(2))
            .concat(M.of(3))

        assert.deepEqual(
            run(c),
            [1, 2, 3])
    })


    it("map", () => {
        const c = M.zero
            .concat(M.of(1))
            .concat(M.of(2))
            .map(function (x) { return x * x })
            .concat(M.of(3))

        assert.deepEqual(
            run(c),
            [1, 4, 3])
    })
})