import { Container } from "react-bootstrap";

export default function CardHome({ children, title }) {
  return (
    <Container className="pt-[20px]">
      <div className=" bg-white rounded-[15px] p-[1.5em]">
        <h2 class="uppercase font-bold relative text-[1.5em] mb-[15px]">
          <a
            href="/"
            title=""
          >
            {title}
          </a>
        </h2>
        {children}
      </div>
    </Container>
  )
}
