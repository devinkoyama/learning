package main

import "fmt"

func outerFunction() func() int {
	x := 1
	innerFunction := func() int {
		x++
		return x
	}
	return innerFunction
}

func main() {
	increment := outerFunction()
	fmt.Println(increment()) // 2

	newIncrement := outerFunction()
	fmt.Println(newIncrement()) // 2
	fmt.Println(newIncrement()) // 3

	fmt.Println(increment()) // 3
}

