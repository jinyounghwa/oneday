컴파일러 설치  
계약은 EVM 바이트 코드로 컴파일한 후 블록체인에 배포해야 한다. 따라서 솔리디티 컴파일러를 설치해야 한다. 우분투의 공식 리포지 터리에서 배포되지 않기 때문에 PPA를 사용한다.
명령어는 다음과 같다.  
<pre><code>
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
</code></pre>
설치한 후 버전을 확인한다.  
<pre><code>
:~$ solc --version
</code></pre>
solc 경로를 확인해둔다.  
<pre><code>
:~$ which solc
</code></pre>

Geth를 실행해 콘솔에 접속한다. 데이터 디렉터리는 적절하게 변경한다.  
<pre><code>
nohup geth --networkid 4649 --nodiscover --maxpeers 0 --datadir /home/eth/data_testnet --mine --minerthreads 1 --rpc --rpcaddr "0.0.0.0" --rpcport 8545 --rpccorsdomain "*" --rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --unlock 0,1 --password /home/eth/data_testnet/passwd --verbosity 6 2>> /home/eth/data_testnet/geth.log &
</code></pre>

Geth 콘솔접속  
<pre><code>
geth attach rpc:http://localhost:8545
</code></pre>

admin.setSolc 명령으로 Geth에 solc경로를 설정한다. which로 확인한 경로를 인수로 지정한다.  
<pre><code>
admin.setSolc("/usr/bin/solc")
</code></pre>

확인한다.  
<pre><code>
eth.getCompilers()
</code></pre>  
