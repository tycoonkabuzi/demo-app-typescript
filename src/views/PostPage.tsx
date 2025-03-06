import axios from "axios";
import { JSX, useEffect, useState } from "react";
import styled from "styled-components";

import Pagination from "../components/Pagination";
import PostList from "../components/PostList";

type PostData = {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
};

const Main = styled.div``;
const Heading = styled.h1``;

const PostPage = () => {
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

  const sliceToTenPost = (arrayPosts: PostData[]): PostData[] => {
    return arrayPosts.slice(0, 10);
  };

  const [data, setData] = useState<PostData[]>();
  const [pageNumber, setPageNumber] = useState<number[]>([]);
  const [page, setPage] = useState<number>();
  const [currentData, setCurrentData] = useState(
    data ? sliceToTenPost(data) : null
  );

  const getNumberPages = (
    arrayPosts: PostData[],
    numberOfElementPerPage: number
  ): number[] => {
    const pageNumber: number[] = [];
    if (arrayPosts !== undefined) {
      for (let i = 1; i <= arrayPosts.length / numberOfElementPerPage; i++) {
        pageNumber.push(i);
      }
    } else {
      console.log("It is undefined");
    }
    return pageNumber;
  };

  useEffect(() => {
    if (data) {
      setPageNumber(getNumberPages(data, 10));
    }
  }, [data]);

  const handlePageNumber = (theValue: number) => {
    setPage(theValue);
    if (page) {
      setCurrentData(getPages(data, page));
    }
  };

  const getPages = (arrayData: number[], pageNumber: number) => {
    let newArray = arrayData.slice(pageNumber * 10, (pageNumber + 1) * 10);
    return newArray;
  };

  return (
    <Main>
      <Heading>Post List</Heading>
      <PostList currentData={currentData} />
      <Pagination
        pageNumbers={pageNumber}
        handlePageNumber={handlePageNumber}
      />
    </Main>
  );
};
export default PostPage;
