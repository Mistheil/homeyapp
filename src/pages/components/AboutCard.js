import React from 'react';
import "./AboutCard.css";

import { FaGithubAlt } from 'react-icons/fa'


export default function AboutCard({ img, nama, nim, github, insta, steam }) {
    return (
        <div className="containerProfile">
            <img src={img} alt="" className="profPic" />
            <div className="containerDataProfile">
                <h3 id="nama">   {nama} </h3>
                <p id="nim">       {"NIM : " + nim} </p>
                <div className="containerSosmed">

                    <a href={`https://github.com/${github}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithubAlt className="sosmedIcon" size="40px" />
                        
                    </a>
                </div>
            </div>
        </div>
    )
}
