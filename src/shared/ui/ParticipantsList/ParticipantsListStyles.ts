import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ListContainer = styled.div`
  color: #ffffff;
  width: 100%;
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
  overflow-y: auto;
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

export const TableRowLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;
export const TableRowItem = styled.tr`
  border-top: 1px solid #ffffff;

  font-size: 14px;
  line-height: 18px;

  cursor: pointer;

  position: relative;

  &:last-of-type {
    border-bottom: 1px solid #ffffff;
  }

  &:hover {
    color: #e75626;
  }
`;
export const HighlightedTableRowItem = styled(TableRowItem)`
  color: #e75626;
  cursor: auto;
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

export const DeleteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
`;
export const Delete = styled.img``;
