# Akh
Javascript Monad and Monad Transformer Collection


### Overview
<a href="https://github.com/fantasyland/fantasy-land">
    <img src="https://raw.github.com/fantasyland/fantasy-land/master/logo.png" align="right" width="82px" height="82px" alt="Fantasy Land logo" />
</a>

Collection of simple monad and monad transformers that implement [Fantasy Land's][fl] interfaces.

## Library

### Monad Transformers
* IdentityT - `akh::trans::identity` - Transforms a monad to itself. (Monad, Functor, Applicative Functor)
* StateT - `akh::trans::state` - State transformer. (Monad, Monoid, Functor, Applicative Functor)
* ListT - `akh::trans::list` - List transformer. (Monad, Monoid, Functor, Applicative Functor)
* ContT - `akh::trans::cont` - Continuation transformer. (Monad, Functor, Applicative Functor)
* DContT - `akh::trans::dcont` - Delimited continuation transformer. (Monad, Functor, Applicative Functor)
* EitherT - `akh::trans::either` - Either transformer. (Monad, Monoid, Functor, Applicative Functor)
* ErrorT - `akh::trans::error` - Error transformer. (Monad, Monoid, Functor, Applicative Functor)

### Monads
* Identity - `akh::identity` - Identity computation. (Monad, Functor, Applicative Functor)
* State - `akh::state` - Stateful computation. (Monad, Functor, Applicative Functor)
* List - `akh::list` - List computation. (Monad, Monoid, Functor, Applicative Functor)
* Cont - `akh::cont` - Continuation computation. (Monad, Functor, Applicative Functor)
* DCont - `akh::dcont` - Delimited continuation computation. (Monad, Functor, Applicative Functor)
* EitherT - `akh::either` - Either computation. (Monad, Functor, Applicative Functor)
* ErrorT - `akh::error` - Error computation. (Monad, Functor, Applicative Functor)


## Contribute
Improvement and additions to Akh are welcome. Please report any [issues][issues]
or send a pull request.

### Code
Akh is written in Khepri. [Khepri][khepri] is an ECMAScript derived language
focused on functional programming that compiles to Javascript.
Khepri sources are in `lib` directory with node output in `dist_node`
and AMD output in `dist`.

```
# Compile all Khepri files
$ npm run build

# Run tests
$ npm test

# While developing, auto compile changed files
$ ./node_modules/.bin/khepri -w lib -o dist_node --package_manager=node
```


[fl]: https://github.com/fantasyland/fantasy-land
[khepri]: https://github.com/mattbierner/khepri
[issues]: https://github.com/mattbierner/akh/issues