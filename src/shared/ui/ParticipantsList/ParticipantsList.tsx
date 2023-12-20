import {
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
interface IParticipantsProps {
  id: number;
  username: string;
  email: string;
  address?: string;
}
interface IParticipantsTableProps {
  participants: IParticipantsProps[];
}

const ParticipantsTable = ({ participants }: IParticipantsTableProps) => {
  const tableHead = ["name", "email", "wallet"];

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

          {participants.map((participant) => (
            <TableRowItem className="paragraph" key={participant.id}>
              <TableName>
                <TableRowLink to={`/wallet/:${participant.id}`} />
                {participant.username}
              </TableName>
              <TableEmail>{participant.email}</TableEmail>
              <TableWallet>{participant.address}</TableWallet>
            </TableRowItem>
          ))}
        </ListTable>
      </TableContainer>
    </ListContainer>
  );
};

export default ParticipantsTable;
