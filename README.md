<div align="center">
    <img src="https://raw.githubusercontent.com/mattbierner/akh/master/documentation/akh.png" alt="akh" />
</div>

<h2 align="center"><b>Akh</b> - <i>noun</i></h2>

<p  align="center">
    1) Large flightless bird found in <a href="https://github.com/fantasyland/fantasy-land">Fantasy Land</a></br>
    2) Javascript <a href="https://en.wikibooks.org/wiki/Haskell/Monad_transformers">monad transformer</a> library
</p>


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
* [akh.MaybeT][maybe] - Maybe transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.ReaderT][reader] - Reader transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.StateT][state] - State transformer. (Monad, Monoid, Functor, Applicative Functor)
* [akh.UniqueT][unique] - Get unique int value (Monad, Monoid, Functor, Applicative Functor)
* [akh.WriterT][reader] - Writer transformer. (Monad, Monoid, Functor, Applicative Functor)

#### Monads
* [akh.Cont][cont] - Continuation computation. (Monad, Functor, Applicative Functor)
* [akh.DCont][dcont] - Delimited continuation computation. (Monad, Functor, Applicative Functor)
* [akh.Either][either] - Either computation. (Monad, Functor, Applicative Functor)
* [akh.Error][error] - Error computation. (Monad, Functor, Applicative Functor)
* [akh.Identity][identity] - Identity computation. (Monad, Functor, Applicative Functor)
* [akh.List][list] - List computation. (Monad, Monoid, Functor, Applicative Functor)
* [akh.Maybe][maybe] - Computation that may produce a value or nothing. (Monad, Monoid, Functor, Applicative Functor)
* [akh.Reader][reader] - Reader monad. (Monad, Monoid, Functor, Applicative Functor)
* [akh.State][state] – Stateful computation. (Monad, Functor, Applicative Functor)
* [akh.Unique][unique] – Get Unique int (Monad, Monoid, Functor, Applicative Functor)
* [akh.Writer][reader] - Writer monad. (Monad, Monoid, Functor, Applicative Functor)


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
    { value: 'porky', state: 'wackyland' }
]

// Let's update the current state using a function
const modifiedState = start.modify(state => state.toUpperCase())

run(modifiedState, 'wackyland') === [
    { value: 'WACKYLAND', state: 'WACKYLAND' }
]

// Note that modify also updated the held value here. We could avoid that
// by instead writing
const modifiedState2 = start
    .chain(currentValue =>
        M.modify(state => state.toUpperCase())
            .map(_ => currentValue))

run(modifiedState2, 'wackyland') === [
    { value: 'porky', state: 'WACKYLAND' }
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
    { value: 'porky', state: 'WACKYLAND' },
    { value: 100, state: 'nuts' },
    { value: 1, state: 'squirrel' },
    { value: 'wackyland', state: 'wackyland' }
]


// We can then operate on all states at the same time.
const doubled = branched.map(x => x + x)

run(doubled, 'wackyland') === [
    { value: 'porkyporky', state: 'WACKYLAND' },
    { value: 200, state: 'nuts' },
    { value: 2, state: 'squirrel' },
    { value: 'wackylandwackyland', state: 'wackyland' }
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
[maybe]: https://github.com/mattbierner/akh-maybe
[reader]: https://github.com/mattbierner/akh-reader
[state]: https://github.com/mattbierner/akh-state
[unique]: https://github.com/mattbierner/akh-unique
[writer]: https://github.com/mattbierner/akh-writer


---

<p align="center">
<i>The Dodo Bird is a Looney Toons character created and owned by Warner Bros.</i>
</p>