# tvm-graphql
Node server with Time-Value-of-Money API ready using GraphQL.

### Example mutation query:
```
mutation{
  computePv(properties:{fv:1000, rate:5, nper:10})
}
```
#### Result:
```
{
  "data": {
    "computePv": -613.91
  }
}
```


### Other mutations available:
```
computeFv(...):Float!
computeInterestRate(...):Float!
computeNper(...):Float!
```

## Specs
- Used of Apollo server.
- TypeDefs & Mutations in a single directory.
- Used of [tvm-calculator by treywhite21](https://github.com/treywhite21/tvm-calculator) as its core library for TVM.
