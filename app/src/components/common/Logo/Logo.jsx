import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import { signOut } from 'next-auth/client';
import LogoImg from './images/logo.svg';

const Logo = () => (
    <Container className='d-flex align-items-center justify-content-between'>
      <Image src={LogoImg} alt="Home page" width={150} height={100} className="logo" />
      <Button onClick={() => signOut({})}>Выйти из аккаунта</Button>
    </Container>
  );

export default Logo;
