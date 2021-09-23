#!/bin/bash
set -e

gh auth status

echo "-> Here are the last 10 releases from github"
gh release list -L 10

read -rep $'\nWhich version do you like to release?\n=> ' GIT_TAG
NOTE_FILE="$(mktemp).md"
cat - >$NOTE_FILE <<EOF
# Type 'o' and write the release notes in markdown syntax
EOF
${VISUAL:-${EDITOR:-vi}} $NOTE_FILE


NOTE_CONTENT=$(cat $NOTE_FILE |grep -v \#)
cat - >$NOTE_FILE <<EOF
$NOTE_CONTENT
EOF

cat - <<EOF

GIT TAG: $GIT_TAG
RELEASE TITLE: $GIT_TAG
RELEASE NOTES:
--- 
$(cat $NOTE_FILE)
EOF

read -rep $'Do you with to create this release?\n(y/n)=> ' choice
case "$choice" in 
  y|Y ) gh release create $GIT_TAG -F $NOTE_FILE --target main -t $GIT_TAG;;
  n|N ) echo -e "\naborting ..."; exit 0;;
  * ) echo "invalid choice";;
esac

