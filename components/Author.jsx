 import React from 'react';
 //import Image from 'next/image';

 //import { grpahCMSImageLoader } from '../util';

 //In GraphCMS the Author section is for this component where the picture is no more and other as Name and Bio
 // are still there
 const Author = ({ author }) => {
  return(
    <>
    <h1 className='text-white text-center whitespace-nowrap mt-20 font-bold text-2xl mb-3'>About Author</h1>
   <div className="text-center mb-8 p-8 relative rounded-lg bg-white ">
     {/* <div className="absolute left-0 right-0 -top-14">
        <Image
         unoptimized
         loader={grpahCMSImageLoader}
         alt={author.name}
         height="100px"
         width="100px"
         className="align-middle rounded-full"
         src={author.photo.url}
       /> 
     </div> */}
     <h3 className="text-black mb-2 text-xl font-bold">{author.name}</h3>
     <p className="text-black text-ls">{author.bio}</p>
   </div>
   </>
  )
    }

 export default Author;