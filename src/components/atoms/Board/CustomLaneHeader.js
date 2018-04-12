import React from 'react';
import './CustomLaneHeader.css';


const CustomLaneHeader = (data, sum) => {
    var Counter = 0;
    (sum = () => {
        var sumCounter = 0;
        for (let i = 0; i < data.cards.length; i++) {
            sumCounter += data.cards[i].price;
        }
        return Counter = sumCounter;
    })();

    return (
        <div className="CardHeader">
            <p className='TitleCard'>{data.header}</p>
            <div className="CardInfo">
                <p className="Project">{data.cards.length} {data.cards.length > 1 ? 'projects' : 'project'}</p>
                <p className="CounterSum">{'$'+Counter
                }</p>
            </div>

        </div>

    )
};


export default CustomLaneHeader;