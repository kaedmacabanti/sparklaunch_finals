import img1 from '../../images/bionichand.jpg'; 
import img2 from '../../images/minipupper.jpg'; 
import img3 from '../../images/lawnbot.jpg'; 
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

function CardItem (props){
    return (
      <>
          <li className="cards__item z-10  shadow-md shadow-blue-500/40 overflow-hidden">
                  <Link classname="cards__item__link" href={props.path}  style={{ textDecoration: 'none'}}>
                  <figure className="cards__item__pic-wrap object-cover" data-category={props.label}>
                      <Image src={props.src} alt="" height="500" width="700" className='object-cover '/>
                  </figure>
                  <div className="cards__item__info">
                      <h5 className='flex'>{props.name} <p className="cards__item__text mx-4">Funded {props.funded}%</p></h5>
                      <p className="cards__item__text">{props.text}</p> 
                      
                  </div>
                  </Link>
          </li>
      </>
    )
  }
  
const SlimCardItem = ({ src, name, text, label, funded }) => (
    <div className=" shadow-md shadow-blue-500/40  relative h-full flex flex-row rounded overflow-hidden">
      <Image src={src} alt={name} className="object-cover   h-full w-80" />
      <label className="absolute bottom-0 left-3 bg-[#1f98f4] text-white p-2 text-xs">
        {label}
      </label>
      <div className="p-4">
        <h5 className="flex gap-10">
          <p className="text-blue-500">{name}</p>
          <p className="">Funded {funded}%</p>
        </h5>
        <p>{text}</p>
      </div>
    </div>
  );
  
  


const CategoryLaunched = () => {
  return (
    <div className="py-24 mx-[5rem]">
    <h3 className="text-left mb-4 ml-4">Launched Projects</h3>
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      <div className="row-span-2 col-span-2">
        <CardItem
          src={img1}
          name="Bionic Hand"
          text='A semper elit pretium dignissim. Aliquam a enim ex. Mauris ut aliquam augue. Donec lacinia, sapien sed efficitur faucibus,  sapien sed efficitur faucibus, eros libero ultrices  '
          label="Technology"
          path="/projectpage"
          funded="96"
        />
      </div>
      <div className="col-span-2">
        <SlimCardItem
          src={img2}
          name="Mini Pupper"
          text="nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est Temporibus autem quibusdam et aut"
          label="Technology"
          path="/projectpage"
          funded="82"
        />
      </div>
      <div className=" col-span-2">
        <SlimCardItem
          src={img3}
          name="Lawn Bot"
          text="stias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est "
          label="Creative"
          path="/projectpage"
          funded="76"
        />
      </div>
    </div>
  </div>
  )
}

export default CategoryLaunched
