import React from "react";

const NewDish = () => {
  return <>
    <h1 className="text-3xl font-light mb-4">Add Dish</h1>

    <div className="flex justify-center mt-10">
      <div className="w-full max-w-3xl">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Dish name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
            <input id="price" type="number" placeholder="e.g 20€" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
            <select id="category" type="number" placeholder="e.g 20€" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">--Select--</option>
              <option value="">Breakfast</option>
              <option value="">Lunch</option>
              <option value="">Dinner</option>
              <option value="">Drinks</option>
              <option value="">Desserts</option>
              <option value="">Salads</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
            <input id="image" type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
            <textarea id="description" placeholder="Description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40" />
          </div>

          <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold" value="Add dish" />
        </form>
      </div>
    </div>
  </>;
};

export default NewDish;
