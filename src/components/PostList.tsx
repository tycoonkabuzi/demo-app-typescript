import { JSX, useEffect, useState } from "react";
import styled from "styled-components";

type PostData = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
};

const Main = styled.div``;

const WrapperPosts = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  border: 1px #ededed solid;
  padding: 20px;
  margin: 10px;
  background-color: #f6f6f6;
`;
const WrapperImage = styled.div``;
const WrapperText = styled.div`
  text-align: left;
`;
const Title = styled.h2``;
const Body = styled.p``;
const Thumbnail = styled.img``;

const PostList = ({ currentData }) => {
  const reduceContentSize = (content: string): string => {
    return content.slice(0, 400);
  };

  return (
    <Main>
      {currentData ? (
        currentData.map(
          (post: PostData): JSX.Element => (
            <WrapperPosts key={post.id}>
              <WrapperImage>
                <Thumbnail src={post.thumbnail} />
              </WrapperImage>
              <WrapperText>
                <Title>{post.title}</Title>
                <Body>{reduceContentSize(post.content)}... Read more</Body>
              </WrapperText>
              <hr />
            </WrapperPosts>
          )
        )
      ) : (
        <p> Loading ...</p>
      )}
    </Main>
  );
};
export default PostList;
