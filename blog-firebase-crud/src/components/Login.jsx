import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";
import { Button,Input } from "./index";
import { toast } from "react-toastify";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } =useForm();
    const navigate = useNavigate();

    const onLogin = async (data) => {
        const {email, password} = data;

        try {
            if(!auth){
                toast.error("Firebase Auth not initialized");
                return;
            }
            await signInWithEmailAndPassword(auth,email,password);
            toast.success("Login Successful");
            console.log("User Logged In: ",auth.currentUser);
            navigate("/");
        } catch (error) {
            toast.error("Error logging in: " + error.message);
            console.log("Login Error: ",error.message);
        }
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow bg-white">
            <h2 className="text-2xl font-bold mb-4">Login</h2> 
            <form onSubmit={handleSubmit(onLogin)} className="space-y-4">       
                <Input label='Email: ' placeholder="Enter your email"
                    {...register("email",{
                        required:"Email is required",
                        pattern:{
                            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message:"Invalid email address",
                        },
                    })}></Input>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                <Input label='Password: ' type="password" placeholder="Enter your password"
                    {...register("password",{
                        required:"Password is required",
                        minLength:{
                            value:8,
                            message:"Password must be at least 8 characters",
                        },
                    })}></Input>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <Button type="submit" disabled={isSubmitting} className="w-full">{isSubmitting ? "Logging in..." : "Login"}</Button>
            </form>
            <Link className="block w-fit mt-2 ms-auto font-bold text-blue-600 hover:underline" to="/signup">Create Account</Link>
        </div>
    )
}

export default Login
