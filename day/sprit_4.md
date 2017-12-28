코드 스피리츠 4회차 후기

지연실행에 대해 더 들어가보는 시간

저번시간에 iterator, GENEATOR를 배워서 제어문이 바로 실행되지 않고 부를 때 전진되는 것을 배웠습니다. 무려 for나 whiile문을 제어할 수 있는 것을 배웠습니다. 중간에 멈췄다 실행되는 이런 기능을 스펙문서에서는 generator suspension 이라고 합니다. 
http://2ality.com/2015/03/es6-generators.html

모든 Loop는 60년동안 많이 연구가 되어 있습니다.
ABSTRACT LOOP(루프의 추상화) 
LOOP와 recursive(재귀)의 재귀의 경우 반복할 때마다 평가를 한다는 차이점이 있습니다.
단순한 배열의 루프인 경우는 간단히 이터레이션을 작성 할 수 있음
복잡한 상태의 데이터를 가지고 있다면 이것을 어떻게 이터레이션 할 수 있을지에 대한 의문이 남게 됩니다.

class GENEATOR를 사용하려면 this를 사용할 수 있기 때문에 오류가 생길 수 있습니다. 
 -- 녹음 상 오류로 내용파악이 어렵습니다. 
 
 지금까지를 보면 Loop안의 행위는 객체가 실행을 책임지고 있고 외부에는 실행기 일 뿐이라는것을 알 수 있습니다. 다음값을 주는 로직을 루프안에 넣고 루프 밖에는 값을 주는역할만 합니다.

함수가 값을 받아서 처리하는 역할을 늘이고 싶을 때 루프안의 문을 늘릴 수 밖에 없는 상황이 발생합니다. 제어문이 재활용되지 않기 때문입니다. 제어구문 내 중복을 피할 수 없습니다. 그러기 때문에 iterator를 써서 제어구조를 for-of로 바꾸고 값만 나오니 거기서 처리 할 수 있기 때문에 중복이 최소화 됩니다.

결국 제어문을 직접 사용할 수 없고 구조적 제어를 이용해 루프실행기를 별도로 구현하는 방법이 있습니다. 이를 위해서 루프의 전체적인 부분을 파악해서 데이터값(변수)을 바꿀 수 있도록 코드는 고정되어 있지만 의미는 다르게 할 수 있습니다. (이것을 상태 프로그래밍이라고 합니다.)

그러면 데이터 값을 어떻게 처리할것인지에 대한 전략이 두개로 나누어 집니다. mandatory 하게 primitive일 때랑 객체일 때 두가지로 나누어 집니다.
그러나 전략이 늘어나게되면 코드가 늘어나서 유지보수하기 어려워 집니다. 그렇자면 전체 안에 여러가지 전략을 받아들일 수 있도록 만들어야 합니다. (쉽지않은 사고방법이긴 합니다.) 전략의 핵심은 데이터의 상태에 따라 값이 변경하는것인데 tumminator(종결전략-보통하나입니다.)과 나머지 전략이 있습니다. 이러한 사고를 기반으로 문에서 객체를 바꾸어 보는 생각을 하려고 합니다.

https://gist.github.com/14d57143327a306d2dee756208e4bd49.git

팩토리와 컴포지트 패턴을 이용하여 알아보려 하는데 먼저 Operator라는 클래스의 매소드만 생각해 보면 생성자에서 원본데이터 (v)를 잡아두고 오버라이드 하게 하지 않았습니다. 반드시 상속을 하게 만들었습니다. 첫번째 자식은 tumminator이자 primitive의 처리전략이고(v를 보내주 전략) array일 때 전략은 각각의 원소를 Operator라고 인식하게 하며 Operation을 호출하게 합니다. 따라서 기존코드를 건드리지 않고 수많은 전략을 사용 할 수 있습니다. 
팩토리 패턴을 사용하는 것은 의존성 때문입니다. 단방향 의존성이라 할 수 있는데 primitive,array의 Operator는 부모의 Operator를 의존하고 있습니다.
대신에 부모클래스와 자식 클래스를 알아야 하기 때문에 static를 만들어 객체인지 객체가 아닌 부분을 판단하여 전부클래스를 아는 책임을 한군데 몰아넣게 됩니다.

https://gist.github.com/fa7d0460e3ff1c607bdcee003102be1e.git

팩토리 + 컴포지트 + ES6 Iterable 로 변경한 상태입니다. 여기서 처음 보게되는 yield * 가 있습니다. 이것의 하는일은 yield가 다른(뒤에 위치해 있는) iterator를 대기해 주는 역할을 합니다. 마치 for-of를 쓰는것과 같습니다. iterator가 되었으니 for-of를 사용하여 (v)를 만들 수 있습니다. 

LAZY EXECUTION
앞서 이야기 한 데로 GENEATOR의 가장 큰 기능은 generator suspension입니다. 중간에 중지시키고 빠져 나올 수 있습니다. 
이론적으로 끊임없이 제어문의 연쇄를 멈출 수 있습니다. 일반적인 스트림 API라고 하는데 자바에서 사용하는 방법을 비슷하게 구현 할 수 있습니다.

https://gist.github.com/49ff12d8b01d39ae6f0c8129c356aa5f.git

마지막 문장은 두개의 GENEATOR를 결합한 것입니다. odd의 객체는 iterator이며 next()호출은 실제로 next호출을 당했을 때 호출하며 for-of는 take의 결과를 next할 때 호출됩니다. 결국에는 take가 for-of로 돌 때 next호출되는것이며 odd는 대기하는 것입니다.결과를 보면 odd돌고 take가 맞춰서 도는 것을 확인 할 수 있습니다. 실행에 대한 예약을 눈으로 확인 할 수 있습니다. Loop의 실행을 예약 할 수 있습니다.

그러면 이것을 일반적인 스트림 API로 만들어 보면 아래와 같습니다.
https://gist.github.com/e83a74c40997dfa17297e81b6e9143f8.git

Stream 클래스는 filters 라는 값을 저장하는 객체를 가지고 있는데 filter은 제너레이터를 받아들이고 추가 인자를 받습니다. 인자가 몇개 올 지 모르니 추가적으로 받는것이고 그 인자도 자유변수를 잡아놓아서 확정 지을 수 있습니다. filter있는 함수 들이 제너레이터를 받아들이고 v는 샐행된 함수를 넘겨주게 됩니다. 첫번째 v는 데이터 원본이지만 그 이후부터는 제너레이터가 덮어쓴것이고 이고 이터레이터 객체입니다. 그래서 반환해야 할 값이 yield * 가 되는 것입니다.






