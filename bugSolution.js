```javascript
//In your component
const [count, setCount] = useState(0);

const incrementCount = () => {
  setCount(prevCount => prevCount + 1); //Correct way to update state
};
```