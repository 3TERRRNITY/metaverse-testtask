import styled from "@emotion/styled";

export const ListContainer = styled.div`
  color: #ffffff;
  width: 668px;
`;

export const ListTitle = styled.div`
  font-size: 36px;
  line-height: 43.2px;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 36px;
  font-weight: 700;
`;

export const TableContainer = styled.div`
  width: 100%;

  height: 550px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e75626;
  }
`;

export const ListTable = styled.table`
  width: 100%;
`;
export const TableHead = styled.tr``;
export const TableHeadItem = styled.th`
  font-size: 24px;
  line-height: 28.8px;

  padding-bottom: 16px;
  text-align: left;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TableRowItem = styled.tr`
  border-top: 1px solid #ffffff;

  font-size: 14px;
  line-height: 18px;

  &:last-of-type {
    border-bottom: 1px solid #ffffff;
  }
`;

export const TableName = styled.td`
  padding: 16px 0;
`;
export const TableEmail = styled.td`
  padding: 16px 0;
`;
export const TableWallet = styled.td`
  padding: 16px 0;
`;
