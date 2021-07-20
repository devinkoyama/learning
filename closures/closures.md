*July 19, 2021*

# Closures

In order to understand what a *closure* is, you need to understand how *scope* works. **Scope defines which values are available to the program during different points of it's execution.**

```
function
    a = 1 <-- initialized variable "a" to be equal to 1 within function scope
    print a <-- displays the value of "a"

print a <-- "a" has no value here because once we left the scope of "function" all the values within that block are removed from memory
```

Each new block or function that gets defined, gets it's own scope which acts as a directory of values to be memorized. Once the program exits that block, those values are wiped from memory.

It is possible to access scopes which are "up/out", but not "down/in".

```
*global scope*
a = 1 <-- initialized variable "a" in global scope

function
    print a <-- "a" is not initialized within this function scope but it goes "up" to the global scope to find a value for "a"
    
print a <-- This statement is made at the same "level" or scope which "a" was initialized so it works too.
```

**A `closure` is a scope which persists after code execution has moved out of a block.**

Example:
```
outerFunction
    x = 1
    
    innerFunction
        print x
        
    return innerFunction
    
showVariable = outerFunction()
showVariable()
```

Here we have a function called, `outerFunction`. When executed, it will return another function called, `innerFunction`. `innerFunction` has access to all values within `outerFunction`'s scope, including `x`.

```
showVariable = outerFunction()
```

Ordinarily after a function finishes execution, all of it's values and scope are forgotten. However, when a function's return value is another function, as is the case with `outerFunction` and `innerFunction`, all the values that were in scope of `outerFunction` will remain in memory so `innerFunction` can execute without error. The variable `x` was *enclosed* and now within a closure.

```
showVariable()
```

Now anytime `showVariable` is executed, the program will see `x` and say to itself, *"`x` is undefined but a closure exists which contains a value for `x` so I will use that!"*

Closure
: Scope which persists after code execution has finished.

---

## [Code Samples - Go/JavaScript]()