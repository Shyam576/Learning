# PROBLEM SOLVING

### Example Question
[Question Topic] Timeout Cancellation
Given a function *fn*, an array of arguments *args*, and a timeout *t* in milliseconds, return a cancel function *cancelFn*.

After a delay *cancelTimeMs*, the returned cancel function *cancelFn* will be invoked.
***setTimeout(cancelFn, cancelTimeMs)***
Initally, the execution of the function *fn* should be delayed by *t* milliseconds.

If, before the delay of *t* milliseconds, the function *cancelFn* is invoked, it should cancel the delayed execution of *fn*. Otherwise, if *cancelFn* is not invoked within the specified delay *t*, *fn* should be executed with  the provided *args* as arguments.
1. ## Understand the Problem Requirements
- **What is the goal?** You need to execute a function `fn` after a delay, but allow the function to be cancelled before it executes.
- **Input** : A function `fn`, an array of arguments `args`, and a timeout `t.
- **Output** : A cancel function that stops `fn` from executing if called before the delay.

2. ## Break Down the Problem
- **Part 1** : Delaying the execution of `fn` by `t` milliseconds. 
- **Part 2** : Creating a cancel a function that can prevent `fn` from being executed. 

3. ## Identify the Key Concepts
- **setTimeout** : Used to delay execution.
- **clearTimeout** : Used to cancel a delayed execution.
- **Closure** : The cancel function needs to access to the timer created by `setTimeout`.

4. ## Plan the Solution
- **Step 1** : Start by creating the delayed execution using `setTimeout`.
- **Step 2** : Implement the cancel function using `clearTimeout`.
- **Step 3** : Return the cancel function from the main function.

5. ## Write a Pseudocode
- This helps you structure your thoughts before jumping into code. 
    ```bash
    function createCancelableFunction(fn, args, t) {
        // Set a timeout to delay execution of fn 
        let timeoutId = setTimeout(()=>{
            fn(..args);
        },t)

        // Define the cancel function
        function cancelFn(){
            // Cancel the timeout if still pending
            clearTimeout(timeoutId);
        }
        // Return the cancel function
        return cancelFn;
    }

6. ## Implement the Code
- Once you have a clear structure, start coding each part step-by-step.
- Test as you go.

7. ## Test with Different Scenarios
- Run the code with cases where `cancelFn` is called before and after the timeout.

8. ## Refine if Necesssary
- Optimize or refactor based on the results of your tests.


# Practice and Review
- **Regular practice** with this approach will make you more comfortable with complext problems over time.
- **Review your code** to see if there's anything you could improve, like adding edge cases or optimizied performance. 

***Happy Coding***













