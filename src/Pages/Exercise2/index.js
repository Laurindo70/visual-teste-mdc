import React, { useState } from 'react';
import { Button, Form, Input, Table } from 'antd';
import api from '../../Utils/api';

function Exercise2() {

   const [numbers, setNumbers] = useState([]);
   const [result, setResult] = useState("");

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/2', {
            "number": +values.number,
          }).then(
            (Response) => {
               console.log(Response.data);
               let number = [];
               for(let i = 0; i < Response.data.numbersPrime.length; i++){
                  number.push({
                     key: Response.data.numbersPrime[i],
                     numbers: Response.data.numbersPrime[i]
                  });
               }
               setNumbers(number);
               setResult(Response.data.isPrime ? 'Number is prime.' : 'Number is not prime.');
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };

   const columns = [
      {
         title: 'Numbers',
         dataIndex: 'numbers',
         key: 'number',
      },
   ];
   return (
      <div className='container'>
         <h1>Exercise 2</h1>
         <p>Verify number is prime</p>
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
                  Calculate
               </Button>
            </Form.Item>

            <Form.Item>
               <Input disabled={true} type='text' value={result} />
            </Form.Item>

            <Table dataSource={numbers} columns={columns} pagination={false} />
         </Form>
      </div>
   );
}

export default Exercise2;