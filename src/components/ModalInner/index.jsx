import React, { useState } from 'react'
import { Container, H3, H4, P, Socials, SuccessContainer } from './styles'
import Form from '../Form'
import { ReactComponent as Happy } from './happy_face.svg'
import { ReactComponent as Twitter } from './icon_twitter.svg'
import { ReactComponent as IG } from './icon_instagram.svg'
import { ReactComponent as FB } from './icon_facebook.svg'

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join our newsletter to be notified of when pre-release tickets for our
      first ever world tour go on sale.
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
)

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Yay! We're so excited!</H4>
    <P>
      We hope you are too. In the meantime you can follow us on social meida to
      keep up to date:
    </P>
    <Socials>
      <IG />
      <Twitter />
      <FB />
    </Socials>
  </SuccessContainer>
)

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const handleSuccess = () => {
    setShowSuccess(true)
  }
  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}

export default ModalInner
