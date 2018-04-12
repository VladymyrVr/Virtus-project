import React from 'react';

import './CustomCard.css';
import SettingsButton from "../Buttons/SettingsButton";

//img
import Michelle from '../../../assets/img/michelle.png';
import John from '../../../assets/img/john.png';
import Dominic from '../../../assets/img/dominic.png';
import Jolene from '../../../assets/img/jolene.png';
import Lyall from '../../../assets/img/lyall.png';



const CustomCard = data => {
    var ImgSrc;
    if(data.user === 'michelle') {
        ImgSrc = Michelle
    }
    else if (data.user === 'dominic') {
        ImgSrc = Dominic
    }
    else if(data.user === 'john') {
        ImgSrc = John
    }
    else if(data.user === 'jolene') {
        ImgSrc = Jolene
    }
    else if(data.user === 'lyall') {
        ImgSrc = Lyall
    }

    return (
        <div className="CardItem">
            <div className="UserAvatar">
                <img src={ImgSrc} alt={data.name}/>
            </div>
            <div className="CardContent">
                <p className="Title">{data.title}</p>
                <div className="DetailInfo">
                    <p className='Company'>{data.company}</p>
                    <p className='Price'>{'$'+data.price}</p>
                </div>
            </div>
            <SettingsButton/>
        </div>

    )
};


export default CustomCard;