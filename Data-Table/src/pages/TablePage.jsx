import TableComponent from "../components/TableComponent";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    number: "+1 234 567 890",
    password: "••••••••",
    editLink: "/edit/1",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    number: "+1 987 654 321",
    password: "••••••••",
    editLink: "/edit/2",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    number: "+1 555 666 777",
    password: "••••••••",
    editLink: "/edit/3",
  },
];

export function TablePage() {
  return (
    <div className="overflow-x-auto">
    <TableComponent rows={users} />
    </div>
  );
}
