"use strict"
const assert = require('chai').assert
const List = require('../index').list
const base = require('../index').base

describe('List', () => {
    it("simple_of", () => {
        const c = List.of(3)

        assert.deepEqual(
            List.runList(c),
            [3])
    })

    it("of_array", () => {
        const c = List.of([3])

        assert.deepEqual(
            List.runList(c),
            [[3]])
    })

    it("chain_simple", () => {
        const c = List.of(3)
            .chain(function (x) {
                return List.of(x * 2)
            })
            .chain(function (x) {
                return List.of(x + 1)
            })

        assert.deepEqual(
            List.runList(c),
            [7])
    })


    it("chain_flatten", () => {
        const c = List.of(3).chain(function (x) {
            return List.of([x, x * 2])
        })

        assert.deepEqual(
            List.runList(c),
            [3, 6])
    })


    it('chain_order', () => {
        const c = List.of(1)
            .chain(function (x) {
                return List.of([x, x + 1])
            })
            .chain(function (x) {
                return List.of([x, x * 2])
            })

        assert.deepEqual(
            List.runList(c),
            [1, 2, 2, 4])
    })

    it('chain_empty', () => {
        const c = List.of(1)
            .chain(function (x) {
                return List.of([])
            })
            .chain(function (x) {
                return List.of([x, x * 2])
            })

        assert.deepEqual(
            List.runList(c),
            [])
    })

    it("chain_list", () => {
        const c = List.of(1)
            .chain(function (x) {
                return List.of([[x], [x * 2]])
            })
            .chain(function (x) {
                return List.of([x.concat(x[0] + 1)])
            })

        assert.deepEqual(
            List.runList(c),
            [[1, 2], [2, 3]])
    })


    it("list_concat", () => {
        const c = List.zero
            .concat(List.of(1))
            .concat(List.of(2))
            .concat(List.of(3))

        assert.deepEqual(
            List.runList(c),
            [1, 2, 3])
    })


    it("map", () => {
        const c = List.zero
            .concat(List.of(1))
            .concat(List.of(2))
            .map(function (x) { return x * x })
            .concat(List.of(3))

        assert.deepEqual(
            List.runList(c),
            [1, 4, 3])
    })


    it("ap_one", () => {
        const c = List.of(function (x) { return x * 2 })
            .ap(List.zero
                .concat(List.of(1))
                .concat(List.of(2))
                .concat(List.of(3)))

        assert.deepEqual(
            List.runList(c),
            [2, 4, 6])
    })

    it("ap_many", () => {
        const c = List.of(function (x) { return x * 2 })
            .concat(List.of(function (x) { return x + 10 }))
            .concat(List.of(function (x) { return x * x }))

            .ap(List.zero
                .concat(List.of(1))
                .concat(List.of(2))
                .concat(List.of(3)))

        assert.deepEqual(
            List.runList(c),
            [2, 4, 6, 11, 12, 13, 1, 4, 9])
    })


    it("ac", () => {
        const c = List.of(function (x, y) { return x * y })
            .ac(List.zero
                .concat(List.of(1))
                .concat(List.of(2)))
            .ap(List.zero
                .concat(List.of(3))
                .concat(List.of(4)))

        assert.deepEqual(
            List.runList(c),
            [3, 4, 6, 8])
    })


})