import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import api from '../../Utils/api';

function Exercise8(){
   const [result, setResult] = useState("");

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/8', {
            "initialCapital": +values.initialCapital,
            "interestRate": +values.interestRate,
            "monthsInvestment": +values.investmentTime
          }).then(
            (Response) => {
               console.log(Response.data);
               setResult(Response.data.valueFinalInvestment);
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };

   return (
      <div className='container'>
         <h1>Exercise 8</h1>
         <p>Final value of an investment.</p>
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
               label="Initial capital"
               name="initialCapital"
               rules={[
                  {
                     required: true,
                     message: 'Please input Initial capital!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               label="Interest rate"
               name="interestRate"
               rules={[
                  {
                     required: true,
                     message: 'Please input Interest rate!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               label="Time(months)"
               name="investmentTime"
               rules={[
                  {
                     required: true,
                     message: 'Please input investment time!',
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

export default Exercise8;