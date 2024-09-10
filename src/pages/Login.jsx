import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <section className="h-screen w-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white overflow-hidden w-full h-full">
        {/* Left side - Image */}
        <div className="hidden lg:block h-full basis-1/2">
          <img
            src="/src/assets/login-background.jpg" // Replace with your image
            alt="Login"
            className="object-cover h-full"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex p-8 lg:p-12 w-full h-full items-center justify-center basis-1/2">
          <div className="w-full max-w-md">
            <div className="mb-6">
              <img src="/src/assets/wave.png" alt="wave-emoji" className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold text-left text-black">
              Welcome to Outfitted!
            </h2>
            <div className="text-gray-700 my-4">How do i get started outfitted at?</div>

            <div className="w-[26px] border-b-4 border-gray-300 my-4"></div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>

              <div className="divide-y divide-solid"></div>

              {/* Google Sign-in */}
              <button
                type="button"
                className="w-full mt-2 bg-red-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300"
              >
                <FaGoogle className="mr-2" /> {/* Google icon */}
                Sign in with Google
              </button>

              {/* Other Links */}
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm">Don&apos;t have an account? </span>
                <a
                  href="/register"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
