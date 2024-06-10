// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  CardInputContainer,
  Heading,
  Card,
  PaymentCard,
  Input,
  Paragraph,
  CardHeading,
  ParagraphCardDetails,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')
  const onChangeSetCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeSetHolderName = event => {
    setHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <Heading>Credit Card</Heading>
        <Card data-testid="creditCard">
          <ParagraphCardDetails>{cardNumber}</ParagraphCardDetails>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <ParagraphCardDetails>{holderName}</ParagraphCardDetails>
        </Card>
      </CreditCardContainer>
      <CardInputContainer>
        <PaymentCard>
          <CardHeading>Payment Method</CardHeading>
          <Input
            placeholder="Card Number"
            type="text"
            onChange={onChangeSetCardNumber}
          />
          <Input
            placeholder="Cardholder Name"
            type="text"
            onChange={onChangeSetHolderName}
          />
        </PaymentCard>
      </CardInputContainer>
    </AppContainer>
  )
}

export default CreditCard
