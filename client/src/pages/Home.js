import React from 'react'
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/template/template1.png'
import template2img from '../resources/template/template2.png'
import template3img from '../resources/template/template3.png'
import '../resources/templates.css';

function Home() {
  const navigate = useNavigate()
  const templates = [
    {
      title:'Simple Resume',
      image: templateimg,
    },
    {
      title:'High Lighted Sections Resume',
      image: template2img,
    },
    {
      title:'Resume Format',
      image: template3img,
    },
  ];
  return (
   <DefaultLayout>
      <div className='row home'>
        {templates.map((template,index)=>{
          return (
          <div className='col-md-4'>
            <div className='template'>
              <img src={template.image} height='400' alt=""  style={{width:"100%"}}/>
                <div className='text'>
                <p>{template.title}</p>
                <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>              
                    </div>
              </div>
          </div>
          );
        })}
      </div>
   </DefaultLayout>
  )
}

export default Home