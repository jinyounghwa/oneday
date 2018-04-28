컴파일러 설치  
계약은 EVM 바이트 코드로 컴파일한 후 블록체인에 배포해야 한다. 따라서 솔리디티 컴파일러를 설치해야 한다. 우분투의 공식 리포지 터리에서 배포되지 않기 때문에 PPA를 사용한다.
명령어는 다음과 같다.  
<pre><code>
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
</code></pre>
