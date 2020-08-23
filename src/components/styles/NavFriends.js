import React from "react";

export default function NavFriends(props) {
    return(
        <div>
            {props.data.map((friend) => (
                <div>
                    <div className='img'>
                        <img src={friend.img} />
                    </div>

                    <div className='name'>
                        {friend.name}
                    </div>
                </div>
            ))}
        </div>
    )
}