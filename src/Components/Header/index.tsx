import * as React from 'react';
import classnames from 'classnames/bind';
// @ts-ignore
import style from './Header.scss';
const cx = classnames.bind(style);

interface IOwnState {
  isScrollOver: boolean
}

class Header extends React.Component<{}, IOwnState>{
  private readonly headerRef: React.RefObject<HTMLHeadElement>;
  constructor(props: {}) {
    super(props);
    this.headerRef = React.createRef();
    this.state = {
      isScrollOver: false
    }
  }
  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // @ts-ignore
    let offsetTop = this.headerRef.current.offsetTop;
    console.log(scrollTop, offsetTop);
    if (scrollTop > 72) {
      this.setState({isScrollOver: true});
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

  render(): React.ReactNode {
    return (
      <header ref={this.headerRef}>
        {
          this.state.isScrollOver &&
          <div className={cx('header-shrink')}>
            2
          </div>
        }
        {
          !this.state.isScrollOver &&
          <div className={cx('header-basic')}>
            this is header 1
          </div>
        }
      </header>
    );
  }
}

export default Header;

