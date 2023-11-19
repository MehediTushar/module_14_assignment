import React from 'react';

const Subscribe = () => {
    return (
        <div>         
                <div className="join bg-green-300 text-base-content flex flex-col justify-center items-center p-8">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter!</h2>
                    <p className="text-green-900 mb-6">Stay updated with our latest news and updates.</p>
                    <div className="flex">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-full">Subscribe</button>
                    </div>
                    </div>
  
        </div>
    );
};

export default Subscribe;