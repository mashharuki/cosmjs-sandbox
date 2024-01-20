# CosmJS beginner sandbox

Use it to experiment with CosmJS commands.

## Install it

```sh
$ npm install
```

## Run it

```sh
$ npm run experiment
```

送金するとき

```bash
yarn transfer
```

実行結果

```bash
sender address neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl
recipient address neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms
{
  code: 0,
  height: 10148833,
  txIndex: 0,
  events: [
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] }
  ],
  rawLog: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"},{"key":"module","value":"bank"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"},{"key":"amount","value":"10000untrn"}]},{"type":"coin_received","attributes":[{"key":"receiver","value":"neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms"},{"key":"amount","value":"10000untrn"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms"},{"key":"sender","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"},{"key":"amount","value":"10000untrn"}]},{"type":"message","attributes":[{"key":"sender","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"}]}]}]',
  transactionHash: '1A8890390B2D7BE5E80FE1AE470C7738EEBEF65A24944F54C16B58EE4905FCF2',
  msgResponses: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSendResponse',
      value: Uint8Array(0) []
    }
  ],
  gasUsed: 72688n,
  gasWanted: 200000n
}
✨  Done in 9.46s.
```

CW20 トークンの残高を取得する

```bash
yarn getCW20Balance
```

```bash
$ ts-node ./src/getCW20Balance.ts
{ balance: '9999000' }
✨  Done in 7.08s.
```

CW20 トークンを送金する

```bash
yran transferCW20
```

実行結果

```bash
Transaction result: {
  code: 0,
  height: 10149068,
  txIndex: 0,
  rawLog: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"sender","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"},{"key":"module","value":"wasm"}]},{"type":"execute","attributes":[{"key":"_contract_address","value":"neutron1j9uvp68q6cyh7t7ywm2e5t6h52888sgfjeut84xhu8xvv8epx7tsmxc0lk"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"neutron1j9uvp68q6cyh7t7ywm2e5t6h52888sgfjeut84xhu8xvv8epx7tsmxc0lk"},{"key":"action","value":"transfer"},{"key":"from","value":"neutron1u55r4sujtgmwek6kp5p46gkwkznytrycrcxakl"},{"key":"to","value":"neutron1k8p8qmvjdncykck85awtezldsx07p97pkjxyms"},{"key":"amount","value":"5"}]}]}]',
  transactionHash: 'DC0F4607427E307BF2377BC9224AC12906F434A75379ED364E1FDCB5C8EF6C99',
  events: [
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'execute', attributes: [Array] },
    { type: 'wasm', attributes: [Array] }
  ],
  msgResponses: [
    {
      typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContractResponse',
      value: Uint8Array(0) []
    }
  ],
  gasUsed: 133258n,
  gasWanted: 200000n
}
✨  Done in 12.64s.
```

## Exercise progression

As you progress with your exercise, you can look at the _solutions_ in their respective branches. Here is how the branches follow each other:

-   `master`, start here
-   `file-preparation`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/master...file-preparation)
-   `with-stargate-client`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/file-preparation...with-stargate-client)
-   `with-signing-stargate-client`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/with-stargate-client...with-signing-stargate-client)
-   `send-tokens`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/with-signing-stargate-client...send-tokens)
-   `send-tokens-local`, [diff](https://github.com/b9lab/cosmjs-sandbox/compare/send-tokens...send-tokens-local)
