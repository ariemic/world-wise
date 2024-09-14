#!/bin/bash

for img in $(ls -r img/*); do
  echo "![Image Description]($img)" >> README.md
done