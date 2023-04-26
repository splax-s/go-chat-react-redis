import React from 'react'

import { Box, Heading, Center } from '@chakra-ui/react'

function Footer() {
  return (
    <Box padding={8}>
      <Center>
        <Heading size="sm">Powered by Redis and Golang with React</Heading>
      </Center>
      <Center>
        <Heading fontStyle={'italic'} size="sm" paddingTop={2}>
          Made in Nigeria by{' '}
          <a href="https://schadokar.dev" rel="noreferrer" target={'_blank'}>
            Shaka Ikhanoba
          </a>
        </Heading>
      </Center>
    </Box>
  )
}

export default Footer
