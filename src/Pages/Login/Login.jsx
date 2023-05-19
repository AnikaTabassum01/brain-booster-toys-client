import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {

    const { googleLoginUser, loginInUser, loading, setLoading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        loginInUser(email, password)
            .then(result => {
                const user = result.user;
                setLoading(false)
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/user-not-found).') {
                    setLoading(false)
                    setError('You have no account. Please Sign Up')
                } else if (errorMessage == 'Firebase: Error (auth/wrong-password).') {
                    setLoading(false)
                    setError('Wrong password')
                }
                console.log(errorMessage)
            })
    }
    const handleGoogleLogin = () =>{
        googleLoginUser()
        .then(result =>{
            const user = result.user;
            setLoading(false)
            setUser(user)
        })
        .catch(error =>{
            const errorMessage = error.message;
        })
    }

    return (
        <>
             {
                loading 
                
                }

                    <div className="hero min-h-screen">       
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
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
                            <button onClick={handleGoogleLogin} className="normal-case btn hover:bg-transparent bg-transparent hover:text-black text-black flex items-center justify-center"> Login with Google</button>
                        </div>
                        <p className='text-orange-500'>{error}</p>
                    </form>
                    <p className='my-4 text-center'>New to Brain Booster Toys? <Link className='text-blue-500 font-bold' to='/signup'>Sign Up</Link></p>
                </form>
            </div>
        </div>
        </>
    
    );
};

export default Login;