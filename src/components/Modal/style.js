import styled from "styled-components";

export const ContainerModal = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: black;

    svg {
      position: absolute;
      color: white;
      font-size: 25px;
      margin-bottom: 5px;
    }

    .loading-page {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading-page div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: loading-page 1.2s linear infinite;
}
.loading-page div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.loading-page div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.loading-page div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.loading-page div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.loading-page div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.loading-page div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.loading-page div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.loading-page div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.loading-page div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.loading-page div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.loading-page div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.loading-page div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes loading-page {
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}



`