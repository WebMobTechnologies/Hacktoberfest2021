import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 5rem;
`

export const Wrapper = styled.div`
  text-align: center;
`

export const Title = styled.h2`
  font-family: 'GT Flexa Trial', sans-serif;
  font-weight: 900;
  font-size: 72px;
  word-break: break-word;
  color : white;

  @media (max-width: 720px) {
    font-size: 42px;
  }
`

export const ProgressContainer = styled.div`
  progress[value] {
    width: 100%;
    border: 2px solid #000;
    height: 32px;
    margin-bottom: 32px;
    color: white;
  }

  progress[value]::-webkit-progress-bar {
    background: transparent;
  }

  progress[value]::-webkit-progress-value {
    background: white;
  }
`

export const SuccessMessage = styled.div`
  margin-top: 32px;
`
