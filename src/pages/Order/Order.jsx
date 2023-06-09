import styled from "styled-components";
import { Link } from "react-router-dom";
import TokenCard from "../../components/TokenCard";
import useInfinityScroll from "../../hooks/useInfinityScroll";

const Order = () => {
  const { value, isLoading } = useInfinityScroll("/carts-tokens", "21");

  let content;

  content = (
    <TokenCardFlex>
      {value.map((number, index) => (
        <Link to={`/orders/${number.id}`} key={index}>
          <TokenCard number={number.token.number} />
        </Link>
      ))}
    </TokenCardFlex>
  );

  return (
    <>
      {value.length > 0 && <h3 className="mb-3">Orders</h3>}
      {content}
      {isLoading && <p>.........................Loading</p>}
      {value.length === 0 && !isLoading && <p>Not Found</p>}
    </>
  );
};

export default Order;

const TokenCardFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 464px) {
    gap: 23px;
  }
`;
