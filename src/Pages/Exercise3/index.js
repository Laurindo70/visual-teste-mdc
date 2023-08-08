import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import api from '../../Utils/api';

function Exercise3(){
   const [result, setResult] = useState(0);

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/3', {
            "number": +values.number
          }).then(
            (Response) => {
               console.log(Response.data);
               setResult(Response.data.factorialResult);
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };

   return (
      <div className='container'>
         <h1>Exercise 3</h1>
         <p>Factorial of a number.</p>
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
               label="Number"
               name="number"
               rules={[
                  {
                     required: true,
                     message: 'Please input Number 1!',
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
                  Verify
               </Button>
            </Form.Item>

            <Form.Item>
               <Input disabled={true} type='text' value={result} />
            </Form.Item>

         </Form>
      </div>
   );
}

export default Exercise3;