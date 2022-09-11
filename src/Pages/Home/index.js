import styled from 'styled-components';
import ListEmployee from '../ListEmployee'

const Title = styled.h1`
    font-size : 1.5em;
    text-align : center;
    color : grey;
`

const Home =() =>
{
    return (
        <div>
      <header>
        <Title>
            Home nè
        </Title>
      </header>
      <ListEmployee></ListEmployee>
    </div>
    )
}
export default Home;