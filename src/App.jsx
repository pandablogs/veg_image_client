import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Form, Formik } from "formik";

function App() {

  const initialValues = {
    mealType: '',
    taste: '',
    cookingTime: '',
    image: null
  }

  const [image, setImage] = useState(null);

  const MealType = [
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Snack' },
  ];

  const tasteType = [
    { name: 'Sweet' },
    { name: 'Spicy' },
    { name: 'Sour' },
    { name: 'Savory' },
  ];

  const cookingTime = [
    { name: 'Under 10 mins' },
    { name: 'Under 30 mins' },
    { name: 'nder 1 hour' },
  ];

  const handleImageUpload = (e, setFieldValue) => {
    // const file = e.target.files[0];
    // if (file) setImage(URL.createObjectURL(file));


    // const file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const base64 = reader.result;
    //     setImage(base64)
    //     setFieldValue('image', base64)
    //   };
    //   reader.readAsDataURL(file);
    // }


    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFieldValue('image', file);
    }

  };

  const onSubmitAction = async (values) => {
    console.log('values', values)
    const formData = new FormData();

    formData.append('image', values.image);
    formData.append('mealType', values.mealType?.name);
    formData.append('taste', values.taste?.name);
    formData.append('cookingTime', values.cookingTime?.name);
    const response = await fetch('http://localhost:1000/api/images/upload', {
      method: 'POST',
      body: formData,
    });
    console.log('response', response)
    const data = await response.json();

    console.log('data', data)
  }

  return (
    <>
      <div className="bg-center bg-cover bg-image">
        <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br ">

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmitAction}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="flex flex-col w-full max-w-5xl overflow-hidden bg-white shadow-2xl rounded-2xl md:flex-row">
                  {/* Left Form Side */}
                  <div className="flex flex-col justify-center w-full px-14 py-5 md:px-24 md:py-10 md:w-[65%]">
                    <h1 className="mb-3 text-4xl font-extrabold text-center text-gray-900 md:text-6xl ">Find Your Perfect Recipe</h1>
                    <p className="my-6 text-base text-center text-gray-600 md:text-lg">Clear your mind with our daily recipes</p>
                    {/* 
              <select className="w-full px-4 py-5 mb-6 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" >
                <option value="" disabled>Select Meal Type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
              </select> */}

                    <div className="flex w-full mb-6 bg-gray-100 rounded-lg card justify-content-center focus:outline-none focus:ring-2 focus:ring-indigo-400 ">
                      <Dropdown value={values?.mealType} onChange={(e) => setFieldValue('mealType', e.target.value)} options={MealType} optionLabel="name"
                        placeholder="Select Meal Type" className="w-full md:w-14rem" />
                    </div>

                    <div className="flex w-full mb-6 bg-gray-100 rounded-lg card justify-content-center focus:outline-none focus:ring-2 focus:ring-indigo-400 ">
                      <Dropdown value={values?.taste} onChange={(e) => setFieldValue('taste', e.target.value)} options={tasteType} optionLabel="name"
                        placeholder="Select Taste" className="w-full md:w-14rem" />
                    </div>

                    <div className="flex w-full mb-6 bg-gray-100 rounded-lg card justify-content-center focus:outline-none focus:ring-2 focus:ring-indigo-400 ">
                      <Dropdown value={values?.cookingTime} onChange={(e) => setFieldValue('cookingTime', e.target.value)} options={cookingTime} optionLabel="name"
                        placeholder="Select Cooking Time" className="w-full md:w-14rem" />
                    </div>

                    <button type="submit" className="w-full py-3 font-semibold text-white transition bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-800">
                      Submit
                    </button>
                  </div>

                  {/* Right Image Upload Side */}
                  <div className="flex items-center justify-center w-full p-6 md:w-[35%] bg-gray-50 md:p-10">
                    <div className="text-center">
                      {image ? (
                        <img
                          src={image}
                          alt="Uploaded"
                          className="h-[360px] w-auto object-cover rounded-xl shadow-lg"
                        />
                      ) : (
                        <label className="block cursor-pointer">
                          <div className="h-[300px] w-[240px] border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100">
                            Upload Image
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, setFieldValue)}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>

                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default App
