import { Button, Form, Input, Modal, Switch, Upload, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { Content } from "antd/es/layout/layout";
import { RcFile } from "antd/es/upload";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/product.service";

const CreateProductComponent = () => {
    const [product, setProduct] = useState<any>({})
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [modal, contextHolder] = Modal.useModal();
    const navigate = useNavigate();
    let secondsToGo = 2;

    useEffect(() => {
    }, []);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = (values: any) => {
        if (fileList?.[0]?.originFileObj) {
            values.image = fileList?.[0]?.originFileObj;
            console.log(values);
        }

        createProduct(values)
            .then((res) => {
                if (res) {
                    countDown();
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                navigate("/dashboard");
            });
    };

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const countDown = () => {
        const instance = modal.success({
          title: 'Successful'
        });
    
        const timer = setInterval(() => {
          secondsToGo -= 1;
          instance.update({
            content: `${secondsToGo} second.`,
          });
        }, 1000);
    
        setTimeout(() => {
          clearInterval(timer);
          instance.destroy();
        }, secondsToGo * 1000);
    };

    return (
        <>
            <Content>
                <div style={{ padding: "0 0 0 12.5rem" }}>
                    <ImgCrop rotate>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                        // onPreview={onPreview}
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                    </ImgCrop>
                </div>
                
                <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item name="name" label="Product name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="sale_active" valuePropName="checked" style={{ padding: "0 0 0 12.5rem" }}>
                        <Switch />
                    </Form.Item>
                    <Form.Item name="image_url" style={{ display: "none" }}>
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                        {contextHolder}
                    </Form.Item>
                </Form>
            </Content>
            
        </>
    );
}

export default CreateProductComponent;