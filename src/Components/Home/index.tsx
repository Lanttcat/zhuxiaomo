import * as React from 'react';
import classnames from 'classnames/bind';
import Input from '../../UI/Input/Input';
import Album from '../../UI/Album/';
import logo from '../../logo.svg';
// @ts-ignore
import style from './Home.scss';

const cx = classnames.bind(style);

const images = [
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
];

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <main className={cx('home')}>
        <div className={cx('album')}>
          <Album size={400} column={4} images={images}/>
        </div>
        <div className={cx('search')}>
          <Input type={'text'} size={'500px'} icon={'search'}/>
        </div>
        <nav className={cx('nav')}>
          按钮
        </nav>
      </main>
    );
  }
}

export default Home;
