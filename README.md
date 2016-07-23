# Akh
Javascript Monad and Monad Transformer Collection


## Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Collection of simple monad and monad transformers that implement [Fantasy Land's][fl] interfaces.

### Links
* [Documentation][documentation] - Documentation of general interfaces and specific
  types.


### Quick Example

```js
const List = require('akh').list;
const StateT = require('akh').trans.state;
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
const modifiedState = start.modify(state => state.toUpperCase());

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
const doubled = branched.map(x => x + x);

run(doubled, 'wackyland') === [
    { x: 'porkyporky', s: 'WACKYLAND' },
    { x: 200, s: 'nuts' },
    { x: 2, s: 'squirrel' },
    { x: 'wackylandwackyland', s: 'wackyland' }
]
```


## Install

### Node
Node files live in `dist_node`

```sh
$ npm install akh
```


### With AMD
Node files live in `dist`

```js
requirejs.config({
    paths: {
        'akh': './dist'
    }
});

require(['akh/list'], function(List) {
    ...
});
```

### Included Types

#### Monad Transformers
* IdentityT - `akh::trans::identity` - Transforms a monad to itself. (Monad, Functor, Applicative Functor)
* StateT - `akh::trans::state` - State transformer. (Monad, Monoid, Functor, Applicative Functor)
* ListT - `akh::trans::list` - List transformer. (Monad, Monoid, Functor, Applicative Functor)
* ContT - `akh::trans::cont` - Continuation transformer. (Monad, Functor, Applicative Functor)
* DContT - `akh::trans::dcont` - Delimited continuation transformer. (Monad, Functor, Applicative Functor)
* EitherT - `akh::trans::either` - Either transformer. (Monad, Monoid, Functor, Applicative Functor)
* ErrorT - `akh::trans::error` - Error transformer. (Monad, Monoid, Functor, Applicative Functor)
* UniqueT - `akh::unique` Add unique int to monad (Monad, Monoid, Functor, Applicative Functor)

#### Monads
* Identity - `akh::identity` - Identity computation. (Monad, Functor, Applicative Functor)
* State - `akh::state` - Stateful computation. (Monad, Functor, Applicative Functor)
* List - `akh::list` - List computation. (Monad, Monoid, Functor, Applicative Functor)
* Cont - `akh::cont` - Continuation computation. (Monad, Functor, Applicative Functor)
* DCont - `akh::dcont` - Delimited continuation computation. (Monad, Functor, Applicative Functor)
* EitherT - `akh::either` - Either computation. (Monad, Functor, Applicative Functor)
* ErrorT - `akh::error` - Error computation. (Monad, Functor, Applicative Functor)
* Unique - `akh::unique` Get Unique int (Monad, Monoid, Functor, Applicative Functor)




## Contribute
Improvement and additions to Akh are welcome. Please report any [issues][issues]
or send a pull request.

### Code
Akh is written in Khepri. [Khepri][khepri] is an ECMAScript derived language
focused on functional programming that compiles to Javascript.
Khepri sources are in `lib` directory with node output in `dist_node`
and AMD output in `dist`.

```sh
# install khepri
$ npm install -g khepri

# Compile all Khepri files
$ npm run build

# Run tests
$ npm test

# While developing, auto compile changed files
$ khepri -w lib -o dist_node --package_manager=node
```


[fl]: https://github.com/fantasyland/fantasy-land
[khepri]: https://github.com/mattbierner/khepri
[issues]: https://github.com/mattbierner/akh/issues
[documentation]: https://github.com/mattbierner/akh/wiki
