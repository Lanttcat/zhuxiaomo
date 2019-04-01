import * as React from 'react';
import classnames from 'classnames/bind';
import Input from '../../UI/Input/Input';
import Album from '../../UI/Album/';
import Background from '../../UI/Background';
import logo from '../../logo.svg';
// @ts-ignore
import style from './Home.scss';
import SideBar from "../SideBar";

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

// todo: background is Kobe
const navs = [
  {name: '主页', url: ''},
  {name: '文章', url: ''},
  {name: '关于我', url: ''},
];

class Home extends React.Component {
  public render(): React.ReactNode {
    return (
      <Background image={testUrl}>
        <main className={cx('home')}>
          <div className={cx('album')}>
            <Album size={400} column={4} images={images}/>
          </div>
          <div className={cx('search')}>
            <div>
              你好，我是朱萧默说。
            </div>
            <div className={cx('search-box')}>
              <Input type={'text'} size={'780px'} icon={'search'} placeholder={'Search'}/>
            </div>
            <div className={cx('search-link')}>
              <h3>link</h3>
            </div>
            <div className={cx('search-intro')}>
              <h3>编程-篮球-读书</h3>
            </div>
          </div>
          <nav className={cx('nav')}>
            <SideBar navs={navs}/>
          </nav>
        </main>
      </Background>
    );
  }
}

export default Home;
