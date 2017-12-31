Code Spitz 73 여섯번째 

generator, promise, async/await

저번시간에 이어서 애당초 SYNC는 프로그램이 적재되어 처리하는것이라 하고 함수를 통해서 ASYNC는 위에서 아래로 흐르지 않도록 할 수 있습니다만, ASYNC가반드시 함수를 통하라는 법은 없습니다. 우리는 SYNC가 더 쉽죠 위에서 아래로 흐르는것에 익숙해져있으니까요
(추신 : 6강을 복습하시기 전에 4강을 한번 더 듣고 6강을 들으시는게 좋습니다.)

ASYNC를 쓰려니 이리저리 구현되는 로직을 사람이 모두 관리하기에는 한계가 있습니다.ASYNC이지만 위에서 아래로 흐르는 있는 로직을 유지하기 위해서 어떻게든 코드를 ASYNC를 SYNC처럼 보이게하기 위한 부분이 이번시간의 목표라고 할 수 있습니다.

generator
generator는 중도에 멈췄다가 다시 실행하는 breaking block기능이 있습니다. (yield를 하면)
https://gist.github.com/3f7357f14aec71b981892f6078ec43fa.git

next()로 인해 break를 걸 수 있습니다. 제어안에 머물게 하기 때문에 정지했던 그 자리로 돌아갈 수 있습니다. (generator suspension - 4강 참조) 다시말해 yield를 이용해 중간에 끊어지는 것입니다.

저번시간에 했었던 Time Slicing Mainual 을 확인해 보고 이것을 다시 generator로 바꾸어 봅시다. generator의 좋은점은 제어구조가 똑같은 것을 재활용 할 수 있습니다. yield가 자동으로 break가 걸어주는 역할을 합니다.(동기적인 블록명령을 끊을 역할을 합니다.)

https://gist.github.com/e8e10e83cf728588f2d31b667e5fad21.git

executor은 실행기의 역할을 합니다. next()의 결과가 done()이 false가 될 때까지 루프가 실행됩니다. generator에는 제어로직만 있고 실행기만 다양하게 만들면 됩니다. 저번 시간에 했던 로직과 비교해보면 실행로직과 실제 알고리즘이 섞여 있었던 반면에 이번에는 분리할 수 있습니다. 결정적으로 2가지 차이가 있습니다. 다음과 같습니다.

1.변수의 차이 (generator사용 - 지역변수/generator사용한함 - 자유변수(클로저 - 구조를 고치기 어려움))
2.실행 부분의 차이 (실행기의 관심사 차이(generator사용-실행기 분리 /generator사용안함 - 실행기 분리 어려움))

generator + async + executor 로 비동기 generator 만들기
이제는 generator에 async를 넣고자 합니다. 여기서 새로 배울 yield가 값을 받아들일 수 있다는 generator consumer pattern이라고 합니다. next()괄호에 값을 넣으면 yield가 받아 옵니다.
https://gist.github.com/e3fa2226ee54d1abe9ef94bd548da148.git

순서가 yield가 처리될 때 할당(=)의 좌측이 처리되어야 한다는 것을 기억해야 합니다. 실행기를 보면 next() 는 iter의 next를 불러주는 함수입니다.iter가 함수가 실행 될 시점에 평가된다는 사실을 기억하고 실행기의 next로 보냈더니 profile로 돌아가서 userid를 처리하게 되는 순서의 흐름들을 짚어 나가면 실행하고-멈추고-실행하는 부분의 반복을 확인하게 됩니다.코드들을 단순하게 보면 변수들이 다 지역변수로 되어 있습니다. 비동기인데 동기로직처럼 보입니다. 

PROMISE
PROMISE는 언제 사용하는것인지 알아보려면 콜백의 문제점을 알아봐야 합니다. passive async controll이라고 하는데 문제는 콜백을 보낼 수 는 있지만 언제 올지는 모른다는 부분입니다. 불러질지 통제할 수 없다는 말과 같습니다. 우리는 콜백이 일어나도 순서에 영향이 없는 프로그래밍을 해야 한다는 리엑티브 프로그래밍 이라고 하는 관점이 있지만.. 실제 구현이 어렵습니다. 그냥은 어렵고 대개 RxJS등의 도움을 받습니다. 여러가지 로직이나 설계기법들이 있지만, 그길로 가기는 어렵습니다. 그렇다면 어떻게 하면 순서가 제어되게 만들 수 있을까요?  콜백이 완료될 때 하는 방법이지만 자원을 비효율적으로 사용하는 부분이 있습니다. 그렇다면 왜 시점이 중요하냐면, 순서를 모른다는것 자체는 제어가 어렵게 되는 문제가 발생하기 때문입니다. 그래서 계속 콜백속에 콜백을 넣는 문제가 발생하기 때문입니다.

그렇다면 어떻게 active async controll이라는 전략을 사용하는 방법인지 고민하게 됩니다. 로딩이 완료되었을 때 호출하지 않으면 실행이 안돼게 만들어 반쯤 active하게 할 수 있습니다. PROMISE가 반쯤 active하게만들어 주어 많은 일을 하게 됩니다. then()을 호출해야 결과를 얻게 됩니다. 아래의 코드를 확인해 봅시다. 
https://gist.github.com/4982d1dd1da9822b25d59fa48f84ee4d.git

일반적인 콜백 함수를 구현한 것처럼 보이지만 절대로 호출되지 않습니다. than()을 호출하기 전 까지는 말이죠.. 이 부분이 중요한것입니다. 그렇기 때문에 실제적인 비동기 행위와 콜백을 구분해서 처리 할 수 있습니다. 결국 제어가 우리 손에 들어오게 된 것입니다. PROMISE를 깊게 보면 all 등 여러가지 기능을 사용할 수 있는데 위와 같은 이유 때문에 사용 할 수 있는 것입니다. 병행성을 가지는 구조의 기능일 경우 사용 할 수 있습니다.

generator + promise
generator는 동기 로직을 berak걸 수 있기 때문에 두개를 같이 쓰면 재미있는 현상을 볼 수 있습니다. than()할 때까지 멈춰 있는다는 부분을 이용하면 아래와 같은 방법으로 코드가 더 줄어들게 됩니다. 
https://gist.github.com/764334b78d68a26d33d15c65744bb9c6.git

next()함수를 보면 value와 done값으로 들어오게 됩니다. done()가 될 때까지 promise than()호출해 주고 than(v)에서 next()를 호출하고 next()함수에 iter를 넘겨주고 next()값에 드디어 V를 넘겨주게 됩니다. 그래서 데이터를 처리 할 때 완전히 분리할 수 있어서 많은 이점을 가지게 됩니다.

html5에는 patch라는 객체로 promise가 구현되어 있습니다. 
http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

async/await
현대 언어학자들은 지금까지의 내용이 어렵다는것을 잘 알고 있습니다. 그래서 보다 더 쉽게 로직을 구현할 수 있는 문법적 장치를 마련한 것이 async/await 입니다. 원래 C#에서 나왔습니다. promise를 기다리는 로직을 이해하고 사용하는것을 어렵기 때문에 await promise를 구현해서 SYNC로 보이게 만드는 방법을 사용합니다.

https://gist.github.com/0d3ac5257872ae667f44bdc7aa57a15b.git

이제는 async로 그동안의 generator executor의 로직을 포함하고 awit로 내장되어 있는 async와 대화하게 되는것으로 간결하게 구현할 수 있습니다. 이제 더이상 executor(실행기)가 등장하지 않고 호출하는것으로 간결하게 구현 할 수 있습니다. async는 awit로 promise를 소비한다는것을 기억하시면 됩니다.
async/await 구현이 없는 브라우저는 promise로 같이 써서 폴리필을 구현 할 수 있습니다.




