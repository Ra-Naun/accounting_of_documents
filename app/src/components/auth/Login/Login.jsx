import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const { login, password } = user;

//   const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    // if (success) {
    //   router.push("/login");
    // }

    // if (error) {
    //   toast.error(error);
    //   dispatch(clearErrors());
    // }
  }, [router]); //success error

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      login,
      password,
    };

    // dispatch(registerUser(userData));
  };

  const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-3">
      <div className="wrapper">
        <div>
          <Form className="shadow-lg pt-3 pb-3 px-4 bg-white" onSubmit={submitHandler} style={{minWidth: '360px'}}>
              <div className="d-flex justify-content-center">
              <img
                className="my-5 mx-5"
                src="/logo.png"
                alt="Logo Flagman"
                width={216}
                height={56}
            />
              </div>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="Логин" value={login} onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="password" placeholder="Фамилия" value={password} onChange={onChange} />
            </Form.Group>

            <Button size="lg" className="w-100" variant="primary" type="submit">Войти</Button>

            <div className="text-center mt-3 mb-3">
            <Link className="link-primary" href="/register">Не удается войти?</Link>
            </div>

            <div className="text-center">
            <Link className="link-primaty d-block" href="/register">Зарегистрироваться</Link>
            </div>


            {/* <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              {loading ? <ButtonLoader /> : "REGISTER"}
            </button> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;