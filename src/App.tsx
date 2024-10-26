import "./App.css";
import { Button } from "./components/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <div>
        <Button>test</Button>
      </div>
      <div>
        <Input label="Username" placeholder="Enter your username" />
        <Input
          label="Email"
          placeholder="Enter your email"
          error="Invalid email"
        />
      </div>
    </div>
  );
}

export default App;
