import React from 'react';

const ShopByAge = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold text-orange-600 my-8 pt-4'>Shop By Age</h2>
           <div className='grid grid-cols-5 px-20' data-aos="flip-left" >          
           <img src="https://www.learningresources.com/media/wysiwyg/home_lr/18mos.jpg" alt="" />
           <img src="https://www.learningresources.com/media/wysiwyg/home_lr/2years-v2_1.jpg" alt="" />
           <img src="https://www.learningresources.com/media/wysiwyg/home_lr/3-4years.jpg" alt="" />
           <img src="https://www.learningresources.com/media/wysiwyg/home_lr/5-7years.jpg" alt="" />
           <img src="https://www.learningresources.com/media/wysiwyg/home_lr/8up.jpg" alt="" />
           </div>

        </div>
    );
};

export default ShopByAge;