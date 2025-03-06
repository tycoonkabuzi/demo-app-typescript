import styled from "styled-components";

const ContainerPagination = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const Page = styled.div`
  background-color: red;
  width: auto;
  padding: 10px;
  background-color: #f6f6f6;
  border: 1px solid #ededed;
  &:hover {
    background-color: #e8e8e8;
    cursor: pointer;
  }
`;

const Pagination = ({
  pageNumbers,
  handlePageNumber,
}: {
  pageNumbers: number[];
  handlePageNumber: (theValue: number) => void;
}) => {
  return (
    <ContainerPagination>
      {pageNumbers.map((pageNumber) => (
        <Page key={pageNumber} onClick={() => handlePageNumber(pageNumber)}>
          {pageNumber}
        </Page>
      ))}
    </ContainerPagination>
  );
};

export default Pagination;
