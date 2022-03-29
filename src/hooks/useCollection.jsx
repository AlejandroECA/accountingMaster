import React, {useEffect, useState} from 'react'

//DB
import {db} from '../fireBase/config'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'


export const useCollection = (c) =>{
    const [document,setDocument] = useState(null)

    useEffect(() => {
        let ref = collection(db,c)
        const unsub = onSnapshot(ref,(snapshot) => {
            let result = []
            snapshot.docs.forEach((doc) => {
                result.push({
                    ...doc.data(), id:doc.id
                })
                setDocument(result)
            })
        })
        return () => unsub()
    },[c])

    return { document }
}