import React, { useContext, useRef } from 'react'
import { FirebaseContext } from '../../firebase'
const Dish = ({ dish }) => {

    const existenciaRef = useRef(dish.existencia)

    const { firebase } = useContext(FirebaseContext)

    const { id, name, image, existencia, category, price, description } = dish

    const updateExist = () => {
        const existencia = (existenciaRef.current.value === "true")

        try {
            firebase.db.collection('products').doc(id).update({ existencia });
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={image} alt="Dish" />
                        <div className="sm:flex sm:-mx-2 pl-2">
                            <label className="block mt-5 sm:w-2/4"><span className="block text-gray-800 mb-2">Exist</span></label>

                            <select className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" value={existencia} ref={existenciaRef} onChange={() => updateExist()}>
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-2xl text-yellow-600 mb-4">{name}</p>
                        <p className="text-gray-600 mb-4">Category: {' '} <span className="text-gray-700 font-bold">{category.toUpperCase()}</span></p>
                        <p className="text-gray-600 mb-4">{description}</p>

                        <p className="text-gray-600 mb-4">Price: {' '} <span className="text-gray-700 font-bold">€ {price}</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dish
