import React, { useState,useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { Button, Form, Input, message, Spin } from 'antd';
import '../resources/authentication.css';
import axios from 'axios';

const Register = () => {
  const [loading,setLoading]= useState(false);
  const navigate = useNavigate();
  const onfinish = async (values) => {
    setLoading(true);
    try{
      await axios.post('api/users/register',values);
      setLoading(false);
      message.success("registration successful");
      navigate("/login");
    }catch(error){
      setLoading(false);
       message.error("retgister failed");
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
      <Form layout="vertical" onFinish={onfinish}>
        <h1>Register</h1>
          <hr/>
            <Form.Item label="Username" name="username">
              <Input type="text" />
            </Form.Item>
        
          <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
         
          <Form.Item label="Confirm Password" name="cpassword">
              <Input type="cpassword" />
            </Form.Item>
         
      
        
            <div className="d-flex align-items-center justify-content-between">
            <Link to='/login'>Click Here To Login</Link>
          <Button
            type="primary"
            htmlType='submit'
          >
            Register
          </Button>
          </div>
       
      </Form>
    </div>
  );
};

export default Register;
