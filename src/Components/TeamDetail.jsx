import React from 'react';

const TeamDetail = () => {
    let data=[
        {
            Name:"John hash",
            img:"/team/avatar-.jpg",
            email:"John@mailton.com",
            phone:"+0912834",
        },
        {
            Name:"John hash",
            img:"/team/avatar-.jpg",
            email:"John@mailton.com",
            phone:"+0912834",
        },
        {
            Name:"John hash",
            img:"/team/avatar-.jpg",
            email:"John@mailton.com",
            phone:"+0912834",
        },
        {
            Name:"John hash",
            img:"/team/avatar-.jpg",
            email:"John@mailton.com",
            phone:"+0912834",
        }
        ];
    return (
        <div>
            <h1 className="text-2xl font-bold">Team Details</h1>
               <p className="py-4">Introducing Our Team</p>
            <div className="container flex flex-wrap justify-between">
                {
                    data.map((item,i) => {
                        return(
                            <div key={i} className="card w-96 glass mb-4">
                            <figure><img src={item['img']} alt="car!"/></figure>
                                <div className="card-body">
                                    <h4 className="card-title">{item['Name']}</h4>
                                    <p>{item['name']}</p>
                                    <p>{item['email']}</p>
                                    <p>{item['phone']}</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TeamDetail;