import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
  .sidebar {
    border-right: 2px solid #f184fd !important;
    flex-shrink: 0;
    width: 50px;
    overflow: hidden;
    background: #ffffff;
    transition: 0.3s;
    height: 100vh;
    position: sticky;
    top: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: 0.5s;
    &:hover {
      width: 300px;
      padding: 20px;
    }
    &.show {
      width: 300px;
      padding: 20px;
    }
    h2 {
      color: #00049d !important;
      position: absolute;
      top: 60px;
      left: 100px;
    }
    .toggle {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      text-align: center;
      transition: 0.3s;
      color: #111;
      border: 1px solid rgba(255, 255, 255, 0.8);
      position: absolute;
      top: 30px;
      left: 250px;

      &:hover {
        background: rgba(187, 187, 187, 0.4);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
    }
    nav {
      li {
        a {
          .MuiButtonBase-root {
            display: block !important;
            padding: 10px 20px !important;
            border-radius: 6px !important;
            background-color: rgba(255, 255, 255, 0.3) !important;
            color: #3f3f3f !important;
            margin-bottom: 10px !important;
            transition: 0.3s !important;
            min-width: 200px !important;
            overflow: hidden !important;
            &:hover {
              background-color: rgba(255, 255, 255, 0.5) !important;
            }
          }
          &.active {
            .MuiButtonBase-root {
              background-color: rgba(7, 0, 255, 0.3) !important;
              backdrop-filter: blur(1.5px);
              -webkit-backdrop-filter: blur(1.5px);
              border: 1px solid rgba(255, 255, 255, 0.18);
              color: #111 !important;
            }
          }
        }
      }
    }
  }
  .rightside {
    background: #ffffff;
    flex: 1;
    position: relative;
    header {
      padding: 10px;
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      z-index: 1000;
      .search,
      .others {
        width: 40px;
        height: 40px;
        padding-top: 8px;
        border-radius: 100%;
        text-align: center;
        color: #111;
        &:hover {
          background-color: rgba(177, 175, 175, 0.171);
          cursor: pointer;
        }
      }
      .user img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        margin-left: 25px;
      }
    }
    .md-title {
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.005em;
      line-height: 26px;
    }
    .content {
      padding: 20px;
    }
  }
`;

export default DashboardWrapper;
