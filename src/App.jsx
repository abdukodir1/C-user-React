//style
import "./App.css";
import { useState } from "react";
//components
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userlists/UserList";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [users, Setuser] = useState([]);
  const [showModal, SetShowModal] = useState(false);

  //delete user
  const deleteItems = (userId) => {
    Setuser((prev) => {
      return prev.filter((eprev) => {
        return eprev.id !== userId;
      });
    });
  };

  //Add user
  const addUser = (add) => {
    Setuser((prev) => {
      return [...prev, add];
    });
  };

  // Close modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") SetShowModal(false);
    if (e.key === "Escape") SetShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        {users.length === 0 && (
          <div className="no-users">
            <h2>No users</h2>
          </div>
        )}
        <UserList users={users} deleteItems={deleteItems} />
      </main>
      {showModal && (
        <NewUserForm addUser={addUser} SetShowModal={SetShowModal} />
      )}
      <button className="create-user" onClick={() => SetShowModal(true)}>
        Create New User
      </button>
      <Footer />
    </div>
  );
}

export default App;
