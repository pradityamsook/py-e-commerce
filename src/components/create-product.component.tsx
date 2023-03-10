import { Button, Form, Input, Switch, Upload, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import { useEffect, useState } from "react";
import { createProduct } from "../services/product.service";

const CreateProductComponent = () => {

    const [product, setProduct] = useState<any>({})
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
    }, []);

    // const fetchData = () => {
    //     fetchProductById(productId)
    //         .then((res) => {
    //             setProduct(res?.[0]);
    //             const data = res?.[0];

    //             form.setFieldsValue(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


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
                alert("success");
            })
            .catch((error) => {
                console.log(error);
            })
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

    return (
        <>
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
                <Form.Item name="sale_active" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item name="image_url" style={{ display: "none" }}>
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateProductComponent;