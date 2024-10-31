"use client";
import { useState } from "react";
import { useForm, FieldError, FieldErrorsImpl } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Íconos para mostrar/ocultar contraseña

const ErrorMessage = ({ error }: { error?: string | FieldError | FieldErrorsImpl<any> }) => {
  if (typeof error === 'string') {
    return <p className="text-sm text-red-600 dark:text-red-400">{error}</p>;
  } else if (error && 'message' in error) {
    return <p className="text-sm text-red-600 dark:text-red-400">{error.message}</p>;
  } else {
    return null;
  }
};

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  // Estados para controlar si mostrar u ocultar las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationRules = {
    name: {
      required: "El nombre es requerido",
      minLength: { value: 4, message: "El nombre debe tener al menos 4 caracteres" },
      maxLength: { value: 20, message: "El nombre puede contener hasta 20 caracteres" }
    },
    lastname: {
      required: "El apellido es requerido",
      minLength: { value: 4, message: "El apellido debe tener al menos 4 caracteres" },
      maxLength: { value: 20, message: "El apellido puede contener hasta 20 caracteres" }
    },
    password: {
      required: "La contraseña es requerida",
      minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" },
    },
    confirmPassword: {
      required: "La confirmación de contraseña es requerida",
      validate: (value: string) => value === password || "Las contraseñas no coinciden",
    },
    email: {
      required: "El email es requerido",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "El formato del email no es válido"
      }
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-green-600 md:text-2xl dark:text-white">
              Crear una cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>

              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("name", validationRules.name)} />
                <ErrorMessage error={errors.name?.message} />
              </div>

              {/* Apellido */}
              <div>
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("lastname", validationRules.lastname)} />
                <ErrorMessage error={errors.lastname?.message} />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("email", validationRules.email)} />
                <ErrorMessage error={errors.email?.message} />
              </div>

              {/* Contraseña */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", validationRules.password)} />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage error={errors.password?.message} />
              </div>

              {/* Confirmar Contraseña */}
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("confirmPassword", validationRules.confirmPassword)} />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <ErrorMessage error={errors.confirmPassword?.message} />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
