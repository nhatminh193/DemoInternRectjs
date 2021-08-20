import { Form, Input, Button, Checkbox, Space } from 'antd';
import { connect } from "react-redux";
import history from "../../utils/history";
import { loginAction } from "../../redux/actions";
import "./login.css";
import loginBackground from '../../img/login-background.jpg'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 11 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 13 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function LoginPage(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onCancel = () => {
    history.push("/");
  };

const { login } = props;
  return (
    <>
      <div class="register-bg-container" style={{ backgroundImage: `url(${loginBackground})` }}>
        <div class="register-bg-overlay">
          <div className="loginNote">
            <h1 className="noteKS">Thế Giới Động Vật</h1>
            <h4 style={{ color: 'white' }}>
              Đem lại cho chúng ta những hiểu biết về động vật
            </h4>
          </div>

          <div class="register-form-container">
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={(values) => {
                    login(values); 
                  }}

                >
                  <Form.Item
                    label={<label>Email</label>}
                    name="email"
                    rules={[{ required: true, message: "Email chưa được nhập!" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label={<label>Mật khẩu</label>}
                    name="password"
                    rules={[
                      { required: true, message: "Mật khẩu chưa được nhập!" },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Space>
                      <Button type="primary" htmlType="submit">
                        Đăng nhập
                      </Button>
                      <Button type="primary" htmlType="button" onClick={onCancel}>
                        Huỷ
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>

          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (params) => dispatch(loginAction(params)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);