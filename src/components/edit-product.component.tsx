import { useEffect, useState } from "react";
import type { FC } from "react";
import { fetchProductById, updateProduct } from "../services/product.service";
import { Alert, Button, Form, Input, Select, Switch, Upload, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import { Content } from "antd/es/layout/layout";

type TEditProductComponent = {
    productId: number;
}

const EditProductComponent = ({ productId }: TEditProductComponent) => {
    const [product, setProduct] = useState<any>({})
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetchProductById(productId)
            .then((res) => {
                setProduct(res?.[0]);
                const data = res?.[0];

                form.setFieldsValue(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }


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
        }

        updateProduct(values)
            .then((res) => {
                
            })
            .catch((error) => {
                console.log(error);
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

    return (
        <>
                <div style={{ padding: "0 0 0 12.5rem" }}>
                    <ImgCrop rotate >
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
                    <Form.Item name="product_id" style={{ display: "none" }} rules={[{ required: true }]}>
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item name="sale_active" valuePropName="checked" style={{ padding: "0 0 0 12.5rem" }}>
                        <Switch />
                    </Form.Item>
                    <Form.Item name="image_url" style={{ display: "none" }}>
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('gender') === 'other' ? (
                                <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            ) : null
                        }
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

export default EditProductComponent;