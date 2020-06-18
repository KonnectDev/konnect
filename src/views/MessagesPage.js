import React from "react";
import {StreamChat} from 'stream-chat'
import {
    Channel,
    ChannelHeader, ChannelList,
    ChannelListMessenger,
    ChannelPreviewMessenger, MessageInput,
    MessageInputFlat, MessageList,
    MessageSimple, Thread,
    TypingIndicator, Window
} from "stream-chat-react";
import {Chat} from "@material-ui/icons";

const chatClient = new StreamChat('qk4nn7rpcn75');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJva2VuLXdhdGVyZmFsbC01In0.d1xKTlD_D0G-VsBoDBNbaLjO-2XWNA8rlTm4ru4sMHg';

chatClient.setUser(
    {
        id: 'broken-waterfall-5',
        name: 'Broken waterfall',
        image: 'https://getstream.io/random_svg/?id=broken-waterfall-5&amp;name=Broken+waterfall'
    },
    userToken,
);

const filters = {type: 'messaging', example: 1};
const sort = {last_message_at: -1};

class MessagesPage extends React.Component {
    render() {
        return (
            <Chat client={chatClient} theme={'messaging light'}>
                <ChannelList
                    filters={filters}
                    sort={sort}
                    List={ChannelListMessenger}
                    Preview={ChannelPreviewMessenger}
                />
                <Channel>
                    <Window>
                        <ChannelHeader/>
                        <MessageList TypingIndicator={TypingIndicator}/>
                        <MessageInput Input={MessageInputFlat} focus/>
                    </Window>
                    <Thread Message={MessageSimple}/>
                </Channel>
            </Chat>
        );
    }
}


export default MessagesPage;
