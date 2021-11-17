import React from 'react'
import { Input } from 'antd';
const { Search } = Input;
import styled from 'styled-components';

function SearchBar() {
    return (
        // <div style={{height:"32px" , width :"356px" ,border:'1px solid #D9D9D9' , backgroundColor:"#FFFFFF" , marginLeft: "28px" , borderRadius:"4px" , display:'flex' , justifyContent:'space-between'}}>
        //     <span></span>
        //     <div style={{height:"32px" , width:"32px" ,borderLeft:'1px solid #D9D9D9' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        //         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M14.2125 13.3516L10.1547 9.29375C10.7844 8.47969 11.125 7.48438 11.125 6.4375C11.125 5.18438 10.6359 4.00937 9.75156 3.12344C8.86719 2.2375 7.68906 1.75 6.4375 1.75C5.18594 1.75 4.00781 2.23906 3.12344 3.12344C2.2375 4.00781 1.75 5.18438 1.75 6.4375C1.75 7.68906 2.23906 8.86719 3.12344 9.75156C4.00781 10.6375 5.18438 11.125 6.4375 11.125C7.48438 11.125 8.47813 10.7844 9.29219 10.1562L13.35 14.2125C13.3619 14.2244 13.376 14.2338 13.3916 14.2403C13.4071 14.2467 13.4238 14.2501 13.4406 14.2501C13.4575 14.2501 13.4741 14.2467 13.4897 14.2403C13.5052 14.2338 13.5194 14.2244 13.5312 14.2125L14.2125 13.5328C14.2244 13.5209 14.2338 13.5068 14.2403 13.4912C14.2467 13.4757 14.2501 13.459 14.2501 13.4422C14.2501 13.4254 14.2467 13.4087 14.2403 13.3931C14.2338 13.3776 14.2244 13.3635 14.2125 13.3516ZM8.9125 8.9125C8.25 9.57344 7.37187 9.9375 6.4375 9.9375C5.50312 9.9375 4.625 9.57344 3.9625 8.9125C3.30156 8.25 2.9375 7.37187 2.9375 6.4375C2.9375 5.50312 3.30156 4.62344 3.9625 3.9625C4.625 3.30156 5.50312 2.9375 6.4375 2.9375C7.37187 2.9375 8.25156 3.3 8.9125 3.9625C9.57344 4.625 9.9375 5.50312 9.9375 6.4375C9.9375 7.37187 9.57344 8.25156 8.9125 8.9125Z" fill="#595959"/>
        //         </svg>
        //     </div>

        // </div>

        //     <Search placeholder="input search text" enterButton />
        <SearchBarStyled>
            <input type="text" placeholder="Search table" />
            <div className="searchIcon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2125 13.3516L10.1547 9.29375C10.7844 8.47969 11.125 7.48438 11.125 6.4375C11.125 5.18438 10.6359 4.00937 9.75156 3.12344C8.86719 2.2375 7.68906 1.75 6.4375 1.75C5.18594 1.75 4.00781 2.23906 3.12344 3.12344C2.2375 4.00781 1.75 5.18438 1.75 6.4375C1.75 7.68906 2.23906 8.86719 3.12344 9.75156C4.00781 10.6375 5.18438 11.125 6.4375 11.125C7.48438 11.125 8.47813 10.7844 9.29219 10.1562L13.35 14.2125C13.3619 14.2244 13.376 14.2338 13.3916 14.2403C13.4071 14.2467 13.4238 14.2501 13.4406 14.2501C13.4575 14.2501 13.4741 14.2467 13.4897 14.2403C13.5052 14.2338 13.5194 14.2244 13.5312 14.2125L14.2125 13.5328C14.2244 13.5209 14.2338 13.5068 14.2403 13.4912C14.2467 13.4757 14.2501 13.459 14.2501 13.4422C14.2501 13.4254 14.2467 13.4087 14.2403 13.3931C14.2338 13.3776 14.2244 13.3635 14.2125 13.3516ZM8.9125 8.9125C8.25 9.57344 7.37187 9.9375 6.4375 9.9375C5.50312 9.9375 4.625 9.57344 3.9625 8.9125C3.30156 8.25 2.9375 7.37187 2.9375 6.4375C2.9375 5.50312 3.30156 4.62344 3.9625 3.9625C4.625 3.30156 5.50312 2.9375 6.4375 2.9375C7.37187 2.9375 8.25156 3.3 8.9125 3.9625C9.57344 4.625 9.9375 5.50312 9.9375 6.4375C9.9375 7.37187 9.57344 8.25156 8.9125 8.9125Z" fill="#595959"/>
                </svg>
            </div>
        </SearchBarStyled>
    )
}

const SearchBarStyled = styled.div`
    height: 32px;
    width: 356px;
    border: 1px solid #D9D9D9; 
    background-color: #FFFFFF;
    border-radius: 4px;
    margin-left: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        border: transparent;
        outline: none;
        width: 321px;
        padding-left: 11px;
    }

    /* {height:"32px" , width:"32px" ,borderLeft:'1px solid #D9D9D9' , display:'flex' , alignItems:'center' , justifyContent:'center'} */
    .searchIcon{
        height: 32px;
        width: 32px;
        border-left: 1px solid #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

export default SearchBar
