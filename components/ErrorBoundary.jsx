import { Component } from "react";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          bg="#0f0a19"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <VStack
            spacing={4}
            bg="rgba(26, 21, 37, 0.6)"
            p={8}
            borderRadius="12px"
            border="1px solid rgba(139, 92, 246, 0.2)"
            maxW="500px"
          >
            <Heading size="lg" color="red.400">
              Oops! Something went wrong
            </Heading>
            <Text color="gray.300" textAlign="center">
              An unexpected error occurred. Don't worry, your code is safe!
            </Text>
            {this.state.error && (
              <Text
                fontSize="sm"
                color="gray.500"
                fontFamily="monospace"
                bg="rgba(0,0,0,0.3)"
                p={3}
                borderRadius="4px"
                maxW="100%"
                overflow="auto"
              >
                {this.state.error.toString()}
              </Text>
            )}
            <Button
              colorScheme="purple"
              onClick={this.handleReset}
              width="full"
            >
              Return to Home
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;