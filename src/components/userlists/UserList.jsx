/* eslint-disable react/prop-types */
import "./UserList.css";

function UserList({ users, deleteItems }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  height={150}
                  width={150}
                />
                <h3>
                  {user.firstName}, {user.lastName}, {user.age} years old
                </h3>
                <p>Job: {user.job}</p>
                <p>From: {user.from}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => deleteItems(user.id)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
