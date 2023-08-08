import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import api from '../../Utils/api';

function Exercise7() {
   const [result, setResult] = useState("");

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/7', {
            "grades1": +values.grade1,
            "grades2": +values.grade2,
            "grades3": +values.grade3
          }).then(
            (Response) => {
               console.log(Response.data);
               setResult(Response.data.average);
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };

   return (
      <div className='container'>
         <h1>Exercise 7</h1>
         <p>Student's grades.</p>
         <Form
            name="basic"
            labelCol={{
               span: 8,
            }}
            wrapperCol={{
               span: 16,
            }}
            style={{
               maxWidth: 600,
            }}
            initialValues={{
               remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
         >
            <Form.Item
               label="Grade 1"
               name="grade1"
               rules={[
                  {
                     required: true,
                     message: 'Please input grade 1!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               label="Grade 2"
               name="grade2"
               rules={[
                  {
                     required: true,
                     message: 'Please input grade 2!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               label="Grade 3"
               name="grade3"
               rules={[
                  {
                     required: true,
                     message: 'Please input grade 3!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               wrapperCol={{
                  offset: 8,
                  span: 16,
               }}
            >
               <Button type="primary" htmlType="submit">
                  Calculate
               </Button>
            </Form.Item>

            <Form.Item>
               <Input disabled={true} type='text' value={result} />
            </Form.Item>
         </Form>
      </div>
   );
}

export default Exercise7;