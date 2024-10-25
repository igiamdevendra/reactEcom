import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
      <div className='border rounded-md shadow-2xl space-y-5 max-w-[400px] mx-auto mt-[5%] p-6'>
        <h3 className='text-center text-2xl font-bold text-blue-700 mb-7'>Sign up</h3>
        
        <div className='relative'>
          <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
          <input className='w-full block pl-10 py-3 border rounded-md bg-slate-200 focus:border-gray-500' type="text" placeholder='Name'/>
        </div>

        <div className='relative'>
          <MdEmail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
          <input className='w-full block pl-10 py-3 border rounded-md bg-slate-200' type="email" placeholder='Email id'/>
        </div>

        <div className='relative mb-7'>
          <RiLockPasswordFill className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
          <input className='block w-full pl-10 py-3 border rounded-md bg-slate-200' type="password" placeholder='Password'/>
        </div>

        <div className='w-full flex justify-between'>
          <button className='w-[45%] bg-blue-800 text-white py-2 px-3 rounded-full'>sign up</button>
          <Link to="/signin" className='w-[45%] bg-slate-200 py-2 px-3 rounded-full text-center'>sign in</Link>
        </div>
      </div>
  )
}

export default Signup 