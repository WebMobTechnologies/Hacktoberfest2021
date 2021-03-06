import React from 'react'
import {InternalLink, P, LinkContainer, H1} from '../../styles'


const Home = () => (
  <>
    <H1>
      Random Name Picker
    </H1>
    <P>Enter a list and Spin the wheel to get a random Name each time. Ready to get started?</P>

    <LinkContainer>
      <InternalLink to="/create-list">Create a list</InternalLink>
      {localStorage.length > 0 && <InternalLink to="/list">See my existing list</InternalLink>}
    </LinkContainer>
  </>
)
export default Home
