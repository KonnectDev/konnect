import React from 'react';
import {
    StreamApp,
    NotificationDropdown,
    FlatFeed,
    LikeButton,
    Activity,
    CommentList,
    CommentField,
    StatusUpdateForm
} from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';

class Feed extends React.Component {
    render() {
        return (
            <StreamApp
                apiKey="du8he7epvp94"
                appId="45206"
                token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNzlmZTA1YWYtNWEyYS00MzlhLWI4MzUtZmFiZDcyOGVkNzg2In0.9v54MijDvQQxqr7NtYw9dClJui_OdsymgUPL_GihcJE"
            >
                <NotificationDropdown notify/>
                <StatusUpdateForm
                    feedGroup="timeline"
                    userId="79fe05af-5a2a-439a-b835-fabd728ed786"/>
                <FlatFeed
                    options={{reactions: {recent: true}}}
                    notify
                    Activity={(props) =>
                        <Activity {...props}
                                  Footer={() => (
                                      <div style={{padding: '8px 16px'}}>
                                          <LikeButton {...props} />
                                          <CommentField
                                              activity={props.activity}
                                              onAddReaction={props.onAddReaction}/>
                                          <CommentList activityId={props.activity.id}/>
                                      </div>
                                  )}
                        />
                    }
                />
            </StreamApp>
        );
    }
}

export default Feed;
