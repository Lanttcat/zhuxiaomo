import * as React from 'react';
import classnames from 'classnames/bind';
import Input from '../../UI/Input/Input';
// @ts-ignore
import style from './Home.scss';

const cx = classnames.bind(style);

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <main className={cx('home')}>
        <div className={cx('search')}>
          <Input type={'text'} />
        </div>
        <div className={cx('album')}>
          图集
        </div>
        <nav className={cx('nav')}>
          按钮
        </nav>
      </main>
    );
  }
}

export default Home;
