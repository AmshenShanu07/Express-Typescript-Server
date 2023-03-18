#!/bin/bash

# Run the npm run command
npm run lint


# Check if the command exited with a non-zero status code
if [ $? == 0 ]; then
  echo "An error occurred while running 'npm run $1'. Please check the output above for details."
  exit 0
fi



exit 1
