# ChangeLog

 ## 2.0.1 - November 18, 2015
* Fixed exec state returning value instead of state.
* Made sure all code uses modern Khepri.

 ## 2.0.0 - April 13, 2014
* Split interfaces into own files. `akh::spec::*`.
* Autolifting of state `get` `put` and `modify` in most base types.
* Added `Codensity` monad.
* Removed trampoline.
* Split StateT into two files.
** `akh::trans::state` has the main, stack safe impl which auto wraps in a `Codensity`.
** `akh::trans::statei` has the actual impl, which is stack unsafe but should be used in
  stacks so as not to dup the `Codensity` logic.

 ## 1.1.2 - April 10, 2014
* Performance improvements though recompile with khepri V0.23.0

 ## 1.1.1 - April 7, 2014
* Performance improvements though recompile with khepri V0.21.13.

 ## 1.1.0 - April 3, 2014
* Added `base::liftA` and `base::liftA2` to lift to an applicative.
* Added derived applicative operation `ac` that curries `f` with the argument `a`.

## 1.0.1 - April 3, 2014
* Fixed derived types of `map` and `ap` on monad using functions instead of
  methods.

## 1.0.0 - April 1, 2014
* Removed one extra function call per each chain/concat/map/ap.
* `structures` now expect the method version of binary functions.

## 0.8.0 - March 24, 2014
* Transformers expose their inner type with `inner` since there is no type
  system to recover this information.
* Transforming and Transformer will generated have an additional method `liftInner`
  on the output to lift from the inner Transformer's inner to the outer transformer.
  `liftInner` can be chained to lift multiple levels.
  ```
  var M = StateT (StateT (StateT (StateT Identity))));
  
  // Lift get from inner most state.
   M.liftInner.liftInner(M.inner.inner.inner.get);
   ````

## 0.7.1 - March 24, 2014
* Fixed `Unique` possibly blowing up stack for large computations.

## 0.7.0 - March 24, 2014
* Allow `UniqueT` to be passed a seed value.
* Fixed `IdentityT` `concat`.

## 0.6.0 - March 23, 2014
* Added `IdentityT` to transform a monad to itself.
* Added `Trampoline` monad.
* More work on call stack.

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
