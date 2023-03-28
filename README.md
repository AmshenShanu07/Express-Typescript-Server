
# Express Typescript Backend 

This is a starter boilerplate code for typescript express Backend


## How to start the project
Install the dependencies
```bash
yarn install
```
Run the development server
```bash
yarn start:dev
```
Run the production server
```bash
yarn start
```


## Other Commands
To format the code with prettier:
```bash
yarn format
```

To check the lint error:
```bash
yarn lint
```

## Git Pre Commit Hook
This hook will run a bash script before doing a Commit. This script will check if there is any lint error exist before commiting the changes
```bash
#!/bin/bash
alias echo="echo -e"


# Format files using Prettier
echo -e 'Formatting the files 💅💅💅\n'
npm run format

# Check for lint errors
echo -e "\n\nChecking for lint errors 🧐🧐🧐"
npm run lint


# Check If npm run lint have any errors
if [ $? -ne 0 ]; then
  echo -e "\n\nLinting or formatting errors found 😓."
  echo "Please fix the above errors before pushing 🧹🙊."
  exit 1
else
  echo -e "\nGreat!, Your Code is pretty clean  🤝🎉🔥"
fi

```
