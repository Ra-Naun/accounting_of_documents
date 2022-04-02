import { Container } from 'react-bootstrap';
import Image from 'next/image';
import LogoImg from './images/logo.svg';

const Logo = () => (
    <Container>
      <Image src={LogoImg} alt="Home page" width={150} height={100} className="logo" />
    </Container>
  );

export default Logo;
