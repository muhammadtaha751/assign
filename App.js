import logo from './logo.svg';
import './App.css';





const name = "Hello World";
const obj = { name: "Hello World Object" }
const data = ['We', 'are', 'United']
const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif' className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{obj.name}</p>
        <ol>
          {data.map(function (item) {
            return <li>{item}</li>
          })}
        </ol>

        <ol>
          {list.map(function (item) {
            return <li>{item.name}</li>
          })}
        </ol>
        <table border={2}>
          <tr>
            <th>company</th>
            <th>jobs</th>
          </tr>
          {complex.map(function(item){
 return <tr>
  <td> {item.company} </td>
  <td> {item.jobs} </td>
</tr>



          })}
        
        </table>
      </header>
    </div>
  );
}

export default App;
