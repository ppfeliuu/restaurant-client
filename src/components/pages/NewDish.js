import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewDish = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Min. 3 characters")
        .required("Name is mandatory"),
      price: Yup.number().min(1, "Add numbers").required("Price is mandatory"),
      category: Yup.string().required("Category is mandatory"),
      description: Yup.string()
        .min(10, "Min. 10 characters")
        .required("Description is mandatory"),
    }),
    onSubmit: (datos) => console.log(datos),
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Add Dish</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Dish name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{formik.errors.name}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                placeholder="e.g 20€"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.price && formik.errors.price ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{formik.errors.price}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                type="number"
                placeholder="e.g 20€"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">--Select--</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Desserts</option>
                <option value="salads">Salads</option>
              </select>
            </div>

            {formik.touched.category && formik.errors.category ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{formik.errors.category}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              <input
                id="image"
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.description && formik.errors.description ? (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{formik.errors.description}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Add dish"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewDish;
