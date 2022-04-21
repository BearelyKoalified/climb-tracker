import './App.css';

function testReturnObj(fullName) {
    if (fullName) {
        return 'displaying full name: Abercrombie and Fitch';
    } else {
        return 'displaying abbrv name: Abercrombie';
    }
}

function App() {
    return (
        <div className="App">
            <h1>{testReturnObj(true)}</h1>
        </div>
    );
}

export default App;
