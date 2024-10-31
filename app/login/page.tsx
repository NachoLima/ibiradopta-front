"use client"; // Esto fuerza el renderizado en el cliente

import React from 'react';
import { useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Login Data:', data);
    // Aquí puedes manejar el inicio de sesión, como enviar los datos al backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl text-green-600 font-bold text-center mb-6">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo de Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              {...register('email', {
                required: 'El correo es obligatorio',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'El formato del correo no es válido',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Campo de Contraseña */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              type="password"
              className={`w-full px-3 py-2 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 caracteres',
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="w-full text-white bg-green-600 hover:bg-white-500 focus:ring-4 focus:outline-none focus:ring-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
