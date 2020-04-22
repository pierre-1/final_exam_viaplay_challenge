import React from 'react'
import axios from 'axios'

export default function ShowViaplayShows() {

    const getShows = async () => {
        let response = await axios.get(
            'https://content.viaplay.se/pc-se/serier/samtliga',

        )
        response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    }

    return (
        <div className=''>
            
        </div>
    )
}
