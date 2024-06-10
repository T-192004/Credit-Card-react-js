// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
export const CreditCardContainer = styled.div`
  height: 100%;
  padding: 30px;
  width: 40%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const CardInputContainer = styled.div`
  height: 100%;
  padding: 40px;
  width: 60%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 700;
`
export const Card = styled.div`
  backgorund-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 30vh;
  box-shadow: 4px 4px 4px 8px #344e7a;
  border-radius: 20px;
  width: 30%;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content-center;
  align-self: center;
  position: absolute;
  top: 30%;
  background-size: cover;
`
export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border: none;
  box-shadow: #d3d9e0 2px 2px 4px 4px;
  width: 60%;
`
export const Input = styled.input`
  border: solid #475569 2px;
  border-radius: 4px;
  padding: 10px;
  margin: 8px;
  width: 80%;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const ParagraphCardDetails = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CardHeading = styled.h1`
  color: #344e7a;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 700;
`
