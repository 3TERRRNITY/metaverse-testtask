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
  TableWallet,
} from "./ParticipantsListStyles.ts";

interface IParticipantsTableProps {}

const ParticipantsTable = (props: IParticipantsTableProps) => {
  const tableHead = ["name", "email", "wallet"];
  // TODO: example
  const participants = [
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
    {
      name: "Hamish Gilmore",
      email: "walob95230@nubotel.com",
      wallet: "0x279D9f0c10fBB3D44fEf96...",
    },
  ];
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
            <TableRowItem className="paragraph">
              <TableName>{participant.name}</TableName>
              <TableEmail>{participant.email}</TableEmail>
              <TableWallet>{participant.wallet}</TableWallet>
            </TableRowItem>
          ))}
        </ListTable>
      </TableContainer>
    </ListContainer>
  );
};

export default ParticipantsTable;
