import { Container } from "react-bootstrap";

export default function CardMain({ children }) {
  return (
    <div className="container-sm py-[20px] overflow-hidden">
      <div className="bg-white rounded-[15px] p-[1.5em]">
        {children}
      </div>
    </div>
  )
}
