import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return <div>
          <div>
            <img src="https://images.immediate.co.uk/production/volatile/sites/4/2020/03/GettyImages-839673372-6be3dc6.jpg?quality=90&resize=940%2C400" />
          </div>
          <div className={s.descriptionBlock}>
            ava + description
          </div>
        </div>
}

export default ProfileInfo;