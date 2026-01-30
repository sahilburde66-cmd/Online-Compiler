import { useState } from "react";
import { Box, Button, Text, useToast, HStack, Tooltip } from "@chakra-ui/react";
import { executeCode } from "../src/api";

const Output = ({ editorRef, language, isEditorReady }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    if (!isEditorReady) {
      toast({
        title: "Editor not ready",
        description: "Please wait for the editor to load",
        status: "warning",
        duration: 3000,
      });
      return;
    }

    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      toast({
        title: "No code to run",
        description: "Please write some code first",
        status: "warning",
        duration: 3000,
      });
      return;
    }

    try {
      setIsLoading(true);
      setIsError(false);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyOutput = () => {
    if (output) {
      const text = output.join("\n");
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Output copied to clipboard",
        status: "success",
        duration: 2000,
      });
    }
  };

  const clearOutput = () => {
    setOutput(null);
    setIsError(false);
  };

  return (
    <Box w={{ base: "100%", md: "50%" }}>
      <HStack justify="space-between" mb={2}>
        <Text fontSize="lg">Output</Text>
        {output && (
          <HStack spacing={2}>
            <Tooltip label="Copy output">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="blue"
                onClick={copyOutput}
                aria-label="Copy output to clipboard"
              >
                Copy
              </Button>
            </Tooltip>
            <Tooltip label="Clear output">
              <Button
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={clearOutput}
                aria-label="Clear output"
              >
                Clear
              </Button>
            </Tooltip>
          </HStack>
        )}
      </HStack>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
        loadingText="Running..."
        disabled={!isEditorReady}
        aria-label="Run code"
        width={{ base: "100%", md: "auto" }}
      >
        Run Code
      </Button>
      <Box
        height={{ base: "40vh", md: "75vh" }}
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto"
        bg="rgba(26, 21, 37, 0.4)"
        fontFamily="monospace"
        fontSize="0.9rem"
      >
        {output ? (
          output.map((line, i) => (
            <Text key={i} whiteSpace="pre-wrap">
              {line}
            </Text>
          ))
        ) : (
          <Text color="gray.500">
            Click "Run Code" to see the output here
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Output;