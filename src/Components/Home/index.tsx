import * as React from 'react';
import classnames from 'classnames/bind';
import Input from '../../UI/Input/Input';
import Album from '../../UI/Album/';
import Background from '../../UI/Background';
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

const testUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c194c275842465.5c587b066efa9.jpg';

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <Background image={testUrl}>
        <main className={cx('home')}>
          <div className={cx('album')}>
            <Album size={400} column={4} images={images}/>
          </div>
          <div className={cx('search')}>
            <Input type={'text'} size={'780px'} icon={'search'} placeholder={'Search'}/>
          </div>
          <nav className={cx('nav')}>
            按钮
          </nav>
        </main>
      </Background>
    );
  }
}

export default Home;
