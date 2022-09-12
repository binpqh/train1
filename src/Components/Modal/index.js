import React,{useState, useEffect} from 'react'
// import PropTypes from 'prop-types'
import { Modal,Form,Input,Button } from 'antd' 

const ModalPopup = ({title, item, isCreate, onCancel, onFinish, handleFail}) => {

    const [data, setData] = useState(item);

    const handleFinish = (values) => {
        onFinish(values)
    }
    useEffect(() => {
        item && setData(item)
    }, [item]);


  return (
    <>
    <Modal open={isCreate} title = {title} onCancel={onCancel}            
                footer={null}
                >
                    {/* { console.log("dwdw", data.id)} */}
                    <Form name={title} labelCol={{ span: 4 }} initialValues={data} wrapperCol={{ span: 16 }} onFinish={handleFinish} onFinishFailed={handleFail}>
                        <Form.Item label='Id' name='id'  rules={[{required : true,message:'Zui lòng nhập Id cho pé!'}]}>
                            <Input  type="text" />
                        </Form.Item>
                       <Form.Item label='Name' name='name' rules={[{required : true,message:'Zui lòng nhập tơn cho pé!'}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Age' name='age' rules={[{required : true,message:'Zui lòng nhập tủi cho pé!'}]}>
                            <Input />
                        </Form.Item>
                        <Button htmlType='submit' >
                            Save
                        </Button>
                    </Form> 
                </Modal>
    </>
  )
}

ModalPopup.propTypes = {}

export default ModalPopup