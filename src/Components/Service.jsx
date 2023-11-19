import React from 'react';

const Service = () => {
    let data=[
        {
            title:"Build Large Project",
            img:"/service/service.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting.......",
        },
        {
            title:"Build Large Project",
            img:"/service/service.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting.......",
        },
        {
            title:"Build Large Projec",
            img:"/service/service.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting.......",
        },
        {
            title:"Build Large Project",
            img:"/service/service.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting.......",
        },
        ];
    return (
        <div>
            <h1 className="text-2xl font-bold">Our Service</h1>
               <p className="py-4">Service details</p>
            <div className="container flex flex-wrap justify-between">
            {
                    data.map((item,i) => {
                        return( 
                        <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{item['title']}</h2>
                            <p>{item['short']}</p>
                        </div>
                        <figure><img src={item['img']} alt="Shoes" /></figure>
                        </div>   )
                    })
            }
            </div>
            
        </div>
    );
};

export default Service;