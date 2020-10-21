import React from 'react'
import Product from '../Product/Product'
import "./home.css"
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2020/APDHF/AMZ_PD20_CA_EN_GW002_Day2_Gifting_08_1500x300._CB403916581_.jpg" alt="home-image" />
                
                <div className="home__row">
                    <Product 
                        id={1}
                        title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id={2}
                        title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                            id={4}
                            title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                            price={29.99} 
                            image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                            rating={5}
                        />
                    <Product 
                        id={3}
                        title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id={6}
                        title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id={7}
                        title='Echo Studio - High-fidelity smart speaker with 3D audio and Alexa' 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/G/15/handmade/2020/Gateway/CA_HM_Desktop_CatCard_1x-2._SY304_CB405327166_.jpg" 
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
