import styled from '@emotion/styled'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Icon = styled(ArrowLeftIcon)`
  width: 1.6rem;
  height: 1.6rem;
`

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)}>
      <ButtonContent>
        <Icon />
        <span>Back</span>
      </ButtonContent>
    </Button>
  )
}

export default BackButton
