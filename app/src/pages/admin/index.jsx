import { Container, Row, Card, Button } from 'react-bootstrap';
import { getSession } from "next-auth/client";
import { ID_MATCHER } from '../../utils/cryptoUtils';

export default function Home() {
  return (
    <Container className="md-container">
     Admin
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log(session)
  if (!session || session.user.role_id !== ID_MATCHER['Администратор'] || !session.user.isActive) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
