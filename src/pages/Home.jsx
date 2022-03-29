import React, {useEffect, useState} from 'react'

//components
import {Intro} from '../components/home/homeIntroComponent'
import {DataBaseTest} from '../components/home/dabaBasetest'


export const Home = () => {

    return(
        <div>
            <Intro/>
            <DataBaseTest/>
        </div>
    )
}