import React from 'react';
import '../../Styles/SelectRole.css'
import RecipeReviewCard from './RecipeReviewCard';
import { playerDescription, serviceProviderDescription, moreDescriptionForPlayer, moreDescriptionForServiceProvider } from '../../Constants/Description'

const SelectRole = () => {

    return (
        <>
            <div style={{ backgroundImage: 'url("pexels-pixabay-46798.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: '',border:'2px solid black',height:"835px" }}>
                <p className='text-center text-xl g-font'>Select the role you wish to register for on BookMySport</p>
                <div className="flex justify-center items-center w-1/2 mx-auto my-9">
                    <div className="mx-5">
                        <RecipeReviewCard role={"Player"} description={playerDescription} moreDescription={moreDescriptionForPlayer} image={"player.jpg"} redirect={"player"}/>
                    </div>
                    <div className="mx-5">
                        <RecipeReviewCard role={"Serviceprovider"} description={serviceProviderDescription} moreDescription={moreDescriptionForServiceProvider} image={"serviceprovider.jpg"} redirect={"sp"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectRole;
