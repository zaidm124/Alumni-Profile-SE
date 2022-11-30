import React from 'react'
import "./Conversation.css"

export default function Conversation() {

    return (
        <div className='conversation'>
            <div className="logo"><img src="./icon2.png" alt="" /></div>
            <div className="containor">
                <div className="message center">Conversation...</div>
                <div className="message right">Hi, I am Rohan</div>
                <div className="message left">Hi, I am Raj</div>
                {/* <div className="message center">Raju Joined the chat</div> */}
            </div>
            <div className="send">
                <form action="#" id="SendForm">
                    <input type="text" name="massageInp" id="massageInp" />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
