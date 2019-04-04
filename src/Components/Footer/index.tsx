import * as React from 'react';
import classnames from 'classnames/bind';
// @ts-ignore
import style from './Footer.scss';
const cx = classnames.bind(style);

class Footer extends React.PureComponent{
  render(): React.ReactNode {
    return (
      <footer className={cx('footer')}>
        <div className="item item-1">Yixing</div>
        <div className="item item-1">1</div>
        <div className="item item-2">1</div>
        <div className="item item-2">About me</div>
      </footer>
    );
  }
}

export default Footer;
