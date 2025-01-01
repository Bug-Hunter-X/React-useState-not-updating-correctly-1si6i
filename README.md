# React useState Bug
This repository demonstrates a common bug in React applications involving the `useState` hook.  The bug arises from attempting to directly mutate the state variable instead of using the setter function provided by `useState`. This can lead to unexpected behavior and prevent the UI from updating correctly.

## Bug Description
The provided code snippet shows an increment function that tries to directly update the `count` variable, which is incorrect.  React's `useState` hook requires that you use the setter function (`setCount` in this case) to update the state.  Directly modifying `count` does not trigger a re-render, so the UI won't reflect the changes.

## Solution
The solution involves correctly using the setter function to update the state. The setter function will trigger the necessary re-renders.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe the counter; it will not increment correctly due to the bug.