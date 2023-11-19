import React from 'react';

const Project = () => {
    let data=[
        {
            title:"Alice text",
            img:"/project/project.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.containing Lorem Ipsum passages, and more recently.......",
        },
        {
            title:"Alice text",
            img:"/project/project.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.containing Lorem Ipsum passages, and more recently.......",
        },
        {
            title:"Alice text",
            img:"/project/project.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.containing Lorem Ipsum passages, and more recently.......",
        },
        {
            title:"Alice text",
            img:"/project/project.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.containing Lorem Ipsum passages, and more recently.......",
        },
        ];
    return (
        <div>
            <h1 className="text-2xl font-bold">Our Project</h1>
               <p className="py-4">Our Project and development</p>
            <div className="container flex flex-wrap justify-between">
            {
                    data.map((item,i) => {
                        return( 
                            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={item['img']} alt="Album"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item['title']}</h2>
                                <p>{item['short']}</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">More...</button>
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

export default Project;