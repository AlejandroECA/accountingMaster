import React from 'react'
import { 
    motion as a ,
} from "framer-motion";
import { 
    Grid,
    Paper,
    makeStyles,
    Button,
    Box,
    AnimatePresence
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
    }
};

const IntroContainer = styled(Box)`
    background-color: #EEEEEE;
    max-width: 500px;
    margin:auto;
    margin-top: 30vh;
    color: gray;

    
`


export const Intro = () =>{
    return(
        <a.div
            variants={introVariants}
            animate='animate'
            initial='initial'
            exit='exit'
        >
            <IntroContainer 
                boxShadow = {3} 
                sx={{borderRadius:10}}
            >
            <Grid 
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
             >
                <Grid 
                    item 
                    xs={8} 
                >
                    <div
                        style={{ margin: '20px'}}
                    >{intro}</div>
                </Grid>

                <Button 
                    variant="contained" 
                    href="/about"
                    style={{
                        margin:'10px',
                        marginBottom:'20px'
                    }}
                >
                    Know More
                </Button>
            </Grid>



            </IntroContainer>
        </a.div>
    )
}