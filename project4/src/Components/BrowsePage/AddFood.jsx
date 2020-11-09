import React from 'react';
import {Button, Input, Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons'

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Fruit
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          Vegetable
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          Meat
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

function AddFood(){
    return(
        <div className="add-food">
            <form>
                <h3>Add a Food</h3>
                <p>Name:</p>
                <Input />
                <p>Category:</p>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Choose Category <DownOutlined />
                    </a>
                </Dropdown>
                <br />
                <Button>Add Food</Button>
            </form>
        </div>
    )
}

export default AddFood;