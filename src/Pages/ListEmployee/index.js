import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Table, Button, Modal } from 'antd';
import ModalPopup from '../../Components/Modal';
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


const Wrapper = styled.div`
    width: 100%;
    max-width: 70%;
    margin: 20px auto;

`
const ListEmployee = () => {
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [employee,setemployee] = useState([]);
    const [employeeEdit,setEmployeeEdit] = useState({});
    useEffect(() => {
        const res = JSON.parse(localStorage.getItem('data'));
        if(res)
        {
            setemployee(res);
        }
        else
        {
            setemployee(employees);           
        }
    },[employee]);
    // useEffect(() => {
    //     localStorage.setItem('data',JSON.stringify(employee));
    // }, []);
    
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
                <EditOutlined onClick={()=>{showModal(record)}} />
                <DeleteOutlined onClick={()=>handleDeleteEmployee(record.id)} style={{color : "orange",marginLeft : 12}}/>
                </>
            }
        }
    ]
    
    const handleDeleteEmployee = (id) =>{
        Modal.confirm(
            {
                title :"Are u sure?",
                okText :'Sure',
                okType : 'danger',
                onOk : ()=>
                {
                    const temp = [...employee]
                    const new_data = temp.filter((item)=>item.id !== id)
                    localStorage.setItem('data',JSON.stringify(new_data));
                    setemployee(new_data)
                }
            }
        )
        
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
        localStorage.setItem('data',JSON.stringify(data));

    }
    //edit employee
    // tạo modal create cho employee
    
    const showModal = (record)=>
    {
        setIsOpenModal(true);
        setEmployeeEdit(record);
    }
    const offModal = ()=>
    {
        setIsOpenModal(false);
    }
    
    const handleCreateEmployee =(values) =>{
        const newEmployee = 
        {
            id: values.id,
            name : values.name,
            age : values.age
        }
        const temp = [...employee]
        temp.push(newEmployee);
        localStorage.setItem('data',JSON.stringify(temp));
        setemployee(temp);
        
    }
    const handleFinish = (values) =>{
       const isEdit = employee.find((item) => item.id = values.id)
        if(isEdit)
        {
            handleEditEmployee(values);
        }
        else
        {
            handleCreateEmployee(values);
        }
        setIsOpenModal(false)
    }

    return (
        <Wrapper>
            <Button onClick={showModal}>Create Employee</Button>
                {
                    isOpenModal && <ModalPopup isCreate={isOpenModal} item={employeeEdit} title = "edwq" onCancel={offModal} onFinish={handleFinish}>
                    </ModalPopup>
                }
            <Table
            columns={columns}
            dataSource={employee}
            rowKey="id"
            />
        </Wrapper>
    )
}

export default ListEmployee


