import React from 'react'
import { useGlobalContext } from '../../context'
import Progress from './Progress/progress'
import EmailSubscription from './emailSubs/emailSubscription'

function Body() {

    const { emailSubscription , progress , menuValue } = useGlobalContext();

    let data;
    if(menuValue === "Project Setting"){
        data = emailSubscription;
    }else{
        data = progress;
    }
    const headerContent = data[0];
    const bodyContent = data[1];

    return (
        <div className="mainContainer">    
            {data===emailSubscription ? <EmailSubscription header={headerContent} body={bodyContent}/> : <Progress header={headerContent} body={bodyContent} /> }
        </div>
    )
}

export default Body
