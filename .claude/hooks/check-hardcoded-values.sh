#!/bin/bash
INPUT=$(cat)
CONTENT=$(echo "$INPUT" | jq -r '.tool_input.newString // .tool_input.content // empty')

if echo "$CONTENT" | grep -qE '#[0-9a-fA-F]{6}([^0-9a-fA-F]|$)'; then
  echo "Blocked: Hardcoded hex colour detected. Use a CSS variable from globals.css" >&2
  exit 2
fi

exit 0
