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



## Contributing


### Code
Akh is written in Khepri. [Khepri][khepri] is an ECMAScript language
focused on functional programming that compiles to Javascript.
Khepri sources are in `lib` directory without node output packages in `dist_node`
and AMD package output in `dist`.

```
# Compile all Khepri files
$ npm run build

# Run tests
$ npm test
```


[fl]: https://github.com/fantasyland/fantasy-land
[khepri]: https://github.com/mattbierner/khepri