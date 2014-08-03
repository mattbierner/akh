---
layout: base
---


<div id='subheader'>
    <div><span>Akh</span> - noun</div>
    
    <ol>
        <li>Large flightless bird found in <a href='https://github.com/fantasyland/fantasy-land'>Fantasy Land</a></li>
        <li>Javascript <a href='https://en.wikibooks.org/wiki/Haskell/Monad_transformers'>monad transformer</a> library. Puts monads in your monads so you can compute while you compute.</li>
    </ol>
</div>


## Monad transformers?
Even in untyped, non-functional language like Javascript, monads are an extremely
useful abstraction. It is fairly trivial to define and use monads like the state,
error, and list monads in Javascript.

But beyond toy examples, real world problems often require functionality from one
or more of these structures. A networked application may require both error handling and IO,
or an algorithm implementation may use state, error handling, and continuation control.
**Monad transformers allow us to compose simple structures in a maintainable and flexible way.**


## What can your Akh do for you?
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Akh includes a [basic set][documentation] of common monad transformers, 
along with monads derived from these transformers. Akh structures implement the
[Fantasy Land][fl] specification. Akh supports both [Node][npm] and [AMD][amd] style packages.

This example shows using the `StateT` transformer on a `List` monad to create
brachable, stateful computations. The example is in [Khepri][khepri], but plain
old JS works fine too.


``` javascript
with
    import 'akh::list' List,
    import 'akh::trans::state' StateT
in {

// Define a new monad using the state transformer on the list monad.
var M = StateT (List);

// Function that run a monad of type `M` and extracts the result
var run = StateT.runStateT \>> List.runList;

// Create a stateful computation
var c = M.of(1)
    // Modify State
    .chain(\x ->
        M.modify \ s -> s + x + 'xyz')
    
    // Branch states
    .concat(
         M.put('new_state').map(\ -> 3),
         M.of 10,
         M.get // get the current state)
     
     // And operate on them
     .map(_ + 'aa');

// Run the computation to get list of state value pairs
run(c, 'initial_state');
}
```

Results from `c`:

``` javascript
[
    {'x': '1aa', 's': 'state1xyz'},
    {'x': '3aa', 's': 'new_state'},
    {'x': '10aa', 's': 'state1xyz'}
    {'x': 'state1xyzaa', 's': 'state1xyz'}
]
```

## What's up Akh?
See [Fantasy Land][fl] for the type specifications and the [Documentation][documentation]
for more comprehensive descriptions and examples.

#### Monad Transformers
* IdentityT - `akh::trans::identity` - Transforms a monad to itself *(Monad, Functor, Applicative Functor)*
* StateT - `akh::trans::state` - Adds state to a computation *(Monad, Monoid, Functor, Applicative Functor)*
* ListT - `akh::trans::list` - Makes a computation operate on lists *(Monad, Monoid, Functor, Applicative Functor)*
* ContT - `akh::trans::cont` - Adds continuation control (Monad, Functor, Applicative Functor)*
* DContT - `akh::trans::dcont` - Adds delimited continuation control  *(Monad, Functor, Applicative Functor)*
* EitherT - `akh::trans::either` - Adds choice to computation *(Monad, Monoid, Functor, Applicative Functor)*
* ErrorT - `akh::trans::error` - Adds Error handling to computation *(Monad, Monoid, Functor, Applicative Functor)*

#### Monads
* Identity - `akh::identity` - Identity computation *(Monad, Functor, Applicative Functor)*
* State - `akh::state` - Stateful computation *(Monad, Functor, Applicative Functor)*
* List - `akh::list` - List computation *(Monad, Monoid, Functor, Applicative Functor)*
* Cont - `akh::cont` - Continuation computation *(Monad, Functor, Applicative Functor)*
* DCont - `akh::dcont` - Delimited continuation computation *(Monad, Functor, Applicative Functor)*
* EitherT - `akh::either` - Either computation *(Monad, Functor, Applicative Functor)*
* ErrorT - `akh::error` - Error computation *(Monad, Functor, Applicative Functor)*

#### Utilities
* Codensity - `akh::trans::codensity` - Reassociates a monad to prevent stack issues *(Monad, Monid, Functor, Applicative Functor)*


## What can you do for your Akh? 
Thanks for asking.

Improvement and additions to Akh are welcome. Please report any [issues][issues]
or send a pull request.



[khepri]: http://khepri-lang.com

[npm]: https://www.npmjs.org/package/akh
[issues]: https://github.com/mattbierner/akh/issues
[documentation]: https://github.com/mattbierner/akh/wiki

[monadtransformers]:https://en.wikibooks.org/wiki/Haskell/Monad_transformers

[fl]: https://github.com/fantasyland/fantasy-land
[amd]: https://github.com/amdjs/amdjs-api/wiki/AMD

