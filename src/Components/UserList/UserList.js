import React from "react";
import "./UserList.css";
const UserList = () => {
  const users = [
    {
      name: "Mohamed",
      age: 20,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ahmed",
      age: 28,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ali",
      age: 30,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ali",
      age: 10,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ali",
      age: 15,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
    {
      name: "Ali",
      age: 55,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
    },
  ];
  const handleName = (name) => {
    // console.log(name);
    alert(`hello ${name}`);
  };
  //   const filtredArray = users.filter((user) => user.age > 20);
  return (
    <section>
      <h2 className="title">List Of Users</h2>

      <div className="list-users">
        {users.map((user, i) => (
          <div
            className="user-card"
            onClick={() => handleName(user.name)}
            key={i}
          >
            <h3 className="name">{user.name}</h3>
            <h3>{user.age}</h3>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="title">User their age greater than :</h2>

      <div className="list-users">
        {users
          .filter((user) => user.age > 20)
          .map((user, i) => (
            <div
              className="user-card"
              onClick={() => handleName(user.name)}
              key={i}
            >
              <h3 className="name">{user.name}</h3>
              <h3>{user.age}</h3>
              <p>{user.desc}</p>
            </div>
          ))}
      </div>
      <h2 className="title">average age is :</h2>
      <h2>
        {(
          users.reduce((acc, curr) => acc + curr.age, 0) / users.length
        ).toFixed(2)}
      </h2>
    </section>
  );
};

export default UserList;
