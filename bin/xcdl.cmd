:: Created by npm, please don't edit manually.
@ECHO OFF

SETLOCAL

SET "NODE_EXE=%~dp0\node.exe"
IF NOT EXIST "%NODE_EXE%" (
  SET "NODE_EXE=node"
)

SET "XCDL_JS=%~dp0\xcdl.js"

"%NODE_EXE%" "%XCDL_JS%" %*
