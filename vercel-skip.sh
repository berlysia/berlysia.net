#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[
  "$VERCEL_GIT_COMMIT_REF" == develop ||
  ("$VERCEL_GIT_COMMIT_AUTHOR_LOGIN" == "berlysia" &&
  "${VERCEL_GIT_COMMIT_REF:0:9}" != "renovate/") ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
