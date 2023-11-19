import React from 'react';

const RegistrationDetails = () => {
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please Input Valid Information</p>
                        </div>
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="text" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="number" className="input input-bordered" required />
                            </div>
                             <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                               
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ReType Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                               
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            </div>
                        </div>
            </div>
            
        </div>
    );
};

export default RegistrationDetails;