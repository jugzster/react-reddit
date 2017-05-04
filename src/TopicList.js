import React from 'react';
import TopicItem from './TopicItem';

function compareTopicVotes(topicA, topicB) {
    return getVotes(topicB) - getVotes(topicA);
}

function getVotes(topic) {
    return topic.votes.reduce((totalVotes, currentVote) =>
        totalVotes += currentVote.up_or_down, 0);
}

const TopicList = ({ topics, handleVote }) => {
    const sortedTopics = [...topics].sort(compareTopicVotes);
    const top20Topics = sortedTopics.slice(0, 20);
    const getTopicItems = top20Topics.map(topic =>
        <TopicItem topic={topic} handleVote={handleVote} />);

    return (
        <section>
            <h2><i>Topics</i></h2>
            <ul className="topicList">
                {getTopicItems}
            </ul>
        </section>
    );
}

export default TopicList;