import React from 'react'
import { DatePicker } from 'antd';
import styled from 'styled-components';

function DatePickerComponent() {
    return (
        <DatePickerStyled>
            <DatePicker  />
        </DatePickerStyled>
    )
}
const DatePickerStyled = styled.div`
    .ant-picker{
        border-radius: 4px;
        :hover{
            /* border: rgba(0,0,0,0); */
        }
    }
    .ant-picker-input > input::placeholder{
        color: rgba(0,0,0,0.8);
    }

    .anticon {
        color: rgba(0,0,0,0.7);
        :hover{
            cursor: pointer;
        }
    }
`;
export default DatePickerComponent
