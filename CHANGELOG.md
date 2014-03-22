# ChangeLog

## 0.5.3 - March 22, 2014
* Fixed call stack on `EitherT` and `ErrorT`.
* Performance improvements.

## 0.5.2 - March 22, 2014
* Fixed call stack on `StateT`.

## 0.5.1 - March 21, 2014
* Fixed `ContT.lift` and `DContT.lift`.

## 0.5.0 - March 21, 2014
* Temp fix for call stack on `ContT` and `DContT`.
** Wrap other structures for long running computations in `ContT`.
* Added State.modify.
* Added `IdentityT`.
* Added top level generic versions of ops in base that determine type using argument.
* Split out DContT's unique id the logic to its own monad and transformer.

## 0.4.0 - March 20, 2014
* Added `EitherT`.
* Added `ErrorT`
* Added `Either`
* Added `Error`.

## 0.3.0 - March 20, 2014
* Fixed #5 nu-stream not included.
* Added applicative functor to all monads using derived interfaces (thanks [joneshf](https://github.com/joneshf)).

## 0.2.0 - March 19, 2014
* Added AMD files.
* Fixed `Identity` using old import.
* `Identity` as functor.
* `ContT` and `Cont` as functor.
* `DContT` and `DCont` as functor.
* `ListT` and `List` as functor.
* `StateT` and `State` as functor.

## 0.1.0 - March 19, 2014
* Initial release.
