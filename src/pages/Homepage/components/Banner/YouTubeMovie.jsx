import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const { videoId } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0, // 자동 재생 설정
        loop: 0
      },
    };

    // props로 전달된 videoId를 사용
    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // 동영상 준비가 완료되면 자동 재생 중지
    event.target.pauseVideo();
  }
}

export default Example;