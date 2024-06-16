import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    background: url('${Background}');
    background-size: cover;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.408px;
    text-align: left;
    margin-left: 25px;
    margin-bottom: 5px;
    color: #eeeeee;
`;

export const Input = styled.input`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;   
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    color: #ffffff;
    padding-left: 25px;
    margin-bottom: 34px;
    border: none;
    outline: none;
`;





