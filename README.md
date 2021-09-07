## CodeceptTesting

# Setup
Run command before testing: `yarn`

# Command lines
- `yarn start`: init http server in order to run a server local
- `yarn test`: run all test cases in folder `testcases`

# Result
Please check folder `output`

# Structure
```
CodeceptTesting
├─ codecept.conf.js
├─ index.html
├─ jsconfig.json
├─ output
│  ├─ coverage
│  │  ├─ test_fail__1630997934.coverage.json
│  │  └─ test_somet_1630997935.coverage.json
│  └─ test_fail_something.failed.png
├─ package.json
├─ README.md
├─ steps_file.js
├─ testcases
│  ├─ Fail_test.js
│  └─ Form_test.js
└─ yarn.lock
```