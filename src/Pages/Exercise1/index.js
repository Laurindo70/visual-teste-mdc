import React, { useState } from 'react';
import { Button, Select, Form, Input } from 'antd';
import api from '../../Utils/api';

const { Option } = Select;

function Exercise1() {

   const [result, setResult] = useState(0);

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/1', {
            "number1": +values.number1,
            "number2": +values.number2,
            "operation": values.operation
          }).then(
            (Response) => {
               console.log(Response.data);
               setResult(Response.data.result);
            }
         )
      } catch (error) {
         alert('teste');
         console.log(error.response.data);
      }
      
   };

   return (
      <div className='container'>
         <h1>Exercise 1</h1>
         <p>Carry out operations.</p>
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
               label="Number 1"
               name="number1"
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
               label="Number 2"
               name="number2"
               rules={[
                  {
                     required: true,
                     message: 'Please input Number 2!',
                  },
               ]}
            >
               <Input type='number' />
            </Form.Item>

            <Form.Item
               label="Operation"
               name="operation"
               rules={[
                  {
                     required: true,
                     message: 'Please input Operation!',
                  },
               ]}
            >
               <Select
                  placeholder="Select the Operation"
                  onChange={() => {}}
                  allowClear
               >
                  <Option value="+">Sum</Option>
                  <Option value="-">subtraction</Option>
                  <Option value="/">division</Option>
                  <Option value="*">Multiplication</Option>
               </Select>
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
               <Input disabled={true} value={result} />
            </Form.Item>
         </Form>
      </div>
   );
}

export default Exercise1;