import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


export const Testimonials = () => {

const slider = useRef();
let tx = 0;

const slideForward = () => {
    tx -= 25;
    if (tx === -75){
        tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}

const slideBackward = () => {
    tx += 25;
    if (tx === 25){
        tx = -50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;



}

return (
    <div className='testimonials'>
        <img src={next_icon} className = 'nextBtn' onClick={slideForward}></img>
        <img src={back_icon} className = 'backBtn' onClick={slideBackward}></img>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="userInfo">
                            <img src={user1}></img>
                            <div>
                                <h3>William White</h3>
                                <span>ASU, USA</span>
                            </div>
                            </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi alias ipsum necessitatibus dolorum, nemo similique
                                ipsa tempora possimus sit dolore rem temporibus dicta pariatur
                                nam. Sapiente, excepturi. Harum, quod suscipit</p>
                            
                        </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="userInfo">
                            <img src={user2}></img>
                            <div>
                                <h3>William White</h3>
                                <span>ASU, USA</span>
                            </div>
                            </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi alias ipsum necessitatibus dolorum, nemo similique
                                ipsa tempora possimus sit dolore rem temporibus dicta pariatur
                                nam. Sapiente, excepturi. Harum, quod suscipit</p>
                            
                        </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="userInfo">
                            <img src={user3}></img>
                            <div>
                                <h3>William White</h3>
                                <span>ASU, USA</span>
                            </div>
                            </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi alias ipsum necessitatibus dolorum, nemo similique
                                ipsa tempora possimus sit dolore rem temporibus dicta pariatur
                                nam. Sapiente, excepturi. Harum, quod suscipit</p>
                            
                        </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="userInfo">
                            <img src={user4}></img>
                            <div>
                                <h3>William White</h3>
                                <span>ASU, USA</span>
                            </div>
                            </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Commodi alias ipsum necessitatibus dolorum, nemo similique
                                ipsa tempora possimus sit dolore rem temporibus dicta pariatur
                                nam. Sapiente, excepturi. Harum, quod suscipit</p>
                            
                        </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
