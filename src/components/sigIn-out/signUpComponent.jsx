import React from 'react'


//components
import { SignForm } from './signFormComponent';



export const LogInOut = () => {

    return(
        <div>
            <SignForm
              isSignUp={true}
              title={'Sign Up'}
            />
        </div>
    )
}