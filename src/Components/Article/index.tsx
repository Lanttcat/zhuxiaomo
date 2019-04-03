import * as React from 'react';
import IArticle from '../../Definition/IArticle';
import classnames from 'classnames/bind';
// @ts-ignore
import style from './Article.scss';
const cx = classnames.bind(style);

interface IOwnProps {
  articleInfo: IArticle;
}

class Article extends React.Component<IOwnProps> {
  public render(): React.ReactNode {
    const { articleInfo } = this.props;
    return (
      <section className={cx('article-main')}>
        <div className={cx('article-header')}>
          <h4>{articleInfo.title}</h4>
        </div>
        <div>基本信息</div>
        <div className={cx('article-content')}>
          <p>
            {articleInfo.contentForHTML}
          </p>
        </div>
      </section>
    );
  }
}

export default Article;
