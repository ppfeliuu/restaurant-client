import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from '../../firebase'
import Dish from "../ui/Dish";


const Menu = () => {

  const [dishes, setDishes] = useState([])

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const getDishes = () => {
      firebase.db.collection('products').onSnapshot(handleSnapshot)

    }
    getDishes()
  }, [])

  function handleSnapshot(snapshot) {
    const dishes = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
    setDishes(dishes)
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/newdish"
        className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold"
      >
        Add new dish
      </Link>
      {dishes.map(p => (
        <Dish key={p.id} dish={p} />
      ))}
    </>
  );
};

export default Menu;
