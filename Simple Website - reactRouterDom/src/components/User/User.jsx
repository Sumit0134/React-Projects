import { useParams } from 'react-router-dom'

const User = () => {
  const {userId}=useParams()

  return (
    <div>
      <h1 className='bg-gray-600 text-3xl text-white p-4 text-center'>User: {userId}</h1>
    </div>
  )
}

export default User
