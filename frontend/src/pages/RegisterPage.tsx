import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/client';

const RegisterPage = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const response = await api.post('/auth/register', data);
            localStorage.setItem('token', response.data.accessToken);
            window.location.href = '/dashboard';
        } catch (err: any) {
            setError('root', { message: err.response?.data?.message || 'Registration failed' });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message as string}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select {...register('role')} className="mt-1 block w-full p-2 border border-gray-300 rounded">
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                    {errors.root && <p className="text-red-500 text-sm text-center">{errors.root.message}</p>}
                    <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
