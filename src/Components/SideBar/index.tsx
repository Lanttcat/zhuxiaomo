import * as React from 'react';
import classnames from 'classnames/bind';
import * as _ from 'lodash';
// @ts-ignore
import style from './SideBar.scss';

const cx = classnames.bind(style);

interface ISideBar {
  navs: Array<{
    name: string;
    url: string;
  }>;
}

class SideBar extends React.Component<ISideBar> {
  public render(): React.ReactNode {
    const { navs } = this.props;
    return (
      <nav className={cx('home-side')}>
        {
          _.map(navs, (nav, index) => (
            <div className={'item'} key={index}>{nav.name}</div>
          ))
        }
      </nav>
    );
  }
}

export default SideBar;
