import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/elements/Button";
import { app } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const authetication = getAuth();
    let uid = '';
    createUserWithEmailAndPassword(authetication, data.email, data.password)
      .then ((res) => {
        uid = res.user.uid;
        sessionStorage.setItem('User ID', uid);
        sessionStorage.setItem('Auth token', res._tokenResponse.refreshToken);
        window.dispatchEvent(new Event('storage'));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already In Use");
        }
      })
      
      fetch('http://localhost:8080/api/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            name: data.name,
            _id: uid
        })
      }).then((res) => {
        if (res.status === 200) {
            setLoading(false);
            toast.success('Account created successfully!🎉', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
            navigate('/');
        } else {
            console.log(res.json());
        }
      }).catch((error) => {
        setLoading(false);
        console.log(error)
      })
  }

  return (
    <div className="h-4/6 bg-black flex items-center justify-center max-sm:h-4/5">
      <div className="rounded-lg max-w-md w-full max-sm:w-4/5 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl">Register</h5>

          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label 
                htmlFor="name"
                className="block text-lg font-medium text-gray-200">Name</label>
              <input 
                {...register('name')}
                id="name"
                type="text"
                className="block appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray 400 focus:outline-none focus:ring-gray-200 focus:border-gray-200" 
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-lg font-medium text-gray-200">Email</label>
              <input 
                {...register('email')}
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray 400 focus:outline-none focus:ring-gray-200 focus:border-gray-200" 
              />
            </div>

            <div>
              <label 
                htmlFor="password"
                className="block text-lg font-medium text-gray-200">Password</label>
              <input 
                {...register('password')}
                id="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 mb-6 border-gray-300 rounded-md shadow-sm placeholder-gray 400 focus:outline-none focus:ring-gray-200 focus:border-gray-200" 
              />
            </div>

            <Button size="large">{loading ? "Loading . . ." : "Register"}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default Register;