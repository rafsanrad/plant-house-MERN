import { Link } from 'react-router'

const Card = ({plant}) => {
  const {_id,name,quantity,image,price,category}=plant || {} 
  //plant ta jodi na thake tahole empty dekhabe jaate application ta crash na kore.
  return (
    <Link
      to={`/plant/${_id}`}
      className='col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
            alt='Plant Image'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>Tree name : {name}</div>
        <div className='text-gray-500'>Category : {category}</div>
        <div className='text-gray-500 '>Quantity : {quantity}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold text-green-700'> Price : $ {price}</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
