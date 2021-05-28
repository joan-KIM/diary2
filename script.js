/*
1. 버튼을 클릭
2. 이벤트 핸들러 실행
3. span(circle) 요소 생성 -> 지름, 반지름 정함
4. circle의 너비, 그려질 위치(left, top)을 설정()
5. span class = "ripple"
6. 클릭된 버튼에 span을 child로 추가(ripple이 있으면 지우고 추가 ==> 누를때마다 추가)
-> 마우스 클릭한 위치를 시작점으로 버튼 안쪽에서 원이 그려짐
*/
const buttons = document.getElementsByTagName("button");

for (const button of buttons) {     // 버튼에 이벤트 리스너 달아줌
  button.addEventListener("click", createRipple);
}

function createRipple(event){
    const button = event.currentTarget;     // 클릭한 button 반환

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);     // 지름
    const radius = diameter / 2;    // 그려질 원의 반지름
  
    circle.style.width = circle.style.height = `${diameter}px`;
    // 마우스 X,Y좌표 - 버튼의 left,top 값 - 반지름 => 마우스 클릭한 위치 = 원의 중심
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;      
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
}


