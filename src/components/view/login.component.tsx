import type { FC } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { authState, isLoggedInSelector } from "../models/authen.model";
import { useRecoilState } from "recoil";

const LoginComponent: FC = (): any => {
    const [isLogged, setIsLogged] = useRecoilState(authState);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        // let isLogged = false;
        setIsLogged(false);

        if (event.username && event.password) {
            setIsLogged(true);
        }
        console.log(isLogged);
        if (isLogged === true) {
            localStorage.setItem("isLogged", `${isLogged}`);
            navigate("/dashboard");
        }
    }

    return (
        <div style={{ margin: "17rem 0 0 17rem", maxHeight: 1200 }}>
            <Row>
                <Col span={6} offset={6}>
                    <Form
                        name="complex-form"
                        onFinish={handleSubmit}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                required: true,
                                message: "Please input your password"
                            }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked" style={{ paddingLeft: "5rem", textAlign: "center" }}>
                            <Checkbox>Remember me</Checkbox>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default LoginComponent;