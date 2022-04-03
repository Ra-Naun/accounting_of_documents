import { getSession } from "next-auth/client";

import Login from '../components/auth/Login/Login';

export default function LoginPage() {
  return (
    <Login/>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
