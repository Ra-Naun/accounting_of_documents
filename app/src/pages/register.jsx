// import { getSession } from "next-auth/client";

import Register from '../components/auth/Register/Register';
import Layout from '../components/Layout/Default';

export default function RegisterPage() {
  return (
    <Layout title="Register">
      <Register/>
    </Layout>
  );
}
