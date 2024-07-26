import React from 'react'

const Cast = (props) => {
  console.log(props);
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-32 h-32'>
        {props.image ? (
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="Cast and Crew"
            className='w-full h-full rounded-full object-center object-cover'
          />
        ) : (
          <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-200">
            <span className="text-center text-gray-700">Cast and Crew</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cast;