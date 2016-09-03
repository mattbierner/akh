<div align="center">
    <img src="https://raw.githubusercontent.com/mattbierner/akh/v3/documentation/akh.png" alt="akh" />
</div>

<h2><b>Akh</b> - noun</h2>

<ol>
    <li>Large flightless bird found in <a href="https://github.com/fantasyland/fantasy-land">Fantasy Land</a></li>
    <li>Javascript <a href="https://en.wikibooks.org/wiki/Haskell/Monad_transformers">monad transformer</a> library.</li>
</ol>


# Akh
Javascript Monad and Monad Transformer Collection



## Overview
Akh is a collection of monad and monad transformers that implement [Fantasy Land's][fl] interfaces. It is inspired by [Haskell's MTL](https://hackage.haskell.org/package/mtl).

<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>


### Usage
Akh can either be used as a single library, or you can pick up individual types from split out libraries. See each library for more documentation on that type.

All functions from [akh.core][core] are top level exports.

#### Monad Transformers
* [akh.ContT][cont] - Continuation transformer. (Monad, Functor, Applicative Functor)
* [akh.DContT][dcont] - Delimited continuation transformer. (Monad, Functor, Applicative Functor)
* [akh.EitherT][either] - Either transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.ErrorT][error] - Error transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.IdentityT][identity] - Transforms a monad to itself. (Monad, Functor, Applicative Functor)
* [akh.ListT][list] - List transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.StateT][state] - State transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.UniqueT][unique] - Get unique int value (Monad, Monoid, Functor, Applicative Functor)

#### Monads
* [akh.Cont][cont] - Continuation computation. (Monad, Functor, Applicative Functor)
* [akh.DCont][dcont] - Delimited continuation computation. (Monad, Functor, Applicative Functor)
* [akh.Either][either] - Either computation. (Monad, Functor, Applicative Functor)
* [akh.Error][error] - Error computation. (Monad, Functor, Applicative Functor)
* [akh.Identity][identity] - Identity computation. (Monad, Functor, Applicative Functor)
* [akh.List][list] - List computation. (Monad, Monoid, Functor, Applicative Functor)
* [akh.State][state] – Stateful computation. (Monad, Functor, Applicative Functor)
* [akh.Unique][unique] – Get Unique int (Monad, Monoid, Functor, Applicative Functor)


### Quick Example

```js
const List = require('akh').List
const StateT = require('akh').StateT

// Define a new monad using the state transformer on the list monad.
const M = StateT(List)

// Define a way to pass values through `M`
const run = (c, state) => List.runList(StateT.runStateT(c, state))


// Create a simple stateful computation with an initial value
const start = M.of('porky')

// Run the stateful computation to get a list of
// value, state pairs
run(start, 'wackyland') === [
    { x: 'porky', s: 'wackyland' }
]

// Let's update the current state using a function
const modifiedState = start.modify(state => state.toUpperCase())

run(modifiedState, 'wackyland') === [
    { x: 'WACKYLAND', s: 'WACKYLAND' }
]

// Note that modify also updated the held value here. We could avoid that
// by instead writing
const modifiedState2 = start
    .chain(currentValue =>
        M.modify(state => state.toUpperCase())
            .map(_ => currentValue))

run(modifiedState2, 'wackyland') === [
    { x: 'porky', s: 'WACKYLAND' }
]

// Now let's start using the list monad and branch the state.
const branched = modifiedState2
    .concat(
        M.put('nuts').map(_ => 100)  // `put` sets the current state
    )
    .concat(
        M.put('squirrel').map(_ => 1)
    )
    .concat(
        M.get // gets the state
    )

run(branched, 'wackyland') === [
    { x: 'porky', s: 'WACKYLAND' },
    { x: 100, s: 'nuts' },
    { x: 1, s: 'squirrel' },
    { x: 'wackyland', s: 'wackyland' }
]


// We can then operate on all states at the same time.
const doubled = branched.map(x => x + x)

run(doubled, 'wackyland') === [
    { x: 'porkyporky', s: 'WACKYLAND' },
    { x: 200, s: 'nuts' },
    { x: 2, s: 'squirrel' },
    { x: 'wackylandwackyland', s: 'wackyland' }
]
```




## Contribute
Improvement and additions to Akh are welcome. Please report any [issues][issues]
or send a pull request.



[fl]: https://github.com/fantasyland/fantasy-land
[issues]: https://github.com/mattbierner/akh/issues
[documentation]: https://github.com/mattbierner/akh/wiki

[core]: https://github.com/mattbierner/akh-core

[cont]: https://github.com/mattbierner/akh-cont
[dcont]: https://github.com/mattbierner/akh-dcont
[either]: https://github.com/mattbierner/akh-either
[error]: https://github.com/mattbierner/akh-error
[identity]: https://github.com/mattbierner/akh-identity
[list]: https://github.com/mattbierner/akh-list
[state]: https://github.com/mattbierner/akh-state
[unique]: https://github.com/mattbierner/akh-unique

---