import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Button, Form, message, Spin, Tabs} from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';

const {TabPane} =Tabs;

const Profile = () => {

    const [loading,setLoading]=useState(false);
    const user = JSON.parse(localStorage.getItem('sheyresume-user'));
    const onfinish = async (values) => {
        setLoading(true);
        try{
          const result = await axios.post('api/users/update',{...values,_id:user._id});
          localStorage.setItem('sheyresume-user',JSON.stringify(result.data));
          setLoading(false);
          message.success("Profile Updated successfully");
        }catch(error){
          setLoading(false);
           message.error("register failed");
        }
      };
  return (
    <DefaultLayout>
        {loading && <Spin size="large"/>}
       <div className='update-profile'>
       <h4><b>Update Profile</b></h4>
       <hr/>
            <Form layout='vertical' onFinish={onfinish} initialValues={user}>
            <Tabs defaultActiveKey="1">
        <TabPane tab="Personal Info" key="1">
            <PersonalInfo/>
        </TabPane>
        <TabPane tab="Skill and Education" key="2">
            <SkillsEducation/>
        </TabPane>
        <TabPane tab="Experience / Projects" key="3">
           <ExperienceProjects/>
        </TabPane>
            </Tabs>
            <Button htmlType="submit">UPDATE</Button>
            </Form>
       </div>
  </DefaultLayout>
);
}

export default Profile

