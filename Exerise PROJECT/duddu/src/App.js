import AddItems from "./AddItems";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import { useState } from 'react';

function App() { 
 
     const [items, setItems] = useState(
       [
         {id:1,
           checked: true,
           item:"practing coding"
         },
       {id:2,
           checked: true,
           item:"play crickt"
       },
         {id:3,
           checked: false,
           item:"READ about AI"
         }
       ]);

       const [newItem, setNewItem] = useState ("")
       const addItem = (item) => {
        const id = item.length ? items[items.length -1 ].id 
        +1 : 1;
        const addNewItem = {id, checked:false, item}
        const listItems = [...items, addNewItem]
        
       }
 
      const handleCheck = (id) => {
    const listItems = items.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
   const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !==id);
        setItems(listItems);
       localStorage.setItem("todo_list", JSON.stringify(listItems));
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem)
      //addItem
      setNewItem('')
  
   }



  return (
    <div className="App">
      <Header title = "kalvi "/>
      <AddItems 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content
       items = {items} 
       handleCheck = {handleCheck}
       handleDelete={handleDelete}
       />
     
      <Footer
      length = {items.length}
      />
    </div>
  );
 }

export default App;



