import styled from "styled-components";



export const Row = styled.div`
    

   .sonar-wrapper {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

   .sonar-emitter {
  position: relative;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);


.sonar-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}
.sonar-wave {
  animation: sonarWave 2s linear infinite;




@keyframes sonarWave {
  from {
    opacity: 0.4;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
}
}
}
}







`