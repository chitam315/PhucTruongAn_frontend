import { Container } from "react-bootstrap";

export default function CardMain({ children }) {
  return (
    <Container className="py-[20px]">
      <div className=" bg-white rounded-[15px] p-[1.5em]">
        {children}
      </div>
    </Container>
  )
}
