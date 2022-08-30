import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

//create a copy of contacts, get first five using copy.splice
const firstContacts = [...contacts];
const firstFive = firstContacts.splice(0, 5);

function App() {
  //set state using list and set list
  const [list, setList] = useState(firstFive);

  //add contacts using math.random and using splice to get a random contact
  //concat the list with randomcontact to update the list
  //and add this within setList to update the state
  const addContact = () => {
    const randomSelect = Math.floor(Math.random() * firstContacts.length);
    const randomContact = firstContacts.splice(randomSelect, 1);
    setList(list.concat(randomContact));
  };

  //create a sortbyname which uses sortName as a copy of list
  //then sort using a + b to sort the list by returning +1 -1 and 0
  //then .slice with no arguments to copy the array
  //pass this array sortName to setList to update our state
  const sortByName = () => {
    const sortName = list
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      .slice();
    setList(sortName);
  };

  //exact same functionality as sort name
  const sortByPopularity = () => {
    const sortPop = list
      .sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      })
      .slice();
    setList(sortPop);
  };

  //delete using parameter of id
  //const new array to .filter celeb by id and if it doesnt match
  //update state by passing new array
  const deleteContact = (id) => {
    const newArray = list.filter((contact) => contact.id !== id);
    setList(newArray);
  };

  return (
    <>
      <h1 className="title">IRON CONTACTS</h1>
      <button className="button" onClick={addContact}>Add Random Contact</button>
      <button className="button" onClick={sortByName}>Sort By Name</button>
      <button className="button" onClick={sortByPopularity}>Sort By Popularity</button>

      <div className="App">

        <table>

          <thead className="thead">
            <tr>
              <th className="headers">Picture</th>
              <th className="headers"h>Name</th>
              <th className="headers">Popularity</th>
              <th className="headers">Won Oscar?</th>
              <th className="headers">Won Emmy?</th>
              <th className="headers">Actions</th>
            </tr>
          </thead>

          <tbody className="tbody">
            {list.map((contacts) => {
              return (
                <tr key={contacts.id}>

                  <td>
                    <img
                      src={contacts.pictureUrl}
                      alt={contacts.name}
                      width="80px"
                      height="120px"
                    />
                  </td>

                  <td>{contacts.name}</td>

                  <td>{contacts.popularity.toFixed(2)}</td>

                  <td>{contacts.wonOscar && "🏆" }</td>

                  <td>{contacts.wonEmmy && "⭐"}</td>
                  
                  <td>
                    <button className="button2" onClick={() => deleteContact(contacts.id)}>
                      Delete
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>

      </div>

    </>
  );
}

export default App;