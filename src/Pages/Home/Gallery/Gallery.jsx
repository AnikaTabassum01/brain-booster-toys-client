import React from 'react';

const Gallery = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2'>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQln3xjFo0966TPS-AOITi7F3Q2nYsmSeWIqA&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHbqC_YPGRxtVGYn92bvgKQV6PtzuaB9DNg&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJGv03MMExHGWOPmu0-eHL4UXmyBcgJHgUg&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReP7WntsoyKhrPQHTEfBR3TVurKhKTefiorg&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNB0Qu6rrmTx6goRVzMRPWDyKgCJALi-KZAg&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8  shadow-xl">
                <figure><img src="https://m.media-amazon.com/images/I/713fz9X0IsL._SX355_.jpg" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzHkB10I8VL-CeHncbDmyoDsJdGD6XbhqrQ&usqp=CAU" /></figure>
            </div>
            <div className="card card-compact border border-slate-500 bg-base-100 py-8 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlPSPWv4TYtro4y-BXP6xOx9hpf8YLUw4oQ&usqp=CAU" /></figure>
            </div>
        </div>
    );
};

export default Gallery;