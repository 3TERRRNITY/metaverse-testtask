import { useEthers } from "@usedapp/core";
import {
  Delete,
  DeleteContainer,
  HighlightedTableRowItem,
  ListContainer,
  ListTable,
  ListTitle,
  TableContainer,
  TableEmail,
  TableHead,
  TableHeadItem,
  TableName,
  TableRowItem,
  TableRowLink,
  TableWallet,
} from "./ParticipantsListStyles.ts";
import React, { useEffect, useState } from "react";
import {
  IParticipantsProps,
  IParticipantsTableProps,
} from "../../api/types.ts";

const ParticipantsTable = ({
  participants,
  onUpdateFormSubmitted,
  onUpdateParticipants,
}: IParticipantsTableProps) => {
  const tableHead = ["name", "email", "wallet"];
  const { account } = useEthers();
  // Для работы с массивом участников без мутации
  const [updatedParticipants, setUpdatedParticipants] =
    useState<IParticipantsProps[]>(participants);

  useEffect(() => {
    setUpdatedParticipants(participants);
  }, [participants]);
  const handleDelete = (id: number) => {
    onUpdateParticipants(
      participants.filter((participant) => participant.id !== id)
    );
    // При удалении своего аккаунта пропадает возможность смотреть участников
    // Для реализации просмотра участников после удаления своих данных - удалить эту строку
    onUpdateFormSubmitted(false);
  };

  console.log(updatedParticipants);
  return (
    <ListContainer>
      <ListTitle className="title">
        Participation listing (enable only for participants)
      </ListTitle>
      <TableContainer>
        <ListTable>
          <TableHead className="title">
            {tableHead.map((item) => (
              <TableHeadItem key={item}>{item}</TableHeadItem>
            ))}
          </TableHead>

          {updatedParticipants.map((participant) => (
            <React.Fragment key={participant.id}>
              {participant.address === account ? (
                <HighlightedTableRowItem className="paragraph">
                  <TableName>{participant.username}</TableName>
                  <TableEmail>{participant.email}</TableEmail>
                  <TableWallet>
                    {participant.address?.toLowerCase()}
                  </TableWallet>
                  <DeleteContainer>
                    <Delete
                      onClick={() => handleDelete(participant.id)}
                      src="/delete.svg"
                      alt="delete icon"
                    />
                  </DeleteContainer>
                </HighlightedTableRowItem>
              ) : (
                <TableRowItem className="paragraph">
                  <TableName>
                    <TableRowLink to={`/wallet/:${participant.id}`} />
                    {participant.username}
                  </TableName>
                  <TableEmail>{participant.email}</TableEmail>
                  <TableWallet>{participant.address}</TableWallet>
                </TableRowItem>
              )}
            </React.Fragment>
          ))}
        </ListTable>
      </TableContainer>
    </ListContainer>
  );
};

export default ParticipantsTable;
