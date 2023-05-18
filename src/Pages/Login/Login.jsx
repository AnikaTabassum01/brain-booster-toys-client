import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
       
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center pb-8">Login...!</h1>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary normal-case" type="submit" value="Login" />
                        </div>

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider text-slate-400">OR</div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="normal-case btn hover:bg-transparent bg-transparent hover:text-black text-black flex items-center justify-center"> Login with Google</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Brain Booster Toys? <Link className='text-blue-500 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    
    );
};

export default Login;