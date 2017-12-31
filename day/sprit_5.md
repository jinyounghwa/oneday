코드스피츠 5회차 후기

새로운 스테이지인 BLOCK,NONBLOCK,SYNC,ASYNC 부터 시작합니다.

이제까지 flow를 배웠습니다. 흐름제어와 함께 플로우컨트롤을 배웠습니다. 이제는 블록과 넌블럭으로 플로우를 배워봅시다.

프로그램이 시작되면 도중에 멈추지 않고 실행되기 때문에 기본적으로 Blocking입니다. 중간에 간섭할 수 없기 때문에 신중하게 결정해야 합니다.
아래는 무한루프를 만들고 있습니다. 그러나 실제로는 플랫폼의 안정성을 위하여 죽습니다. OS가 강제종료합니다.

https://gist.github.com/1b7ce4c9b3411fe726a1875a5ccfb1b2.git

일반적인 블로킹 로직은 점유를 하는 시간만큼의 블록을 일으키는 함수를 이야기하면서 Blocking, NON Blocking을 이야기 하게 됩니다.
아래는 대표적인 블록함수입니다. 실행이 끝나야만 다음실행이 되는것을 확인할 수 있으며 흐름이 위에서 아래로 못 흐르게 막는것을 확인 하실 수 있습니다.
블록함수를 짤 때 주의할 점은 어딘가에 제한을 해야 합니다. 일반적으로 블록함수는 배열순회와 정렬(배열크기에 따라), DOM순회(DOM 하위구조에 따라), 이미지 프로세싱(이미지 크기에 따라)사용합니다.

blocking evasion(블로킹 피하기)
blocking은 독점적 cpu점유로 인해 모든 동작이 정지됩니다. 또한 타임아웃체크에 의해 프로그램이 강제 중단되는 문제가 있지만 가장 문제는 블로킹의 조합을(블록연쇄) 예측할 수 잆음이 문제가 되고 있습니다. 죽을지 안죽을지 예상이 어렵다는것입니다. 그러면 최대한 블로킹을 관리하고 분산해야 합니다. 

블로킹 분산 관리를 알아보기 전에 순차적인 실행에 대해 알아봅시다. 
현재의 OS는 순차적인 시 분할(time-sharing) OS이지만 옛날에는 적제-실행완료 방식이었지만 현재는 OS가 프로그램의 제어권을 빼았는 상황이 되었습니다. 운영체제의 실행을 분할하여 실행되는 동시 실행되게 보이도록 합니다. 예전의 방식이 빠른지만 (시분할은 컨텍스트 스위칭 비용이 발생)동시에 실행 하려면 시분할 방식이 중요해 졌습니다. 분리되어 실행되는 것을 프로세스라 하고 그 안에도 시분할을 만들 수 있는데 이것을 쓰레드(thread)라고 합니다.

블로킹을 피하는 것을 위의 설명에서 흰트를 얻을 수 있습니다. 분할 및 관리하여 즉시제어권을 회복하는것을 NON Blocking이라고 합니다. 자바스크립트는 싱글 스레드라고 하지만 실제로는 그렇지 않습니다. 보통 7개 쓰레드가 있지만 제일 유명한 쓰레드를 보면 main UI Thread 1,background thread n,web worker thread가 있습니다. main UI Thread는 대부분의 프로그램에 여기서 실행되고 있습니다.background thread는 많이 있습니다. web worker thread는 우리가 통제 할 수 있습니다. 하나만 주로 쓰기 때문에 블록이 일어나고 있습니다. 또한 가난한 자의 스레드 (settime와 같은)실행이 있는데 작업큐를 살펴보고 실행하는 방식입니다. 블로킹을 피하는 방법을 계속해서 알아보겠습니다.

Time Slicing(시간으로 자르기)
하나의 블로킹 로직이 시간을 많이 차지하는것을 막기 위하여 다음큐(프레임)를 타이밍을 맡겨놓는 방법으로 실행시간 측정을 줄여 적게 실행하기 위한 방법입니다. 
https://gist.github.com/7e9c367f7cf7e3cce38c97f96c79c2b8.git

실제로 UI로직 먼저 실행하고 다른 로직을 돌리는데 사용합니다. 이번프레임이 아닌 다음프레임으로 넘겼기 때문에 플로우가 바로 흘러가 만들었습니다.
블로킹은 즉시 흐름제어를 넘겨받을 수 있느냐가 중요하기 때문에 즉시 제어권을 회복되는 것을 위에도 설명했듯이 NON Blocking 입니다.
Blocking, NON Blocking에서 중요한것은 오직 함수 제어권이 바로 회복되는지에 대한 여부입니다. 반환값과 관심사에서 멀어집니다. 그럼 바로 라는개념은 어떤것인가 라면 1미리 세컨드/초 이하 입니다. 슬라이스 값을 조정하면 한 프레임의 값의 처리를 조절 할 수 있습니다. f 함수의 부하를 알 수 없기 때문에 매뉴얼하게 조절 하고 있습니다. 기본적 타임 슬라이싱은 매뉴얼하게 하는것입니다.

아래는 매뉴얼이 아닌 자동의 방식입니다.
https://gist.github.com/940315428b0b131eb5e29dfb158c0cea.git

기본적으로 한 프레임이 시간을 슬라이스 하겠다는 (f함수가 무거워서) 전략이고 이중에 우리가 바꿀 수 있는것은 slice입니다. 한 프레임에 얼마나 시간을 쓸 수 있는것을 인자로 바꾸어 보는 것입니다. 물론 성능이 좋아지지는것은 아니지만(preformance.now를 불러오기 때문에) Date.now보다는 빠릅니다.(부를 때마다 OS에 요청하기 때문) 큰 비용을 치르지 않고 사용할 수 있는것입니다.

그러면 이제는 새로운 것인 Web Worker를 배워봅시다. 
https://gist.github.com/e8d7da5d3bb01f396729db21b0b60b3e.git

Web Worker는 나온지 오래 되었지만 멀티스레드를 지원하고 있는지는 최근이어서 많이 사용되고 있습니다. Worker thread pattern은 우리가 thread에 넘기는 값은 객체가 아니라 primitive한 값입니다.(충돌을 방지하기 위함입니다.) 또한 atomics라는 구조체가 ES7,8에 제공됩니다. 제어권을 가진 것만 atomics가 제공되면 메인 스레드가 못건드리고 반환하면 건드릴 수 있도록 해줍니다. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Atomics
http://2ality.com/2017/01/shared-array-buffer.html
https://tc39.github.io/ecmascript_sharedmem/shmem.html
http://lucasfcosta.com/2017/04/30/JavaScript-From-Workers-to-Shared-Memory.html

Web Worker가 백그라운드에 실행되는 제약 조건은 반드시 독립되어 있는 js를 따로 로딩해야 합니다. 여기서는 함수로 만들었으므로 HTML5 객체를 추가하였습니다. 첫번째로 Blob객체가 있습니다. 바이트 arry객체와 호환됩니다. 1바이트 단위로 쓸 수 있습니다.
https://developer.mozilla.org/ko/docs/Web/API/Blob

onmessage는 이미 존재하는 객체입니다. postMessage, URL도 내장되어 있는 객체입니다. Worker를 생성하면 마치 네트워크상의 JS파일이 있는것처럼 인식하게 됩니다. 결국 blocking evasion이라는 것은 non blocking이라는 행위라는것을 알 수 있습니다.

non blocking
서브루틴이 즉시 플로우 제어권을 내놓는 것 이라고 할 수 있습니다. 블록함수로 만들지 않기 위함입니다.
https://gist.github.com/8e8e491d0e344d2d06b4c94eae5eb571.git
무조건 흐름은 반환되어 다음에 다른 부분을 처리하도록 만드는 것이 목표입니다. 위에서 아래로 흐름제어가 되어 있지 않게 됩니다. 이러한 순서 부분이 익숙하지 않은 사고방식이기에 어려운것입니다. 결국 우리는 순차에 무관한 안정적인 알고리즘을 짜야 합니다. 이것을 병행성 프로그래밍이라고 합니다.

SYNC,ASYNC
이제 관점의 차이를 달리해서 흐름제어에 관심이 없는 쪽을 살펴봅시다. 함수를 호출해서 리턴값으로 받는지(SYNC), 함수의 결과값을 콜백으로 받는지(ASYNC)에 대해 관심이 있습니다.

https://gist.github.com/ce59007e326a3e2a5dcbe52ea5a9e784.git

SYNC를 Blocking, NON Blocking의 관점으로 보면 아래와 같습니다. 

https://gist.github.com/0a3919c23bf1bc9d39f644798c3dc14a.git

네가지 SYNC,ASYNC의 BLOCJ,NONBLOCK 중에서 SYNC BLOCK(블록가드를 항상 쓴다는 전제하에) 와 ASYNC NONBLOCK의 사용을 권장합니다. ES6에는 ASYNC NONBLOCK를 지원하는 수많은 문법이 있습니다. 결과적으로 ASYNC NONBLOCK를 지향해야 합니다.

안티패턴은 아래와 같습니다. 한번은 가능해도 두번이나 언젠가는 죽습니다. 
https://gist.github.com/30fc9dddcbe32bbd109106585636d8e3.git
