import React from 'react'
import "./Data.css"

const Data = [
    {
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        Tag: "Maaz",
        Channel: "Maaz YT",
        Followers: "300k"
    },
    {
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        Tag: "Mazhar",
        Channel: "Mazhar YT",
        Followers: "150k"
    },
    {
        image: "https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        Tag: "Muteeb",
        Channel: "Muteeb YT",
        Followers: "1Million"
    }
]

const ChannelData = () => {
    return (

        <div className="container">

            {Data &&  Data.map((data) =>
                <div className='child'>
                    <img className='img' src={data.image} alt="" />
                    <h3 className='Heading'>{data.Tag}</h3>
                    <div className="info">
                        <span>Channel : {data.Channel}</span>
                    </div>
                    <br />
                    <div className="info">
                        <span>Follwers :{data.Followers}</span>
                    </div>
                </div>
            
            )
            }
        </div>

    )
}

export default ChannelData