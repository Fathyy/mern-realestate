import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold"></h1>
      <form action="" className="flex flex-col gap-4">
        <input type="text" className="border p-3 rounded-lg" placeholder="Username" id="username" />
        <input type="email" className="border p-3 rounded-lg" placeholder="email" id="email" />
        <input type="password" className="border p-3 rounded-lg" placeholder="Password" id="password" />
        <button type="submit" className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?
        </p>
        <Link to="/signin"><span className="text-blue-700">Sign in</span></Link>
      </div>
    </div>
  )
}

export default Signup