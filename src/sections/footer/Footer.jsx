import styled from "styled-components";
import ScrollToTopBtn from "../../components/scrollToTop/ScrollToTop";
import logo from "../../dummyData/logo.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Container = styled.div`
  color: white;
  background: linear-gradient(rgba(49, 67, 87, 0.9), rgba(49, 67, 87, 0.99)),
    url("https://images.unsplash.com/photo-1557338031-c704009b03d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  align-content: center;
  overflow: hidden;
  padding: 0rem 7rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  color: white;
  padding: 60px 0px 25px 0px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.span`
  cursor: pointer;
`;

const LogoText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1.5rem;
    font-size: medium;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
`;

const SocialIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: rgba(66, 83, 103, 1);
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding-left: 75px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin-bottom: 24px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 22px;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
`;

const Hr = styled.hr`
  width: 100%;
  color: gray;
  opacity: 0.1;
`;

const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyRightItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <Wrapper>
          <Left>
            <Logo>
              <div>
                <img src={logo} alt="logo" style={{ width: "50%" }} />
                <LogoText>
                  <span style={{ fontWeight: "bold", fontSize: "25px" }}>
                    ACC INFRA
                  </span>
                  <span style={{ fontSize: "11px" }}>
                    Let your dream be our project
                  </span>
                </LogoText>
              </div>
            </Logo>
            <Desc>
              It is a long established fact that a render will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem lpsum is that it has a more-or-less normal
            </Desc>
          </Left>
          <Center>
            <div>
              <Title>QUICK LINKS</Title>
              <List>
                <ListItem>+ Home</ListItem>
                <ListItem>+ About Us</ListItem>
                <ListItem>+ Services</ListItem>
                <ListItem>+ Photo Gallery</ListItem>
                <ListItem>+ Testimonials</ListItem>
                <ListItem>+ Contact Us</ListItem>
              </List>
            </div>
            <div>
              <Title>PROJECTS</Title>
              <List>
                <ListItem>+ Upcoming Projects</ListItem>
                <ListItem>+ Completed Projects</ListItem>
              </List>
            </div>
          </Center>

          <Right>
            <Title>CONTACT INFO</Title>
            <div>
              <h2>+91 123 456 7890</h2>
              <h4>hello@aacinfra.com</h4>
              <SocialContainer>
                <SocialIcon>
                  <Twitter />
                </SocialIcon>
                <SocialIcon>
                  <Facebook />
                </SocialIcon>
                <SocialIcon>
                  <Instagram />
                </SocialIcon>
                <SocialIcon>
                  <LinkedIn />
                </SocialIcon>
              </SocialContainer>
            </div>
          </Right>
        </Wrapper>
        <CopyRight>
          <Hr />
          <CopyRightItems>
            <h4  style={{fontWeight:100,fontSize:"0.9rem"}}>&#169; 2022 | Real Estate & Luxury Homes</h4>
            <span style={{ marginRight: "5px" }}>
              Site created by 
              <span style={{ cursor: "pointer" }}> WebMatriks Technologies</span>
            </span>
          </CopyRightItems>
        </CopyRight>
      </div>
      <ScrollToTopBtn />
    </Container>
  );
};

export default Footer;
