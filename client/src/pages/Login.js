import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css';
import axios from "axios";

const Login = () => {
  const [loading,setLoading]= useState(false);

  const navigate = useNavigate();
  const onfinish = async (values) => {
    try{
      const user = await axios.post('api/users/login',values);
      message.success("login successful");
      localStorage.setItem("sheyresume-user",JSON.stringify(user.data));
      setLoading(false);
      navigate("/home");
    }catch(error){
      setLoading(false);
       message.error("login failed");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("sheyresume-user"))
    {
      navigate('/home');
    }
   
  })
  return (
    <div className="auth-parent">
            {loading && (<Spin size="large"/>)}
            {/* <h1 className="brand">Shey CV</h1> */}

      <Form layout="vertical" onFinish={onfinish}>
        <h1>Login</h1>
          <hr/>
            <Form.Item label="Username" name="username">
              <Input type="text" />
            </Form.Item>
        
          <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
      
        
          <div className="d-flex align-items-center justify-content-between">
            <Link to='/register'>Click Here To Register</Link>
          <Button
            type="primary"
            htmlType='submit'
          >
            LOGIN
          </Button>
          </div>
       
      </Form>
    </div>
  );
};

export default Login;
