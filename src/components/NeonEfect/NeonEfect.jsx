import React from 'react';
import {Container, Ring,Img} from './NeonStyles'
import Image from "next/image";

const NeonEfect = () => {
  return (
    <>

    <Container>
      <Img>
      <Image
            width="300"
            height="300"
            src={'/images/wolfLogo.png'}
            alt="nextjs logo"
          />
      </Img>

    </Container>

    </>
  )
}

export default NeonEfect