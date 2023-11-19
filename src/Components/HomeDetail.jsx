import React from 'react';

const HomeDetail = () => {
    let data=[
        {
            title:"Increment Your Customers Loyality and Satification!",
            img:"/font.jpg",
            short:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
        }
        ];

    let workdata=[
        {
            title:"grow Business",
            img:"/worklist/w1.JPG",
            short:"learn more",
        },
        {
            title:"Improve brand",
            img:"/worklist/w2.JPG",
            short:"learn more",
        },
        {
            title:"Improve brand",
            img:"/worklist/w2.JPG",
            short:"learn more",
        }
    ];
    let workdatacount=[
        {
            
            img:"/countdata/c1.JPG",
            
        },
        {
            
            img:"/countdata/c2.JPG",
            
        },
        {
            
            img:"/countdata/c3.JPG",
           
        },
        {
            
            img:"/countdata/c4.JPG",
           
        }
    ];
    let workpf=[
        {
            title:"App Design",
            img:"/font.jpg",
            short:"lorem some text...",
        },
        {
            title:"App Development",
            img:"/font.jpg",
            short:"lorem some text...",
        }
       
    ];
    return (
        <div className='container'>
           <div className="hero min-h-screen bg-base-200">
            {
                 data.map((item,i) => {
                    return(
                        <div key={i} className="hero-content flex-col lg:flex-row-reverse">
                        <img src={item['img']} alt="cart!" className="max-w-sm rounded-lg shadow-2xl"/>
                        <div>
                        <h1 className="text-2xl font-bold">{item['title']}</h1>
                        <p className="py-4">{item['short']}</p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>

                    )
                  
        
                   })

            }
  
                </div>

                <nav className='flex space-x-0'>
                    <div className="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
                <br></br>
               <div className="grid grid-flow-col gap-4">
               {
                    workdata.map((item,i) => {
                        return(
                            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{item['title']}</h2>
                                    <figure><img src={item['img']} alt="Shoes" /></figure>
                                    <p>{item['short']}</p>
                                    
                                </div>
                                
                                </div>
                        )
                            
                    })
                }
               </div>
        <br></br>
        <div className="grid grid-cols-4 gap-0">
               {
                    workdatacount.map((item,i) => {
                        return(
                            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body"> 
                                    <figure><img  src={item['img']} alt="Shoes" /></figure>
                                   
                                </div>
                                </div>
                        )
                            
                    })
                }
               </div>
               <h1 className="text-2xl font-bold">Feature Project</h1>
               <p className="py-4">We provide perfect solution</p>
               <div className="grid grid-cols-6 gap-4">
               
               {
                    workpf.map((item,i) => {
                        return(
                            <div key={i} className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    
                                    <figure><img src={item['img']} alt="Shoes" /></figure>
                                    <h2 className="card-title">{item['title']}</h2>
                                    <p>{item['short']}</p>
                                    
                                </div>
                                
                                </div>
                        )
                            
                    })
                }
               </div>
                {/* <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content text-left">
                            <div className="max-w-md text-left">
                            <h1 className="text-5xl font-bold">About</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                </div> */}
              

        </div>
    );
};

export default HomeDetail;