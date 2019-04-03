import React, { Component } from 'react';
import './App.css';
import Home from './Components/Article';
import Footer from './Components/Footer';
import Header from './Components/Header';

const testA = {
  title: '基于混合应用架构的跨平台实时聊天应用',
  createAt: 'ada',
  updateAt: 'ada',
  coverUrl: 'ada',
  author: 'ada',
  readTotal: 22,
  tags: [],
  contentForHTML: '实时性。在创建应用的时候，我们遇到这么一个质疑：你们的聊天应用做不到很好的体验。细问之下，找到了原因：他们之前开发的 IM 是基于类似 Ajax 轮询/WebSocket 的方式开发的，网络质量差，或者不活跃时，就无法保证实时性。',
  post: []
};

class App extends Component {
  public render() {
    return (
      <div className={'main-page'}>
        <Header />
        <Home articleInfo={testA}/>
        <Footer />
      </div>
    );
  }
}

export default App;
