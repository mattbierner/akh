# Akh
Javascript Monad and Monad Transformer Collection


### Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Collection of simple monad and monad transformers that implement [Fantasy Land's][fl] interfaces.


## Library

### Monad Transformers
* StateT - `akh::trans::state` - State transformer. (Monad, Monoid, Functor)
* ListT - `akh::trans::list` - List transformer. (Monad, Monoid, Functor)
* ContT - `akh::trans::cont` - Continuation transformer. (Monad, Functor)
* DContT - `akh::trans::dcont` - Delimited continuation transformer. (Monad, Functor)

### Monads
* Identity - `akh::identity` - Identity computation. (Monad, Functor)
* State - `akh::state` - Stateful computation. (Monad, Functor)
* List - `akh::list` - List computation. (Monad, Monoid, Functor)
* Cont - `akh::cont` - Continuation computation. (Monad, Functor)
* DCont - `akh::dcont` - Delimited continuation computation. (Monad, Functor)


[fl]: https://github.com/fantasyland/fantasy-land