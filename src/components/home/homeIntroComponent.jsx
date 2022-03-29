import React from 'react'
import { 
    motion as a ,
} from "framer-motion";
import {Link} from 'react-router-dom'

//components
import {CardComponent} from './pageCard-component'

//data
import img from '../../data/img/image-from-rawpixel-id-3917908-jpeg.jpg'

//Icon 
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const intro = 'Quis amet id quis laboris commodo exercitation quis. Id dolore dolor pariatur ipsum aliqua dolore aliqua magna non adipisicing nisi aliqua reprehenderit. Velit elit velit deserunt amet aute nisi incididunt laboris cillum ut aliquip. Commodo labore laboris ullamco incididunt sint dolor ea. Ullamco dolor eu velit consequat dolor consequat.'

const introVariants = {
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type:'spring',
        // stiffness:120,
        // staggerChildren: 0.5,
      },
    },
    initial: {
      x: 2000,
    },
    exit:{
        x:-2000,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    },
    initialLog:{
        x:-2000,
    },
    exitLog:{
        x:2000,
        transition: {
            ease: 'easeInOut',
            duration: 0.5,
        }
    },
    // whileHover:{
    //     scale: 1.2,
    //     transition: { duration: 0.5 },
    // }
    whileTap:{ scale: 0.9 }
};




export const Intro = () =>{

    return(
        <div>
        <a.div
            variants={introVariants}
            animate='animate'
            initial='initial'
            exit='exit'
            style={{
                paddingTop:'15vh',
                paddingLeft:'20px'
            }}
        >
            <CardComponent
                img = {window.innerWidth > 780?img:null}
                cardText={window.innerWidth > 500?intro:'Best acounting services'}
                // buttonText='Know more'
            />
        </a.div>
        <a.div
            variants={introVariants}
            animate='animate'
            initial='initialLog'
            exit='exitLog'
            // whileHover='whileHover'
            whileTap='whileTap'
            style={{
                paddingTop:'100px',
                paddingLeft:'45vw'
            }}
        >
            <Link
                to='/log'
            >
                <BsFillArrowRightCircleFill size='50px' color='#26BDBD'/>
                <p>Sign In</p>
            </Link>
        </a.div>
        </div>
    )
}