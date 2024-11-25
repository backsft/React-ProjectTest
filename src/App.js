import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Mr Jhon";
  let x = 10;
  let y = 27;
  let obj={
    "name" : "ahmed",
    "age" : 19
  }

  let status=true;

  return (
    <div className="main">
      <h1>{name}</h1>
      <h2>{x*y}</h2>
      <h2>{obj.name}</h2>
      <h2>{obj.age}</h2>
      {
        x > y ? (
          <div>x is greater than y</div>
        ) : (
          <div>x is not greater than y</div>
        )
      }

  {
        obj.age > 18 ? (
          <div>{obj.name} your age is {obj.age}</div>
        ) : (
          ""
        )
      }
      
      {
        (status) ? <h1 style={{color:"red",backgroundColor:'yellow'}}>Welcome to Project</h1>: "" 
      }
     
    </div>
  );
}

export default App;
