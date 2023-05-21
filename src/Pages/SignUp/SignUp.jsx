import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const SignUp = () => {

    useTitle('Sign up')

    const { createUser, loading, setLoading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                createdUser.displayName = name;
                createdUser.photoURL = photo;
                setUser(createdUser)
                setSuccess('Sign-up successful')
                setLoading(false)
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
                    setLoading(false)
                    setError('This account already exist. Please login')
                } else if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                    setLoading(false)
                    setError('Invalid email address')
                }
                console.log(errorMessage)
            })
    }

    return (

        <>
            {
                loading 
            }

        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center pb-8">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <p className='text-orange-600'>{error}</p>
                        <p className='text-green-600'>{success}</p>
                        <div className="form-control mt-6">
                           
                            <button className="btn btn-primary normal-case">Sign up</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already Have an Account? <Link className='text-blue-600 font-bold' to='/login'>Log In</Link></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;