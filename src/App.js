import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import StudentList from "./StudentList";
function App() {
  const [x, setX] = useState(0);
  const vd = [
    { name: 'Heo', old: 2 }, { name: 'Ga', old: 3 }
  ]
  const [text, setText] = useState("Meo");
  const [name, setName] = useState("");
  const [student, setStudent] = useState({ name: "le hoang", old: 5 });
  const [check, setCheck] = useState(true)
  const [list, setList] = useState(() => {
    let listLocal;
    if(localStorage.getItem("list")){
      listLocal = JSON.parse(localStorage.getItem("list"));
    }else{
      listLocal = vd
    }
    
    console.log(listLocal);
    return listLocal;
  });

  const [list2, setList2] = useState([1, 2, 3, 4])


const handle_Increase = () => {
  // setX(x + 1);
  setX((pre) => pre + 1);
  setX((pre) => pre + 1);

};
const handle_Change_Text = (event) => {
  event.preventDefault();
  setText(name);
  setName("");
  setStudent((pre) => ({ ...pre, name: name }))
};
const handle_Change_name = (event) => {
  setName(event.target.value)
};
const handle_toggle_student = () => {
  setCheck((pre) => !pre)
}
const handle_add = () => {
  setList((pre) => {
    const newList = [...pre, { name: name, old: 3 }]
    localStorage.setItem("list", JSON.stringify(newList));
    return newList;
  });
};
return (
  <div>
    <h2>React js</h2>
    <h1>{x}</h1>
    <h1>name:{text}</h1>
    <h1>
      ho va ten:{student["name"]},tuoi:{student.old}{" "}<br />
      {JSON.stringify(student)}
    </h1>
    <button onClick={handle_Increase} >Increase</button>
    <button onClick={handle_Change_Text} >Change Text</button>

    <form onSubmit={handle_Change_name}>
      <input type="text" placeholder="Name" value={name} onChange={handle_Change_name} />
    </form>
    <button onClick={handle_toggle_student}>Toggle Student</button>
    {check ? <StudentList /> : ""}

    <ul>
      {list.map((st, key) => {
        return <li>{st.name},{st.old}</li>
      })}
    </ul>

    <form onSubmit={handle_Change_name}>
      <input type="text" placeholder="Name" value={name} onChange={handle_Change_name} />
    </form>
    <button onClick={handle_add}>add student</button>

    <ul>
      {list2.map((st, key) => {
        return <li>{st}</li>
      })}
    </ul>
  </div>
);
};

export default App;
