import './App.css';

function App() {
  return (
    <div className="App">

      <form>
      <label for="email">email</label>
      <input type="text" id="name" name="name" /><br /><br />
      <label for="password">Password</label> 
      <input type="text" id="email" name="email"/><br /><br />
      <input type='submit' value="send" id="submit"/> <input type='reset'/> 
      </form>

    </div>
);
}

export default App;
