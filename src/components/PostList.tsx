import axios from "axios";
import { JSX, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router";
const Main = styled.div``;
const Heading = styled.h1``;
const WrapperPosts = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
`;
const WrapperImage = styled.div``;
const WrapperText = styled.div`
  text-align: left;
`;
const Title = styled.h2``;
const Body = styled.p``;
const Thumbnail = styled.img``;
const PostList = () => {
  type PostData = {
    id: number;
    title: string;
    content: string;
    thumbnail: string;
  };
  const [data, setData] = useState<PostData[] | null>();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Unable to fetch data", error);
      });
  }, []);
  const reduceContentSize = (content: string): string => {
    return content.slice(0, 400);
  };
  return (
    <Main>
      <Heading>Post List</Heading>
      {data ? (
        data.map(
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
