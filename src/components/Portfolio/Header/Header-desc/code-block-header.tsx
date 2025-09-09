import { CodeBlock } from "@/components/CodeBlock/codeblock";

interface CodeBlockHeaderProps {
  showCode: boolean;
  styles?: string;
  fileName?: string;
  code?: string;
  breadCrumb?: string[];
  
}


const CodeBlockSection = ({ showCode, styles, fileName,breadCrumb,code }: CodeBlockHeaderProps) => {
  return (
    <>
      {showCode && (
        <CodeBlock
          language="tsx"
          filename={fileName || "src/home.tsx"}
          code={code || ''}
          highlightLines={[5, 11, 12]}
          breadcrumb={breadCrumb || ["portfolio", "src", "home.tsx"]}
          showStats={true}
          theme="dark"
          styles={styles}
        />
      )}
    </>
  );
};

export default CodeBlockSection;
