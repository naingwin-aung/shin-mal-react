import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const DefaultLayout = () => {
  return (
    <div>
      <BottomNav>
        <Wrapper>
          <IconWrapper>
            <Link to="/">
              <span className="material-symbols-outlined">home</span>
            </Link>
          </IconWrapper>
          <IconWrapper>
            <span className="material-symbols-outlined">home</span>
          </IconWrapper>
          <IconWrapper>
            <span className="material-symbols-outlined">home</span>
          </IconWrapper>
        </Wrapper>
      </BottomNav>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </div>
  );
};

export default DefaultLayout;

const MainWrapper = styled.div`
  margin: 20px;
`;

const BottomNav = styled.div`
  width: 100vw;
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 4px;
`;

const IconWrapper = styled.div`
  span {
    font-size: 30px;
    color: white;
  }
`;