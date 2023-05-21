import Aos from "aos";


Aos.init()

const OurBlog = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000"className="mb-12">
            <h2 className='text-center text-5xl font-bold text-orange-600 my-8 pt-4'>Our Blog..!</h2>
            <p className="text-center text-xl font-bold mb-6 text-gray-500">Home of Learning Fun for Every Age and Stage! Building someone amazing? Discover even more 
            <br />
            ways to give your kids the building blocks they need to succeed with our free tips and tools 
            <br />
            written by experts, teachers, and parents just like you!</p>
           <div className='grid grid-cols-4 gap-4  px-20' data-aos="fade-up"
     data-aos-duration="3000">          
          <div>
          <img className="rounded-2xl" src="https://www.learningresources.com/media/wysiwyg/home_lr/smarts-and-crafts.jpg" alt="" />
          <p className="text-xl font-bold text-blue-700 text-center">Math</p>
          </div>
           <div>
           <img className="rounded-2xl" src="https://www.learningresources.com/media/wysiwyg/home_lr/printables.jpg" alt="" />
           <p className="text-xl font-bold text-blue-700 text-center">Reading</p>
           </div>
           <div>
           <img className="rounded-2xl" src="https://www.learningresources.com/media/wysiwyg/home_lr/learning-at-home.jpg" alt="" />
           <p className="text-xl font-bold text-blue-700 text-center">STEM</p>
           </div>
           <div>
           <img className="rounded-2xl" src="https://www.learningresources.com/media/wysiwyg/home_lr/teachers-lounge.jpg" alt="" />
           <p className="text-xl font-bold text-blue-700 text-center">Motor Skill</p>
           </div>
           
           </div>

        </div>
    );
};

export default OurBlog;