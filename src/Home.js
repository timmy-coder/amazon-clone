import React from 'react'
import './home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

            <div className="home__row">
            <Product 
                id="1"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={13.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucwsRpPJs1xlMSH25a3YBF5EjRsXhoPbhEg&usqp=CAU"          
            
            />

            <Product 
                id="2"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={13.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU"            
            
            />
            </div>

            <div className="home__row">
            <Product 
                id="1234"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={11.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU"  
            
            />
            <Product 
                id="1234"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={11.96}
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU"  
            
            />

            <Product 
                id="1234"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={11.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiV0vjdIt1oPtrVWLGQ0FGcF_73sKJ4b30g&usqp=CAU"  
            
            />
            </div>

            <div className="home__row">
            <Product 
                id="1234"
                title="A loving headphones for song, music, radio and all sort of things...Yeeeeee"
                price={11.96}
                rating={5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2f4EYbjCyMdkTwRizFwK-61CwXzs2wJT23Q&usqp=CAU"        
            
            />
            </div>
        </div>
    )
}

export default Home
