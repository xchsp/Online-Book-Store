import React, { useState } from 'react';
import { Collapse } from 'antd';
import styles from './Checkbox.module.css';
import Checkbox from 'react-simple-checkbox';
const { Panel } = Collapse;

const CheckBox = props => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = value => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    //update this checked component to parent Component
    props.handleFilters(newChecked);
  };

  const renderCheckBox = () =>
    props.list &&
    props.list.map((value, index) => (
      <div key={index}>
        <Checkbox
          color='#037bfc'
          onChange={() => handleToggle(value._id)}
          type='checkbox'
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span className={styles.checkbox}>{value.name}</span>
      </div>
    ));
  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header='Book Category' key='1'>
          {renderCheckBox()}
        </Panel>
      </Collapse>
    </div>
  );
};

export default CheckBox;
