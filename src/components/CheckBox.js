import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
    // 한개 스타일 넣을 때 : {styles.checkbox}
    // 두개이상의 스타일 넣을 때 : {`${styles.checkbox} ${styles.blabla}`} 이게 귀찮으니까 classNames 라이브러리이용
    // classNames 라이브러리이용시 , {cx('checkbox', 'blabla')}  하면됨.
  return (
    <div className={cx('checkbox')}>
      <label>
          <input type="checkbox" checked={checked} {...rest}/>
          <div className={cx('icon')}>{checked ? <MdCheckBox className={cx('checkbox')}/> : <MdCheckBoxOutlineBlank />}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;