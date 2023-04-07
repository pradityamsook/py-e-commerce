// import { useState } from "react";
import type { FC } from "react";
import LoginController from "../components/controller/login.controller";
// import { Button, Checkbox, Col, Form, Input, Row } from "antd";
// import { useRecoilState } from "recoil";
// import { loggedState } from "../state/recoil_state";
// import { redirect, useNavigate } from "react-router-dom";

// const LoginPage: FC = (): any => {
//     const [logged, setLogged] = useRecoilState(loggedState);
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const navigate = useNavigate();

//     const onFinish = (values: any) => {
//         console.log("success", values);
//     }

//     const handleSubmit = (event: any) => {
//         let isLogged = false;

//         if (event.username && event.password) {
//             isLogged = true;
//         }
//         if (isLogged === true) {
//             localStorage.setItem("isLogged", `${isLogged}`);
//             navigate("/dashboard");
//         }
//     }

//     return (
//         <div style={{ margin: "17rem 0 0 17rem", maxHeight: 1200 }}>
//             <Row>
//                 <Col span={6} offset={6}>
//                     <Form
//                         name="complex-form"
//                         onFinish={handleSubmit}
//                         initialValues={{ remember: true }}
//                     >
//                         <Form.Item
//                             label="Username"
//                             name="username"
//                             rules={[{ required: true, message: 'Please input your username!' }]}
//                         >
//                             <Input />
//                         </Form.Item>
//                         <Form.Item
//                             label="Password"
//                             name="password"
//                             rules={[{
//                                 required: true,
//                                 message: "Please input your password"
//                             }]}
//                         >
//                             <Input.Password />
//                         </Form.Item>
//                         <Form.Item name="remember" valuePropName="checked" style={{ paddingLeft: "5rem", textAlign: "center" }}>
//                             <Checkbox>Remember me</Checkbox>
//                             <Button type="primary" htmlType="submit">
//                                 Submit
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

const LoginPage: FC =  () => {
    return (
        <>
            <LoginController />
        </>
    )
}

export default LoginPage;