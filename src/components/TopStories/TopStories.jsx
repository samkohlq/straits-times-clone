import React from "react";

import TopStoriesHeader from "./TopStoriesHeader";
import TopStoriesContent from "./TopStoriesContent";

class TopStories extends React.Component {
  render() {
    return (
      <div>
        <div className="row py-3 ad-bgd justify-content-center border border-danger">
          <TopStoriesHeader />
          {/* TODO: add divider */}
          <TopStoriesContent />
        </div>
      </div>
    );
  }
}

export default TopStories;
