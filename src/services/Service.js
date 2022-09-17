
import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

const Service = () => {

    const { notes, setNotes } = useContext(DataContext);

    const getData = async (req, res) => {
        const respnse = await req.get({
            count: notes.length,
            data: notes
        })
    }

    // const getData = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve({
    //             count: notes.length,
    //             data: notes
    //         })
    //     });
    // }
}

export default Service