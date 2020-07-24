import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { render } from "@testing-library/react";

let city = "Madrid";

let array = {
  name: "Madrid covur",
  country: " spain",
};
/*
function Hello(props) {
  console.log(Object.keys(props));
  return (
    <div>
      <h1> Welcome to React Application</h1>
      <p> Here is items list props: {props.library}</p>
      <p> Here is items list props: {props.message}</p>
      <p> Total number: {props.Number}</p>
    </div>
  );
}
function Lake1(props) {
  return <h1> {props.name}</h1>;
}
const lakeList = ["Echo", "Maud", "Cascade"];
const emplist = [
  { id: "10", name: "ramu", salary: "10000" },
  { id: "20", name: "kumar", salary: "20000" },
  { id: "30", name: "shalini", salary: "30000" },
];

function App(props) {
  return (
    <div>
      <h1> Welcome to React Application</h1>
      <p> Here is items list props: {props.library}</p>
      <p> Here is items list props: {props.message}</p>
      <p> Total number: {props.Number}</p>
      <ul>
        {props.lakes.map((lake) => (
          <li>{lake}</li>
        ))}
      </ul>
      <h2>Employee List</h2>
      {props.empnames.map((emp) => (
        <div key={emp.id}>
          <h2> {emp.name}</h2>
          <h2> {emp.salary}</h2>
        </div>
      ))}
    </div>
  );
}
ReactDOM.render(
  <App lakes={lakeList} empnames={emplist} />,
  document.getElementById("root")
);*/
/*function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}> {number}</li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);*/
/*function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
*/

// Conditional Rendering
/*
function Lake({ name }) {
  return (
    <div>
      <h1> {name}:</h1>
    </div>
  );
}
function SkiResort({ name }) {
  return (
    <div>
      <h1> {name}:</h1>
    </div>
  );
}
function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenney Lake"></Lake>
      ) : props.season === "winter" ? (
        <SkiResort name="JHMR"></SkiResort>
      ) : (
        <h1> Come back here</h1>
      )}
    </div>
  );
}
ReactDOM.render(<App season="summer"></App>, document.getElementById("root"));


// React.fragment elements

function Lake() {
  return <h1> My Lake</h1>;
}
function SkiResort() {
  return <h1> My SkiResort</h1>;
}

function App() {
  return (
    <>
      <Lake />
      <SkiResort />

      <Lake />
      <SkiResort />
    </>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));


// For state of component
function App() {
  const [year, setYear] = useState(2020);
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("open");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked:${checked.toString()}`);
  });

  return (
    <>
      <div>
        <h1>
          <input
            type="checkbox"
            value={checked}
            onChange={() => setChecked((checked) => !checked)}
          />
          {checked ? "checked" : "not Checked"}
        </h1>
      </div>
      <div>
        <h1> current Year : {year} </h1>
        <button onClick={() => setYear(year + 1)}>Happy Year</button>
      </div>
      <div>
        <h2>Manager on Duty : {manager}</h2>
        <button onClick={() => setManager("Richael")}>Change Manager</button>
      </div>
      <div>
        <h1> status : {status} </h1>
        <button onClick={() => setStatus("closed")}>Closed</button>
        <button onClick={() => setStatus("opened")}>opened</button>
      </div>
    </>
  );
} */

// For useEffect - for text field
/*
function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field1:${val}`);
  }, [val]);
  useEffect(() => {
    console.log(`field2:${val2}`);
  }, [val2]);
  return (
    <>
      <label>
        {" "}
        First Category:
        <input
          type="text"
          name="val"
          onChange={(e) => setVal(e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        {" "}
        Second Category:
        <input
          type="text"
          name="val2"
          onChange={(e) => setVal2(e.target.value)}
        ></input>
      </label>
    </>
  );
}
ReactDOM.render(<App></App>, document.getElementById("root"));
*/

// For Fetching data from useEffect
/*function GitHubUsers({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        <h1> {data.login}</h1>
        <img src={data.avatar_url} />
      </div>
    );
  }
  return null;
}
function App() {
  return <GitHubUsers login="eveporcello" />;
}
ReactDOM.render(<App></App>, document.getElementById("root"));*/
// useReducer
