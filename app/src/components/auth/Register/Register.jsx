import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Form, DropdownButton, Dropdown } from "react-bootstrap";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: "",
    secondName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: ""
  });

  const { name, email, password, secondName, phoneNumber, role } = user;

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
      name,
      email,
      password,
      secondName,
      phoneNumber,
      role,
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
          <Form className="shadow-lg py-3 px-4" onSubmit={submitHandler} style={{minWidth: '360px'}}>
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
                <Form.Control size="lg" type="text" placeholder="Имя" value={name} onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="Фамилия" value={secondName} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="Телефон" value={phoneNumber} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="text" placeholder="Email" value={email} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control size="lg" type="password" placeholder="Пароль" value={password} onChange={onChange} />
            </Form.Group>

            <Form.Group>
            <DropdownButton className="mb-4 register__dropdown" size="lg" id="dropdown-basic-button" title="Роль в системе">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </Form.Group>

            <Button size="lg" className="w-100" variant="primary" type="submit">Отправить заявку</Button>

            <p className="my-3 register__rules">
            Нажимая кнопку, вы даете <Link href="/personal">согласие на обработку персональных данных</Link> и подтверждаете, 
что ознакомились с <Link href="/policy">политикой конфидециальности</Link>
            </p>

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

export default RegisterPage;