import React, { useState } from 'react';
import { Button, Form, Input, Table } from 'antd';
import api from '../../Utils/api';

function Exercise5() {

   const [numbers, setNumbers] = useState([]);

   async function onFinish(values) {
      try {
         await api.post('/api/Exercise/5', {
            "number": +values.number,
         }).then(
            (Response) => {
               let number = [];
               for (let i = 0; i < 10; i++) {
                  number.push({
                     key: Response.data.numbersResult[i],
                     number: Response.data.numbersResult[i],
                     table: i + 1
                  });
               }
               setNumbers(number);
            }
         )
      } catch (error) {
         console.log(error.response.data);
      }
   };
   const columns = [
      {
         title: 'Table',
         dataIndex: 'table',
         key: 'table',
      },
      {
         title: 'Numbers',
         dataIndex: 'number',
         key: 'number',
      }
   ];

   return (
      <div className='container'>
         <h1>Exercise 5</h1>
         <p>The table of number, from 1 to 10.</p>
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

            <Table dataSource={numbers} columns={columns} pagination={false} />
         </Form>
      </div>
   );
}

export default Exercise5;