# Akh
Javascript Monad and Monad Transformer Collection


### Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

A collection of simple monad and monad transformers that implement the [Fantasy Land's][fl] monad interface.


## Library

### Monad Transformers
* StateT - `akh::trans::state` - State transformer.
* ContT - `akh::trans::cont` - Continuation transformer.
* DContT - `akh::trans::dcont` - Delimited continuation transformer.

### Monads
* State - `akh::monad::state` - Stateful computation.
* Identity - `akh::monad::identity` - Identity computation.
* Cont - `akh::monad::cont` - Continuation computation.
* DCont - `akh::monad::dcont` - Delimited continuation computation.

[fl]: https://github.com/fantasyland/fantasy-land