# Akh
Javascript Monad and Monad Transformer Collection


### Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Collection of simple monad and monad transformers that implement the [Fantasy Land's][fl] monad interface.


## Library

### Monad Transformers
* StateT - `akh::trans::state` - State transformer.
* ListT - `akh::trans::list` - List transformer.
* ContT - `akh::trans::cont` - Continuation transformer.
* DContT - `akh::trans::dcont` - Delimited continuation transformer.

### Monads
* State - `akh::state` - Stateful computation.
* Identity - `akh::identity` - Identity computation.
* List - `akh::list` - List computation.
* Cont - `akh::cont` - Continuation computation.
* DCont - `akh::dcont` - Delimited continuation computation.


[fl]: https://github.com/fantasyland/fantasy-land