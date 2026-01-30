import { useRef, useState } from "react";
import { Box, HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../src/constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Responsive layout: stack vertically on mobile
  const isMobile = useBreakpointValue({ base: true, md: false });

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
    setIsEditorReady(true);
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const LayoutComponent = isMobile ? VStack : HStack;

  return (
    <Box>
      <LayoutComponent spacing={4} align="stretch">
        <Box w={{ base: "100%", md: "50%" }}>
          <LanguageSelector language={language} onSelect={onSelect} />
          {!isEditorReady && (
            <Box
              height="75vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="rgba(26, 21, 37, 0.6)"
              borderRadius="4px"
            >
              <Box color="gray.400">Loading editor...</Box>
            </Box>
          )}
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 14,
              lineHeight: 21,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: "on",
              accessibilitySupport: "on",
            }}
            height={isMobile ? "50vh" : "75vh"}
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            loading={null}
          />
        </Box>
        <Output 
          editorRef={editorRef} 
          language={language} 
          isEditorReady={isEditorReady}
        />
      </LayoutComponent>
    </Box>
  );
};

export default CodeEditor;