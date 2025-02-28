import React from 'react';
import './adoptions.css'

const images = [
    require('../images/tricitykittyrescue.jpg'),
    require('../images/popp.jpg'),
    require('../images/littlelivesmatter.jpg'),
    require('../images/bfhs.jpg'),
];

function AdoptionsComponent() {
    return (
        <section>
            <h1>Adoptions Component section</h1>
            <div class="container">
                <div class="rescue">
                    <h2><img class="rescue-image" src={images[0]} alt="Tri City Kitty Rescue Logo" />
                    Tri City Kitty Rescue</h2>
                    <p>Kennewick, WA</p>
                    <p>(509)366-4102</p>
                </div>
                <div class="rescue">
                    <h2><img class="rescue-image" src={images[1]} alt="POPP Logo" />
                    Pet Over Population Prevention (POPP)</h2>
                    <p>Pacso, WA</p>
                    <p>(509)380-5326</p>
                </div>
                <div class="rescue">
                    <h2><img class="rescue-image" src={images[2]} alt="LLM Logo" />
                    Little Lives Matter Small Animal Rescue</h2>
                    <p>Pasco, WA</p>
                    <p>(509)850-0023</p>
                </div>
                <div class="rescue">
                    <h2><img class="rescue-image" src={images[3]} alt="BFHS Logo" />
                    Benton Family Humane Society</h2>
                    <p>Kennewick, WA</p>
                    <p>(509)374-4235</p>
                </div>
            </div>

        </section>
    );
}

export default AdoptionsComponent;