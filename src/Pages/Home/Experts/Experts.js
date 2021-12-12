import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts=[
        {name: 'Sakib', expertise:'All-Rounder', img: mechanic1},
        {name: 'Mushtaq', expertise:'Engine-Expert', img:mechanic2},
        {name: 'Mofiz', expertise:'Color-Design-Expert', img:mechanic3},
        {name: 'Salim', expertise:'Gear-Expeet', img:mechanic4},
        {name: 'Akbar', expertise:'Engine-Expert', img:mechanic5},
    ]
    return (
        <div className="container" id="experts">
            <h2 className="text-primary mt-3">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert=><Expert key={expert.name} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;