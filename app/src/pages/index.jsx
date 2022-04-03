import { Container, Row, Card, Button } from 'react-bootstrap';
import { getSession } from "next-auth/client";

export default function Home() {
  return (
    <Container className="md-container">
      Home
    </Container>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session || !session.user.isActive) {
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
