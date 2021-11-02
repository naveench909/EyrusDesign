import React from 'react'

function Filter() {
    return (
        <div style={{height:"32px" , width :"122px" , backgroundColor:"#FFFFFF" , marginLeft: "8px" ,padding:'4px', border:'1px solid #D9D9D9' ,borderRadius:"4px" , display:'flex' , alignItems:"center"  , display:'flex' , justifyContent:"space-between"}}>
            <span>Filter</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7515 2.40625H2.24838C1.86557 2.40625 1.6265 2.82344 1.81869 3.15625L5.45307 9.33438V13.0938C5.45307 13.3703 5.67494 13.5938 5.94994 13.5938H10.0499C10.3249 13.5938 10.5468 13.3703 10.5468 13.0938V9.33438L14.1828 3.15625C14.3734 2.82344 14.1343 2.40625 13.7515 2.40625ZM9.42807 12.4688H6.57182V10.0312H9.42963V12.4688H9.42807ZM9.57807 8.77188L9.42963 9.03125H6.57025L6.42182 8.77188L3.32338 3.53125H12.6765L9.57807 8.77188Z" fill="#595959"/>
            </svg>

        </div>
    )
}

export default Filter
