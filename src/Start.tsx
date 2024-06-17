
import logo from './logo.svg';
import NavigateTo from './utilities/MyTsFile';


export default function Start(){
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={() => NavigateTo("Destination1")}>Go to Destination 1</button>
      </header>
    </div>
    )
}