import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('ncs');
    }

    onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
          <div className='ui container main-container'>
            <div className='ui container search-bar'>
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <div className='ui grid video-grid'>
                <div className='ui row'>
                  <div className='video-detail'>
                    <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className='video-list'>
                    <VideoList
                      onVideoSelect={this.onVideoSelect}
                      videos={this.state.videos}
                    />
                    <div className='ui inverted vertical footer copyright'>
                      <div className='ui container footer-text justify-center-align'>
                        Copyright @ Salman Zafar. All Rights Reserved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default App;