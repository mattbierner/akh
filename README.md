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
const M = StateT(List);

const run = (c, state) => List.runList(StateT.runStateT(c, state));

// Create a stateful computation
const c =
    M.of(1) // simple value
    
        // modify state
        .chain(x =>
            M.modify(s => s + x + 'xyz'))
        
        // Branch states
        .concat(
             M.put('new_state').map(_ => 3),
             M.of(10),
             M.get // get the current state)
         
         // And operate on them
         .map(x => x + 'aa');

// Run the computation to get list of state value pairs
run(c, 'state');
[
    {'x': '1aa', 's': 'state1xyz'},
    {'x': '3aa', 's': 'new_state'},
    {'x': '10aa', 's': 'state1xyz'}
    {'x': 'state1xyzaa', 's': 'state1xyz'}
]
}
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