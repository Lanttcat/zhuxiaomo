import * as React from 'react';
import IArticle from '../../Definition/IArticle';

interface IOwnProps {
  articleInfo: IArticle;
}

class Article extends React.Component<IOwnProps> {
  public render(): React.ReactNode {
    const { articleInfo } = this.props;
    return (
      <section>
        <h4>{articleInfo.title}</h4>
        <div>基本信息</div>
        <p>
          {articleInfo.contentForHTML}
        </p>
      </section>
    );
  }
}

export default Article;
