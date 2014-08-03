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


## Monad Transformers?
Even in untyped, non-functional language like Javascript, monads are an extremely
useful abstraction. It is fairly trivial to define and use monads like the state,
error, and list monads in Javascript.

But beyond toy examples, real world problems often require functionality from one
or more of these structures. A networked application may require both error handling and IO,
or an algorithm implementation may use state, error handling, and continuation control.
Monad transformers allow us to compose these simple structures together in a maintainable and flexible way.


## What Can Your Akh Do for You?
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Akh includes a basic set of monad transformers and monads derived from these
transformers. Akh structures follow the [Fantasy Land][fl] specification.

This example shows using the `StateT` transformer on a `List` monad to create
brachable, stateful computations. The example is in [Khepri][khepri] but regular js works fine too.

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

Results:

``` javascript
[
    {'x': '1aa', 's': 'state1xyz'},
    {'x': '3aa', 's': 'new_state'},
    {'x': '10aa', 's': 'state1xyz'}
    {'x': 'state1xyzaa', 's': 'state1xyz'}
]
```


[khepri]: http://khepri-lang.com
[documentation]: https://github.com/mattbierner/akh/wiki
[monadtransformers]:https://en.wikibooks.org/wiki/Haskell/Monad_transformers
[fl]: https://github.com/fantasyland/fantasy-land

