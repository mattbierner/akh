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


## Why Monad Transformers?
Even in untyped, non-functional language like Javascript, monads are an extremely
useful abstraction. It is fairly trivial to define and use monads like the state,
error, and list monads in Javascript.

But beyond toy examples, real world problems often require functionality from one
or more of these structures. A networked application may require both error handling and IO,
or an algorithm implementation may use state, error handling, and continuation control.
Monad transformers allow us to compose these simple structures together in a maintainable and flexible way.




[documentation]: https://github.com/mattbierner/akh/wiki
[monadtransformers]:https://en.wikibooks.org/wiki/Haskell/Monad_transformers
[fl]: https://github.com/fantasyland/fantasy-land

