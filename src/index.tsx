import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'
import { test } from './test';

const App = () => {
  const [result, setResult] = useState<string>('');
  useEffect(() => {
    setResult(test());
  }, []);
  return <><h1>Hello, React with TypeScript!</h1>
    <div>{result}</div></>;
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
