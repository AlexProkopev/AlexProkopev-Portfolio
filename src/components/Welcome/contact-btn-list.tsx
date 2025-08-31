import ContactsButton from "./contacts";

interface ContactBtnListProps {
  listStyles: string;
}

const dataBtn = [
  { id: "github", path: "https://github.com/AlexProkopev" },
  { id: "telegram", path: "https://t.me/amsterdam_36" },
  {
    id: "linkedin",
    path: "https://www.linkedin.com/in/oleksandr-prokopiev-815460273/",
  },
];

const ContactBtnList = ({ listStyles }: ContactBtnListProps) => {
  return (
    <ul className={`${listStyles} top-auto bottom-5`}>
      {dataBtn.map((contact: { id: string; path: string }) => (
        <ContactsButton key={contact.id} id={contact.id} path={contact.path} />
      ))}
    </ul>
  );
};

export default ContactBtnList;
