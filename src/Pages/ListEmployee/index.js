import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {Table,Button,Modal,Input,Form} from 'antd';
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'

const employees =
[
    {
        id : 1,
        name :"nguyen zan A",
        age : 15
    },
    {
        id : 12,
        name :"nguyen zan B",
        age : 17
    },
    {
        id : 11,
        name :"nguyen zan C",
        age : 18
    },
    {
        id : 13,
        name :"nguyen zan D",
        age : 10
    },
    {
        id : 14,
        name :"nguyen zan E",
        age : 6
    },
    {
        id : 15,
        name :"nguyen zan F",
        age : 8
    },
    {
        id : 16,
        name :"nguyen zan G",
        age : 9
    },
]
const columns = [
    {
        key: 'id',
        title : 'Id',
        dataIndex :'id'
    },
    {
        key: 'name',
        title : 'Name',
        dataIndex :'name'
    },
    {
        key: 'age',
        title : 'Age',
        dataIndex :'age'
    },
    {
        key :'action',
        title : 'Action',
        render : (record)=>
        {
            return<>
            <EditOutlined/>
            <DeleteOutlined style={{color : "orange",marginLeft : 12}}/>
            </>
        }
    }
]

const Wrapper = styled.div`
    width: 100%;
    max-width: 70%;
    margin: 20px auto;

`
const ListEmployee = () => {
    const [isEdit,setEdit] = useState(false);
    const [isCreate,setCreate] = useState(false);
    const [employee,setemployee] = useState([]);
    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem('data'));
        if(temp)
        {
            setemployee(temp);
        }
        else
        {
            setemployee(employee);
            
        }
    },employee);
    // useEffect(() => {
    //     localStorage.setItem('data',JSON.stringify(employee));
    // }, []);
    

    const handleDeleteEmployee = (id) =>{
        const temp = [...employee]

        const new_data = temp.filter((item)=>item.id !== id)
        setemployee(new_data)
    }
    const handleEditEmployee = (item) =>
    {
        const data = [...employee]
        data.forEach((element)=>{
            if(item.id === element.id)
            {
                element.name = item.name;
                element.age = item.age;
                return;
            }
        })
        setemployee(data);

    }
    // tạo modal create cho employee
    const showModalCreate = ()=>
    {
        setCreate(true);
    }
    const onCancelCreate = ()=>
    {
        setCreate(false);
    }
    
    const handleCreateEmployee =(values) =>{
        const newEmployee = 
        {
            id: values.id,
            name : values.name,
            age : values.age
        }
        const temp = [...employee,newEmployee]   
        localStorage.setItem('data',JSON.stringify(employees));
        setemployee(temp);
        setCreate(false);
    }
    const onCreateFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <Wrapper>
            <Button onClick={showModalCreate}>Create Employee</Button>
                <Modal open={isCreate} title = "Create Employee" onCancel={onCancelCreate}>
                    {/* Input Employee */}
                    <Form name='Create Employee' labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={handleCreateEmployee} onFinishFailed={onCreateFail}>
                        <Form.Item label='Id' name='id' rules={[{required : true,message:'Zui lòng nhập Id cho pé!'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='Name' name='name' rules={[{required : true,message:'Zui lòng nhập tơn cho pé!'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label='Age' name='age' rules={[{required : true,message:'Zui lòng nhập tủi cho pé!'}]}>
                            <Input/>
                        </Form.Item>
                        <Button htmlType='submit'>
                            Save
                        </Button>
                    </Form>
                </Modal>
            
            <Table
            columns={columns}
            dataSource={employee}
            rowKey="id"
            />
        </Wrapper>
    )
}

export default ListEmployee


