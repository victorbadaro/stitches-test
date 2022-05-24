import { Button } from './components/Button';
import { globalStyles } from './styles/global';

export function App() {
  globalStyles();

  return (
    <>
      <h1>Hello world!</h1>
      <Button />
    </>
  );
}