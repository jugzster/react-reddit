import React from 'react';

function getVotes(topic) {
    return topic.votes.reduce((totalVotes, currentVote) =>
        totalVotes += currentVote.up_or_down, 0);
}

const TopicItem = ({ topic, handleVote }) => {
    const topicId = topic.topic_id;
    return (
        <li key={topicId}>
            <span onClick={() => handleVote(topicId, 1)}>Upvote</span>
            <span> ({getVotes(topic)}) </span>
            <span onClick={() => handleVote(topicId, -1)}>Downvote</span>
            <div>{topic.username}: {topic.topic}</div>
            <div>{topic.creation_date}</div>
        </li>
    );
};

export default TopicItem;