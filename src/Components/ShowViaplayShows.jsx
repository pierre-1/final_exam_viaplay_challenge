import React, {useState} from 'react'
import axios from 'axios'

export default function ShowViaplayShows() {
    let viaplayShows
    const [] = useState('')

    const getShows = async dispatch => {
        let response = await axios.get(
            'https://content.viaplay.se/pc-se/serier/samtliga',
            {}
        )
        renderShows(response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
    }


    return (
        <>
        <div className=''>
            
        </div>
        </>

    )
    return <div>{viaplayShows}</div>
}
