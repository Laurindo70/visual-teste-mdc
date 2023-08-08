import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import api from '../../Utils/api';

function Exercise6(){
   const [result, setResult] = useState("");

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/6', {
            "sentence": values.phrase
          }).then(
            (Response) => {
               console.log(Response.data);
               setResult(Response.data.counterVowelSetence);
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };

   return (
      <div className='container'>
         <h1>Exercise 6</h1>
         <p>The number of vowels in a string.</p>
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
               label="Phrase"
               name="phrase"
               rules={[
                  {
                     required: true,
                     message: 'Please input word!',
                  },
               ]}
            >
               <Input type='text' />
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

export default Exercise6;