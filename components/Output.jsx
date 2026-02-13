
import { useState, useRef, useEffect } from "react";
import { Box, Button, Text, useToast, HStack, Tooltip, Textarea, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import { executeCode } from "../src/api";

const Output = ({ editorRef, language, isEditorReady }) => {
  const toast = useToast();
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showInputPanel, setShowInputPanel] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Focus input when panel opens
  useEffect(() => {
    if (showInputPanel && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInputPanel]);

  const runCode = async (stdin = "") => {
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
      setShowInputPanel(false);
      
      // Show execution start with input preview
      const outputBuffer = [{ type: "system", text: `▶ Running ${language}...` }];
      
      if (stdin.trim()) {
        const inputLines = stdin.split('\n').filter(line => line !== '');
        outputBuffer.push({ type: "system", text: "\n📥 Input provided:" });
        inputLines.forEach(line => {
          outputBuffer.push({ type: "input", text: line });
        });
        outputBuffer.push({ type: "system", text: "─".repeat(50) + "\n" });
      }
      
      setOutput(outputBuffer);
      
      const { run: result } = await executeCode(language, sourceCode, stdin);
      
      // Parse output
      const outputLines = result.output ? result.output.split("\n") : [];
      const newOutput = outputLines.map(line => ({ type: "output", text: line }));
      
      if (result.stderr) {
        setIsError(true);
        setOutput(prev => [
          ...prev, 
          ...newOutput, 
          { type: "error", text: "\n❌ Program exited with errors" }
        ]);
      } else {
        setOutput(prev => [
          ...prev, 
          ...newOutput, 
          { type: "success", text: "\n✅ Program completed successfully" }
        ]);
      }
      
    } catch (error) {
      console.log(error);
      setIsError(true);
      setOutput(prev => [...prev, { type: "error", text: `\n❌ Error: ${error.message || "Unable to run code"}` }]);
      toast({
        title: "Execution Error",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRunWithInput = () => {
    if (inputValue.trim()) {
      runCode(inputValue);
      setInputValue("");
    } else {
      toast({
        title: "No input provided",
        description: "Please enter input values or use 'Run Code' button",
        status: "warning",
        duration: 3000,
      });
    }
  };

  const handleKeyPress = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunWithInput();
    }
  };

  const copyOutput = () => {
    if (output.length > 0) {
      const text = output.map(item => item.text).join("\n");
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
    setOutput([]);
    setIsError(false);
    setShowInputPanel(false);
  };

  const getLineColor = (type) => {
    switch (type) {
      case "error":
        return "red.400";
      case "success":
        return "green.400";
      case "system":
        return "blue.300";
      case "input":
        return "yellow.300";
      default:
        return "gray.200";
    }
  };

  return (
    <Box w={{ base: "100%", md: "50%" }}>
      <HStack justify="space-between" mb={2}>
        <Text fontSize="lg">Output</Text>
        {output.length > 0 && (
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

      {/* Action Buttons */}
      <HStack spacing={2} mb={4}>
        <Button
          variant="outline"
          colorScheme="green"
          isLoading={isLoading}
          onClick={() => runCode("")}
          loadingText="Running..."
          disabled={!isEditorReady}
          aria-label="Run code without input"
          flex={{ base: 1, md: "auto" }}
        >
          Run Code
        </Button>
        <Button
          variant="outline"
          colorScheme="purple"
          onClick={() => setShowInputPanel(!showInputPanel)}
          disabled={!isEditorReady || isLoading}
          aria-label="Toggle input panel"
          flex={{ base: 1, md: "auto" }}
        >
          {showInputPanel ? "Hide Input" : "Add Input"}
        </Button>
      </HStack>

      {/* Input Panel */}
      {showInputPanel && (
        <Box 
          mb={4} 
          p={3} 
          bg="rgba(79, 70, 229, 0.1)" 
          borderRadius="md" 
          border="1px solid rgba(139, 92, 246, 0.3)"
        >
          <VStack align="stretch" spacing={3}>
            <Alert status="info" variant="left-accent" bg="rgba(66, 153, 225, 0.1)" fontSize="sm">
              <AlertIcon />
              <Text>
                <strong>Note:</strong> Enter all inputs your program needs (one per line) before running.
                This compiler cannot accept input during execution.
              </Text>
            </Alert>
            
            <Text fontSize="sm" color="gray.400">
              Example for a program that asks for name and age:
            </Text>
            <Box 
              p={2} 
              bg="rgba(0,0,0,0.3)" 
              borderRadius="md" 
              fontSize="xs" 
              fontFamily="monospace"
              color="gray.500"
            >
              John Doe<br/>
              25
            </Box>

            <Textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter inputs here (one per line)&#10;Example:&#10;5&#10;Hello&#10;42"
              rows={6}
              fontFamily="monospace"
              fontSize="0.9rem"
              bg="rgba(0, 0, 0, 0.4)"
              border="1px solid"
              borderColor="#444"
              color="yellow.300"
              _placeholder={{ color: "gray.600" }}
              _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px rgba(139, 92, 246, 0.6)" }}
            />

            <HStack>
              <Button
                colorScheme="purple"
                size="sm"
                onClick={handleRunWithInput}
                isLoading={isLoading}
                flex={1}
              >
                Run with This Input (Ctrl+Enter)
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInputPanel(false)}
              >
                Cancel
              </Button>
            </HStack>
          </VStack>
        </Box>
      )}

      {/* Output Display */}
      <Box
        height={{ base: "40vh", md: "75vh" }}
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto"
        bg="rgba(26, 21, 37, 0.4)"
        fontFamily="monospace"
        fontSize="0.9rem"
      >
        {output.length > 0 ? (
          <>
            {output.map((line, i) => (
              <Text 
                key={i} 
                color={getLineColor(line.type)} 
                whiteSpace="pre-wrap"
                mb={line.type === "system" ? 1 : 0}
              >
                {line.text}
              </Text>
            ))}
          </>
        ) : (
          <Text color="gray.500">
            Click "Run Code" to execute your program
            {"\n\n"}
            If your program needs input:
            {"\n"}1. Click "Add Input"
            {"\n"}2. Enter all required inputs (one per line)
            {"\n"}3. Click "Run with This Input"
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Output;