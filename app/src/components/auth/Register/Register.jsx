import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';

const RegisterPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    name: '',
    secondName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: '',
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
    //
  }, [router]); // success error

  const submitHandler = e => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      secondName,
      phoneNumber,
      role,
    };
    axios.post('/api/admin/new-user', { /* token */ ...userData });

    // dispatch(registerUser(userData));
  };

  const onChange = e => {
      const value = e.target.name === 'role' ? e.target.text : e.target.value;
      setUser({ ...user, [e.target.name]: value });
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-3">
      <div className="wrapper">
        <div>
          <Form className="shadow-lg py-3 px-4 bg-white" onSubmit={submitHandler} style={{ minWidth: '360px' }}>
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
                <Form.Control size="lg" type="text" name="name" placeholder="Имя" value={name} onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                <Form.Control size="lg" type="text" placeholder="Фамилия" name="secondName" value={secondName} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                <Form.Control size="lg" type="text" placeholder="Телефон" name="phoneNumber" value={phoneNumber} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                <Form.Control size="lg" type="text" placeholder="Email" name="email" value={email} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput5">
                <Form.Control size="lg" type="password" placeholder="Пароль" name="password" value={password} onChange={onChange} />
            </Form.Group>

            <Form.Group>
            <DropdownButton className="mb-4 register__dropdown" size="lg" id="dropdown-basic-button" title={role || 'Роль в системе'}>
                <Dropdown.Item onClick={onChange} name="role">Администратор</Dropdown.Item>
                <Dropdown.Item onClick={onChange} name="role">Работник склада</Dropdown.Item>
                <Dropdown.Item onClick={onChange} name="role">Экспедитор</Dropdown.Item>
                <Dropdown.Item onClick={onChange} name="role">Продавец</Dropdown.Item>
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
