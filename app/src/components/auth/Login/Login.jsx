import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import { signIn } from "next-auth/client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      login,
      password,
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/";
    }
  };

  const isDisable = !login || !password || loading
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
                <Form.Control size="lg" type="text" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button disabled={isDisable} size="lg" className="w-100" variant="primary" type="submit">{loading ? "...Загрузка" : "Войти"}</Button>

            <div className="text-center mt-3 mb-3">
              <Link className="link-primary" href="/register">Не удается войти?</Link>
            </div>

            <div className="text-center">
              <Link className="link-primaty d-block" href="/register">Зарегистрироваться</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;