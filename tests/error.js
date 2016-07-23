"use strict"
const assert = require('chai').assert
const Error = require('../index').error

const l = function (x) { return [false, x] }
const r = function (x) { return [true, x] }

describe('Error', () => {
    it("simple_of", () => {
        const c = Error.of(3)

        assert.deepEqual(
            Error.attemptError(c, null),
            3)
    })

    it("simple_chain", () => {
        const c = Error.of(3)
            .chain(function (x) {
                return Error.of(x * 2)
            })

        assert.deepEqual(
            Error.attemptError(c, null),
            6)
    })

    it('chain_order', () => {
        const c = Error.of(1)
            .chain(function (x) {
                return Error.of(x + 1)
            })
            .chain(function (x) {
                return Error.of(x * 2)
            })

        assert.deepEqual(
            Error.attemptError(c, null),
            4)
    })

    it("chain_fail", () => {
        const c = Error.of(1)
            .chain(function (x) {
                return Error.fail(x + 1)
            })
            .chain(function (x) {
                return Error.of(x * 2)
            })
            .chain(function (x) {
                return Error.of(x + 10)
            })

        assert.deepEqual(
            Error.tryError(c, function (x) { return x }),
            2)
    })

    it("chain_fail_handle", () => {
        const c = Error.of(1)
            .chain(function (x) {
                return Error.fail(x + 1)
            })
            .chain(function (x) {
                return Error.of(x * 2)
            })
            .handle(function (e) {
                return Error.of(1000)
            })
            .chain(function (x) {
                return Error.of(x + 10)
            })

        assert.deepEqual(
            Error.tryError(c, function (x) { return x }),
            1010)
    })



    it("map_right", () => {
        const c = Error.of(3)
            .map(function (x) { return x * 2 })
            .chain(function (x) {
                return Error.of(x / 3)
            })

        assert.deepEqual(
            Error.attemptError(c, null),
            2)
    })

    it("map_left", () => {
        const c = Error.fail(3)
            .map(function (x) { return x * 2 })
            .chain(function (x) {
                return Error.of(x / 3)
            })

        assert.deepEqual(
            Error.tryError(c, function (x) { return x }),
            3)
    })
})
