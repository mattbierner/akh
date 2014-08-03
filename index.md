---
layout: base
---


<div id='subheader'>
    <div><span>Akh</span> - noun</div>
    
    <ol>
        <li>Large flightless bird found in <a href='https://github.com/fantasyland/fantasy-land'>Fantasy Land</a></li>
        <li>Javascript <a> href='https://en.wikibooks.org/wiki/Haskell/Monad_transformers'>monad transformer</a> library. Puts monads in your monads so you can compute while you compute.</li>
    </ol>
</div>

## Knowledge, Pure Foundation

### This is the empty stream

``` javascript
nu.NIL
```

### `cons` builds up a stream

Stream can be built by consing elements onto the front of an existing stream

``` javascript
nu.cons(1, nu.NIL);
```

This is a stream with 3 elements

``` javascript
var easy = nu.cons(1,
    nu.cons(2,
        nu.cons(3,
            nu.NIL)))
```

Streams may contain any element type, including objects, functions, falsy values, and other streams.

``` javascript
nu.cons(
    {x: 3},
    nu.cons(
        null,
        nu.cons(
            function(x) {},
            nu.cons(
                nu.cons(1, nu.NIL),
                nu.NIL))))
```

### `first` reads the head of a stream
Streams do not provide random access.

``` javascript
nu.first(easy) // 1
```

### `rest` removes the head of a stream
Returning a new stream.


```
nu.first(nu.rest(easy)) // 2
nu.first(nu.rest(nu.rest(easy))) // 3
```

### `isEmpty` tests if a stream is empty

```
nu.isEmpty(easy) // false
nu.isEmpty(
    nu.rest(
        nu.rest(
            nu.rest(easy)))) // true
```


### Nu streams are persistent
Stream operations do not alter the original

``` javascript
var zeroIndexed = nu.cons(0, easy)

nu.first(easy) // 1
nu.first(zeroIndexed) // 0
```


## Proving Through the Manifestation

### `from` creates a stream from an array

``` javascript
var abc = nu.from(['a', 'b', 'c']);
```

Or any array-like object, such as objects or strings.

``` javascript
var abc = nu.from('abc');
```

### `toArray` converts a stream an array

``` javascript
nu.toArray(abc) // ['a', 'b', 'c']
```

### `append` joins streams together

``` javascript
var easyThings = nu.append(
    abc,
    nu.from(['do', 're', 'mi']),
    easy);

nu.first(easyThings) // a
nu.first(nu.rest(
    nu.rest(nu.rest(easyThings)))) // 'do'
```

## Nu Function in Conjunction

### `stream` defines a raw stream
It takes a first element, and a function (a thunk) that returns the rest of the stream.


``` javascript
var justOne = nu.stream(
    1,
    function() { return nu.NIL; })
```

### Streams may be infinite
The function passed to `stream` is only called when needed

``` javascript
var allOnes = nu.stream(
    1,
    function() { return allOnes; });

nu.first(allOnes) // 1
nu.first(nu.rest(allOnes)) // 1
nu.first(nu.rest(nu.rest(nu.rest(allOnes)))) // 1

var ht = allOnes;
for (var i = 0; i < 100000; ++i)
    ht = nu.rest(ht)
nu.first(ht) // 1
```

### Closures can capture state

``` javascript
var count = function(x) {
    return nu.stream(
        x,
        function() { return count(x + 1); });
};

var counter = count(0)

nu.first(counter) // 0
nu.first(nu.rest(counter)) // 1
nu.first(nu.rest(nu.rest(counter))) // 2
nu.first(nu.rest(nu.rest(nu.rest(counter)))) // 3
nu.first(nu.rest(nu.rest(nu.rest(nu.rest(counter))))) // 4
```

### A Fibonacci number stream

``` javascript
var fib = function(n1, n2) {
    return function() { // returns the rest of the stream
        return nu.stream(n1, fib(n2, n1 + n2));
    };
};

var fibStream = nu.stream(0, fib(1, 1));

nu.first(fibStream) // 0
nu.first(nu.rest(fibStream)) // 1
nu.first(nu.rest(nu.rest(fibStream))) // 1
nu.first(nu.rest(nu.rest(nu.rest(fibStream)))) // 3
nu.first(nu.rest(nu.rest(nu.rest(nu.rest(fibStream))))) // 5
```

### But some operations don't support infinite streams
You can't convert an infinite stream to an array.

``` javascript
nu.toArray(fibStream) // STALL
```


## Making Use of the Knowledge That We Already Had

### `map` rewrites each element of a stream

``` javascript
var squares = nu.map(
    function(x) { return x * x},
    stream.from([1, 2, 3]))

nu.toArray(squares) // [1, 4, 9]
```

Transforms like `map` are lazy, return in constant time, and work on infinite streams

``` javascript
var fibSquares = nu.map(
    function(x) { return x * x},
    fibStream);

nu.first(fibSquares) // 0
nu.first(nu.rest(fibSquares)) // 1
nu.first(nu.rest(nu.rest(nu.rest(nu.rest(fibSquares))))) // 25
```

### Operation argument order encourages binding

``` javascript
var sqr = nu.map.bind(null,
    function(x) { return x * x});

var squares = sqr(nu.from([1, 2, 3])))
nu.toArray(squares) // [1, 4, 9]
```

### `filter` selects elements from a stream

``` javascript
var odds = nu.filter(
    function(x) { return x % 2; },
    nu.from([1, 2, 3, 4, 5, 6]));

nu.toArray(odds) // [1, 3, 5]
```

### `zip` combines two streams into a stream of pairs
Taking as many elements as the shorter of the two streams contains.

``` javascript
var z = nu.zip(
    nu.from('abc'),
    nu.from([1, 2, 3, 4, 5, 6]));

nu.toArray(z) // [['a', 1], ['b', 2], ['c', 3]];
```

### `zipWith` is a generic `zip`
It combines elements with a custom binary function.

``` javascript
var z = nu.zipWith(
    function(x, y) { return x + y },
    nu.from('abc'),
    nu.from([1, 2, 3, 4, 5, 6]));

nu.toArray(z) // ['a1', 'b2', 'c3'];
```


## Just Be Real

### `forEach` iterates over a stream

``` javascript
nu.forEach(
    function(x) {
        console.log(x);
    },
    nu.from([1, 2, 3]));
```

But `forEach` stalls on infinite streams

``` javascript
nu.forEach(console.log, fibStream) // STALL
```

### `foldl` maps and accumulates over a stream

``` javascript
nu.foldl(
    function(accumulated, current) {
        return accumulated + current;
       },
    0, // initial value
    stream.from([1, 2, 3]))
// 6
```

### `foldl` folds left-to-right

``` javascript
nu.foldl(
    function(a, c) { return [a, c]; },
    0,
    stream.from([1, 2, 3]))
// [[[0, 1] 2], 3]
```

### `foldr` folds  right-to-left

``` javascript
nu.foldr(
    function(a, c) { return [a, c]; },
    0,
    stream.from([1, 2, 3]))
// [0, [1, [2, 3]]]
```


## Collaboration in a Style That's like Funk
Non-core functionality is included in small separate packages.

### `gen::repeat` repeats an element

``` javascript
nu.toArray(
    gen.repeat(4, 'a'));
// ['a', 'a', 'a', 'a']
```

The count may be infinite

``` javascript
gen.repeat(Infinity, 'a'));
```

### `gen::range` generates a counted range
It's a bit like Python's `range`.

An empty range is the infinite stream counting from 0

``` javascript
var s1 = nu.toArray(gen.range());
nu.first(s1) // 0
nu.first(nu.rest(s1)) // 1
```

Use an (exclusive) upper bound

``` javascript
nu.toArray(gen.range(4))
// [0, 1, 2, 3]
```

Generate a range `[lower, upper)`

``` javascript
nu.toArray(gen.range(2, 6))
// [2, 3, 4, 5]

nu.toArray(gen.range(2, -1))
// []
```

Use a custom step size.

``` javascript
nu.toArray(gen.range(2, 9, 3))
// [2, 5, 8]
```

Negative counting.

``` javascript
nu.toArray(gen.range(2, -4, -2))
// [2, 0, -2]
```


## We're Here to Teach So You'd Might As Well Learn

Quantifiers test all stream elements. They fail early, but may stall on infinite streams

### `every` tests if a predicate is satisfied for all elements in a stream

``` javascript
quantifier.every(
    function(x) { return x < 10; },
    gen.range(4));
// true
```

`every` works on infinite streams.

```javascript
quantifier.every(
    function(x) { return x < 10; },
    gen.range());
// false
```

Unless the predicate is always satisfied

``` javascript
quantifier.every(
    function(x) { return x >= 0; },
    gen.range());
// STALL
```

### `any` tests if a predicate is satisfied for any element in a stream

``` javascript
quantifier.any(
    function(x) { return x > 10; },
    gen.range(4));
// true
```

`any` works on infinite streams too.

```javascript
quantifier.any(
    function(x) { return x > 10; },
    gen.range());
// true
```

Unless the predicate is never satisfied.

```javascript
quantifier.any(
    function(x) { return x < 0; },
    gen.range());
// STALL
```


## Stand Tall, or Don't Stand At All
The `select` package allows taking and removing sub sections of streams.

### `select::take()` trims a stream
The new stream includes at most a set count number of elements.

``` javascript
var s = select.take(
    6,
    nu.map(
        function(x) { return x * x; },
        gen.range()));

nu.toArray(s) // [0, 1, 4, 9, 16, 25]
```

### `select::takeWhile` trims using a predicate
Instead of a count, it takes elements while the predicate is satisfied

``` javascript
var s = select.takeWhile(
    function(x) { return x < 20 },
    nu.map(
        function(x) { return x * x; },
        gen.range()));

nu.toArray(s) // [0, 1, 4, 9, 16]
```

### `select::skip` removes elements from a stream
It discards the first set count number of elements

``` javascript
var s = select.skip(
    6,
    nu.map(
        function(x) { return x * x; },
        gen.range()));

nu.first(s) // 6
```

### `select::skipWhile` does the same with a predicate

``` javascript
var s = select.skipWhile(
    function(x) { return x < 20 },
    nu.map(
        function(x) { return x * x; },
        gen.range()));

nu.first(s) // 20
```


## Knowledge For What You Yearn
This site only provides a brief introduction to Nu. Examples of additional
functionality such as  `concat`, memoizing streams, and `reduce` can be found in
the [documentation][documentation].


[documentation]: https://github.com/mattbierner/akh/wiki
[monadtransformers]:https://en.wikibooks.org/wiki/Haskell/Monad_transformers
[fl]: https://github.com/fantasyland/fantasy-land

