interface ShowCodeBtnProps {
  code: string;
  showCode: boolean;
  setShowCode: (show: boolean) => void;
}

const ShowCodeBtn = ({ code, showCode, setShowCode }: ShowCodeBtnProps) => {
  return (
      <button onClick={() => setShowCode(!showCode)} className="text-white">I</button>
  );
};

export default ShowCodeBtn;