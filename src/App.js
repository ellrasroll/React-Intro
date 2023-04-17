import './App.css';
import lfcImg from "./images/lfcImg.jpg";

const App = () => {
  return (
    <div>
      <h1>My main Component</h1>
      <img src={lfcImg} alt="lfc badge" />
      <Person name="Dan" age="34" jobTitle="Chef" profilePic ={lfcImg}/>
      <Person name="Joe" age="30 something" jobTitle="Gardener"/>
      <Person name="Sam" age="21" jobTitle="Software Developer"/>
    </div>
);
}
const Person = (props) => {

  return (
    <div className="personWrapper">
      <img src={lfcImg} />
    <p>Hi, I'm {props.name} and I am {props.age} years old</p>
    <Job title={props.jobTitle} />
    </div>
    )
}

const Job = (props) => {
  return (
    <h3>I'm a {props.title}</h3>
  )
} 

export default App;
