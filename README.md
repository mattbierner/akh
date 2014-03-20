# Akh
Javascript Monad and Monad Transformer Collection


### Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Collection of simple monad and monad transformers that implement [Fantasy Land's][fl] interfaces.


## Library

### Monad Transformers
* StateT - `akh::trans::state` - State transformer. (Monad, Monoid)
* ListT - `akh::trans::list` - List transformer. (Monad, Monoid)
* ContT - `akh::trans::cont` - Continuation transformer. (Monad)
* DContT - `akh::trans::dcont` - Delimited continuation transformer. (Monad)

### Monads
* Identity - `akh::identity` - Identity computation. (Monad)
* State - `akh::state` - Stateful computation. (Monad)
* List - `akh::list` - List computation. (Monad, Monoid)
* Cont - `akh::cont` - Continuation computation. (Monad)
* DCont - `akh::dcont` - Delimited continuation computation. (Monad)


[fl]: https://github.com/fantasyland/fantasy-land