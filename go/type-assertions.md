# Type assertions
A *type assertion* accesses an interface value's underlying type.

```
x.(T)
```

asserts that `x` is not nil and the value stored within, is of type `T`.

If `x` does not hold a value of type `T` the program will trigger a panic.

To check whether `x` holds a `T`, use a type assertion in an assignment form.

```
v, ok := x.(T)
```

If the assertion holds, `v` will contain the value of type `T` and `ok` will be `true`. Otherwise, `v` will be the zero value of `T` and `ok` will be false.

Assignment form of type assertions prevent a run-time panic.

[Live Example](https://play.golang.org/p/OdJos1XQS6v)