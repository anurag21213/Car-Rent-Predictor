import React, { useState } from 'react'

const Form = () => {
  const [fuel,setfuel]=useState("")
  const [mileage,setMileage]=useState("")
  const [transmission,setTransmission]=useState("")
  const [year,setYear]=useState("")

  const [price,setPrice]=useState(0)
  const [maxprice,setMaxPrice]=useState(0)
  const [minprice,setMinPrice]=useState(0)

  const [loading,setLoading]=useState(false)
  const [receive,setReceive]=useState(false)

  const fetchPrediction=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const data={fuel,mileage,transmission,year}
    console.log(data);
    const response=await fetch('http://localhost:3000/predict',{
      method:'POST',
      body:JSON.stringify(data)
    })
    const newdata=await response.json()

    if(newdata){
      setPrice(newdata[0].price)
      setMaxPrice(newdata[0].price_max)
      setMinPrice(newdata[0].price_min)
      setReceive(true)
    }
    else{
      alert("something went wrong")
    }

    setLoading(false)

  }


  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md text-white ">
    {
      loading==true?<p>Loading</p>:
      <form className="space-y-6 mt-5" >
      <div>
        <label  className="block text-sm font-medium leading-6 ">Fuel Type</label>
        <div className="mt-2">
          <input  value={fuel} onChange={(e)=>{setfuel(e.target.value)}} type="text"  required className="p-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label  className="block text-sm font-medium leading-6 ">Mileage</label>
        <div className="mt-2">
          <input value={mileage} onChange={(e)=>{setMileage(e.target.value)}}  type="text"  required className="p-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label  className="block text-sm font-medium leading-6 ">Transmission</label>
        <div className="mt-2">
          <input  value={transmission} onChange={(e)=>{setTransmission(e.target.value)}}  type="text" required className="p-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <label  className="block text-sm font-medium leading-6 ">Year</label>
        <div className="mt-2">
          <input  value={year} onChange={(e)=>{setYear(e.target.value)}}  type="text"  required className="p-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button onClick={fetchPrediction} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Predict</button>
      </div>

    </form>
    }
    

    {
      receive&&<div className='mt-10 w-full flex-col items-center justify-center'>
          <p><span className='text-xl font-mono text-green-700'>Predicted Rent</span> is  <span className='text-2xl'>₹ {price}</span></p>
          <p><span className='text-xl font-mono text-green-700'>Maximum Predicted Rent</span> is <span className='text-2xl'>₹ {maxprice}</span></p>
          <p><span className='text-xl font-mono text-green-700'>Minimum Predicted Rent</span> is <span className='text-2xl'>₹ {minprice}</span></p>
      </div>
    }
  </div> 
  )
}

export default Form
