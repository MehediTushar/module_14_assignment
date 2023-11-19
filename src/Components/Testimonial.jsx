import React from 'react';

const Testimonial = () => {
    let data=[
        {
            title:"Alice text",
            img:"/testimoni/testi.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            title:"Alice text",
            img:"/testimoni/testi.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            title:"Alice text",
            img:"/testimoni/testi.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            title:"Alice text",
            img:"/testimoni/testi.jpg",
            short:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
        ];
    return (
        <div>
            <h1 className="text-2xl font-bold">Testimonial Details</h1>
               <p className="py-4">Build Your Career and features</p>
            <div className="container flex flex-wrap justify-between">
            {
                    data.map((item,i) => {
                        return(
                            <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item['img']} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item['title']}</h2>
                                <p>{item['short']}</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Learn more</button>
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

export default Testimonial;