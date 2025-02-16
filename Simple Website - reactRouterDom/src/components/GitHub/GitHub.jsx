import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
  const data=useLoaderData();
  // const [data, setData]=React.useState([]);

  // useEffect(()=>{
  //   fetch(`https://api.github.com/users/Sumit0134`)
  //   .then(res=>res.json())
  //   .then(data=>setData(data))
  // }, [])
  return (
    <div className='text-center m-4 p-4 bg-gray-700 text-white text-3xl'>
      GitHub Followers: {data.followers}
      <img className='rounded-lg outline-none mt-2 block m-auto' width={300} src={data.avatar_url} alt="github dp" />
    </div>
  )
}

export default GitHub

export const githubLoaderInfo=async()=>{
  const response=await fetch(`https://api.github.com/users/Sumit0134`);
  return response.json();
}

