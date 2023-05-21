import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-96">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src='https://s.yimg.com/uu/api/res/1.2/od6GA2JDzpJqIa5yfmhD6w--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/371f68e0-0391-11ed-b73f-4b112390d280.cf.jpg' className="w-full rounded-xl " />
                <div className="absolute flex items-center rounded-xl h-full left-0 top-0 space-y-7 pl-12  bg-gradient-to-r from-[#0d0741] to-[rgba(21, 21, 21, 0)] ">                 
                        
                        <p className='text-amber-300 font-bold text-3xl mt-40'>As the end of school approaches,
                        <br />
                         get ready to learn and play with our 
                         <br />
                         most interesting learning toys.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://twomamabears.com/wp-content/uploads/2021/09/educational-gift-ideas-for-3-year-olds.png' className="w-full" />

                <div className="absolute flex items-center rounded-xl h-full left-0 top-0 space-y-7 pl-12  bg-gradient-to-r from-[#0d0741] to-[rgba(21, 21, 21, 0)] ">                 
                        
                        <p className='text-amber-400 font-bold text-3xl mt-40'>As the end of school approaches,
                        <br />
                         get ready to learn and play with our 
                         <br />
                         most interesting learning toys.</p>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://m.media-amazon.com/images/I/71uTsfIBmOL.jpg' className="w-full" />

                <div className="absolute flex items-center rounded-xl h-full left-0 top-0 space-y-7 pl-12  bg-gradient-to-r from-[#0d0741] to-[rgba(21, 21, 21, 0)] ">                 
                        
                        <p className='text-amber-300 font-bold text-3xl mt-40'>As the end of school approaches,
                        <br />
                         get ready to learn and play with our 
                         <br />
                         most interesting learning toys.</p>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;