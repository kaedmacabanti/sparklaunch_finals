import React from 'react'; 
import img1 from '../../images/rhswebtoon.jpg';
import img2 from '../../images/cruise.jpg';
import img3 from '../../images/bionichand.jpg';
import img4 from '../../images/islandskies.jpg'; 
import img5 from '../../images/minipupper.jpg';
import Image from 'next/image';
import Link from 'next/link';
//import { projects } from './projects';

function CardItem(props) {
  return (
    <>
        <li className="cards__item z-10  shadow-md shadow-blue-500/40 overflow-hidden">
                <Link classname="cards__item__link " href={props.path} style={{ textDecoration: 'none'}}>
                <figure className="cards__item__pic-wrap object-cover" data-category={props.label}>
                    <Image src={props.src} alt="" height="500" width="700" className='object-cover'/>
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


function Launched() {

  return (

    <div className='cards mt-[3rem]'>
        <h4 className='flex mx-[5rem]'>Launched Projects</h4>
            
            <div className='cards__container'>
              <div className='cards__wrapper w-screen'>
                <ul className='flex w-full px-[5rem] mb-[2rem]'>
                    <CardItem 
                    src={img1}
                    name="Refund High School"
                    text="Find out what happens to our heroine in her otherworldly experience on a school in the afterlife"
                    label="Creative"
                    path="/projectpage/Refund_High_School/"
                    funded= "100"/>

                    <CardItem 
                    src={img2}
                    name="Random Cruise Ship"
                    text="Travel in a Private Cruise!"
                    label="Community"
                    path="/projectpage/Random_Cruise_Ship/"
                    funded= "100"/>
                </ul>

                <ul className='flex w-full px-[5rem]'>
                    <CardItem 
                    src={img3}
                    name="Bionic Hand"
                    text="Giving a 'hand' to the amputees and the born hand-less"
                    label="Technology"
                    path="/projectpage/Bionic_Hand/"
                    funded= "100"/>
                    

                    <CardItem 
                    src={img4}
                    name="PuffPals"
                    text="A wholesome life simulator game where you can collect, farm, customize and explore new lands with cute and fluffy PuffPals!"
                    label="Creative"
                    path="/projectpage/PuffPals/"
                    funded= "100"/>

                    <CardItem 
                    src={img5}
                    name="Mini Pupper"
                    text="A mini robot puppy ready to be your companion!"
                    label="Technology"
                    path="/projectpage/Mini_Pupper"
                    funded= "100"/>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Launched;
